(function(window){
var TeddyGreeter={};
TeddyGreeter.name="Teddy";
var greet="Hi ";
TeddyGreeter.sayHi=function(){
	console.log(greet+TeddyGreeter.name);
}

window.TeddyGreeter=TeddyGreeter;
})(window);