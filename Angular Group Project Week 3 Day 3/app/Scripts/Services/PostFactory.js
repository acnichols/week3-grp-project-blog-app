app.factory('PostFactory', function ($http, $q) {
    var firebase = 'https://pizzafacotry.firebaseio.com/';
    var postArray = [];

    var GetPost = function () {
        var def = $q.defer();
        $http({
            method: 'GET',
            url: firebase + '.json'
        }).success(function (data) {
            var arr = [];
            for (var prop in data) {
                data[prop].key = prop;
                postArray.push(data[prop]);
            }
        }).error(function (data) {
            console.log('You have an error in the GET');
            def.reject();
        });
        return def.promise;
    }

    var PostPost = function (post) {
        var def = $q.defer();
        $http({
            method: 'POST',
            data: post,
            url: firebase + '.json'
        }).success(function (data) {
            post.key = data.name;
            def.resolve(post);
        }).error(function (data) {
            console.log('You have an error in the POST');
            def.reject();
        });
        return def.promise;
    }
    return {

        PostPost: PostPost,
        GetPost: GetPost
    }
    
});