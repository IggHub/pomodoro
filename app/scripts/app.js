var app = angular.module('myPomodoro', ['firebase']);

app.controller('pomodoroCtrl', function($scope, $interval, $firebaseObject, $firebaseArray) {
    /* scopes; rename for clarity */
    $scope.countDownPomodoro = 1500; // 1500s = 25 min
    $scope.countDownBreak = 300;
    $scope.countDownLongBreak = 1800;
    $scope.workCounter = 0;
    $scope.hideStart = false;
    $scope.bellTrigger = false;

    /* variables */
    var pomodoroBell = new buzz.sound( "/assets/sounds/door-bell.mp3", {
      preload: true
    });
    var initializing = true;
    var onBreak = false; //initially onBreak will be false
    var playing = false;
    var stop;

    /* methods */
    $scope.$watch('bellTrigger', function(newVal, oldVal) {
      if(newVal === oldVal) {
        return;
      } else {
      pomodoroBell.play();
      $scope.bellTrigger = false;
      }
    });

    $scope.startPomodoro = function(){
      if (angular.isDefined(stop)) return;
      stop = $interval(function(){
        if ($scope.countDownPomodoro === 0){
          $scope.stopPomodoro();
          $scope.onBreak = true; //once timer hits 0, onBreak = true
          $scope.workCounter += 1;
          $scope.resetPomodoro();
          $scope.hideStart = false;
          $scope.bellTrigger = true;
          } else {
            return $scope.countDownPomodoro--;
        }},1000);
      };

    $scope.startBreak = function(){
      if (angular.isDefined(stop)) return;
      stop = $interval(function(){
        if ($scope.countDownBreak === 0){
          $scope.stopBreak();
          $scope.onBreak = false;
          $scope.resetBreak();
          $scope.hideStart=false;
          $scope.bellTrigger = true;
          //$scope.playing = true;
          } else {
            return $scope.countDownBreak--;
        }},1000);
      };

    $scope.startLongBreak = function(){
      if (angular.isDefined(stop)) return;
      stop = $interval(function(){
        if ($scope.countDownLongBreak === 0){
          $scope.stopLongBreak();
          //$scope.onBreak = true;
          $scope.resetLongBreak();
          $scope.hideStart = false;
          $scope.workCounter = 0;
          $scope.onBreak = false;
          $scope.bellTrigger = true;
          } else {
            return $scope.countDownLongBreak--;
        }},1000);
      };

    $scope.stopPomodoro = function(){
      if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        $scope.playing = false;
        stop = undefined;
        }
      };

    $scope.stopBreak = function(){
      if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        $scope.playing = false;
        stop = undefined;
        }
      };

    $scope.stopLongBreak = function(){
      if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        $scope.playing = false;
        stop = undefined;
        }
      };

    $scope.resetPomodoro = function(){
      $scope.countDownPomodoro = 1500;
      };

    $scope.resetBreak = function(){
      $scope.countDownBreak = 300;
      };

    $scope.resetLongBreak = function(){
      $scope.countDownLongBreak = 1800;
      };

    var ref = firebase.database().ref().child("tasks"); //points to child ('tasks') from root

    // create a synchronized array
    $scope.tasks = $firebaseArray(ref);
    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addTask = function() {
      $scope.tasks.$add({
        text: $scope.newTaskText
      });
      var form = document.getElementById("input-16");
      form.value = '';
    };


    }).filter('secondsToDateTime', [function() {
      return function(seconds) {
          return new Date(1970, 0, 1).setSeconds(seconds);
      };
}]);
