'use strict';

app.controller('NavCtrl', function($scope, $location, $rootScope, Auth, Post)
{
    $scope.post = {url: "http://", title: "", score: 0, platform: "testplatform"};
    
    $scope.submitPost = function()
    {
        if($scope.post.url !== "" && $scope.post.url !== "http://"
            && $scope.post.title != "")
        {
            Post.create($scope.post).then(function(postId)
            {
                //$location.path('/posts/' + postId);
                $scope.post = {url: "http://", title: "", score: 0, platform: "testplatform"};
            });
        }
    };
    
    $scope.logout = function () 
    {
        Auth.logout();
    };
    
    $scope.loginNav = function()
    {
        $location.path('/login');
    };
});