var app = angular.module('myPomodoro', []);

app.controller('pomodoroCtrl', function($scope, $interval) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.countDown = 1500;

    $scope.startPomodoro = function(){
    $interval(function(){
      if ($scope.countDown === 0){
        $scope.stopPomodoro();
        } else {
        console.log($scope.countDown--)
      }},1000);
    }

    $scope.stopPomodoro = function(){
      $interval.cancel()
    }
    }).filter('secondsToDateTime', [function() {
      return function(seconds) {
          return new Date(1970, 0, 1).setSeconds(seconds);
      };
}]);
