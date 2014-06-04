'use strict';

app.controller('PostsCtrl', function($scope, $location, Post)
{
    if ($location.path() === '/')
    {
        $scope.posts = Post.all;
    }
    
    $scope.post = {title: "", score: 0, platform: "testplatform"};
    
    $scope.upVotePost = function(postId, upVoted)
    {
        if(upVoted)
        {
            Post.clearVote(postId, upVoted);
        }
        else
        {
            Post.upVote(postId);
        }
    };
    
    $scope.downVotePost = function(postId, downVoted)
    {
        if(downVoted)
        {
            Post.clearVote(postId, !downVoted);
        }
        else
        {
            Post.downVote(postId);
        }
    };
    
    $scope.upVoted = function(post)
    {
        return Post.upVoted(post);
    };
    
    $scope.downVoted = function(post)
    {
        return Post.downVoted(post);
    };
    
    $scope.deletePost = function (postId)
    {
        Post.delete(postId);
    };
    
    $scope.commentCount = function(post)
    {
        return Object.keys(post.comments).length;
    };
    
    $scope.getAuthor = function(post)
    {
        return Post.getAuthor(post)
    };
});