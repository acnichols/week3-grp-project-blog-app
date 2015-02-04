app.controller('HomeController', function ($scope, PostFactory) {
    $scope.posts = [];

    $scope.post = function (title, author, body) {
        this.title = title;
        this.author = author;
        this.body = body;
    }

    $scope.addPost = function () {
        $scope.post = new $scope.post($scope.inputTitle, $scope.inputAuthor, $scope.inputBody);

        PostFactory.PostPost($scope.post).then(function (data) {
            $scope.posts.push(data);
        })
        
        $scope.inputTitle = $scope.inputAuthor = $scope.inputBody = '';

    }
        PostFactory.GetPost().then(function (data) {
            $scope.posts = data;
    });
})