var app = angular.module('myPomodoro', []);

app.controller('pomodoroCtrl', function($scope, $interval) {
    $scope.countDown = 1500; // 1500s = 25 min

    var stop;
    var playing = false;

    $scope.startPomodoro = function(){
      if (angular.isDefined(stop)) return;
      stop = $interval(function(){
        if ($scope.countDown === 0){
          $scope.stopPomodoro();
          } else {
          console.log($scope.countDown--)
        }},100);
        playing = true;
      };

    $scope.stopPomodoro = function(){
      if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        stop = undefined;
        }
        playing = true;
      };

    $scope.resetPomodoro = function(){
      $scope.countDown = 1500;
      };

    }).filter('secondsToDateTime', [function() {
      return function(seconds) {
          return new Date(1970, 0, 1).setSeconds(seconds);
      };
}]);
