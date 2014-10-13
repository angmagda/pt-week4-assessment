var app = angular.module('toDoList');

app.factory('mainService', function() {

var thingsToDo = [{

	text: 'Going to the dentist'
},
{
	text: 'Buy soap'
},
{
	text: 'Prepare lunch'
},
{
	text: 'Finish DevMountain Project'

}];


 return {
   getThings: function() {
     return thingsToDo;
   },


   addThing: function(thing) {
   	thingsToDo.push(thing);

   },



 };
   


});