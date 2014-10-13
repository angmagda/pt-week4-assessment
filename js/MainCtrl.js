var app = angular.module('toDoList');

app.controller('MainCtrl', function($scope, mainService){

	$scope.things = mainService.getThings();

	$scope.newThing = function() {

		mainService.addThing($scope.thing);

	};

	



});