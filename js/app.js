var app = angular.module('feed', ['percentage']);

app.controller("PostController", function($scope, $http) {
  $http.get('data/feed.json').
    success(function(data, status, headers, config) {
      $scope.posts= data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});

(function() {
  var searchAll = element(by.model('search.$'));
  searchAll.clear();
  searchAll.sendKeys('i');
});

angular.module('percentage', [])
    .filter('percentage', ['$window', function ($window) {
        return function (input, decimals, suffix) {
            decimals = angular.isNumber(decimals)? decimals :  3;
            suffix = suffix || '%';
            if ($window.isNaN(input)) {
                return '';
            }
            return Math.round(input * Math.pow(10, decimals + 0))/Math.pow(10, decimals) + suffix
        };
    }]);

