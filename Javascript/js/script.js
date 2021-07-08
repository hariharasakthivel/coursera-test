/*var x = "in global";
console.log("global: message = " + x);

var a = function() {
	var x="inside a";
	console.log("a: message = " + x);
	function b() {
	console.log("b: message = " + x)
}
	b();
}
a();*/


/*var x;
console.log(x);

if(x==undefined){
	console.log("x is undefined");
}

x=5;
if(x==undefined) {
	console.log("x is undefined");
}
else{
	console.log("x has been defined");
}*/

/*
var string="Hello";
string +=" World";
//string = string +" World";
console.log(string + "!");*/

/*console.log((5+4)/3);
console.log(undefined/5);
function test1(a) {
	console.log(a/5);
}
test1();*/

/*var x=4,y=4;
if(x==y){
	console.log("x=4 is equal to y=4");
}
x='4';
if(x==y){
	console.log("x='4' is equal to y=4");
}*/

/*var x=4,y=4;
x='4';
if(x===y){
	console.log("Strict: x='4' is equal to y=4");
}
else{
	console.log("Strict: x='4' is NOT equal to y=4");
}*/


/*if(false || null || undefined || "" || 0 || NaN){
	console.log("This line won't ever execute");
}
else{
	console.log("All false");
}

if(true && "hello" && 1 && -1 && "false"){
	console.log("All true");
}*/

/*function a()
{
	return
	{
		name:"Hari"
	};
}
function b(){
	return{
		name:"Hari"
	};
}
console.log(a());
console.log(b());*/

/*var sum=0;
for(var i=0;i<10;i++){
	console.log(i);
	sum=sum+i;
}
console.log("sum of 0 through 9 is: " + sum);
*/


/*function orderChickenWith(sideDish){
	//if(sideDish===undefined){
	//	sideDish="bread";
	//}
	sideDish = sideDish || "whatever";
	console.log("Chicken with "+ sideDish);
}
orderChickenWith("noodles");
orderChickenWith();*/

/*
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.Firstname = "Mark";
company.ceo.Favcolor = "Blue";
console.log(company);
console.log("CEO name: "+ company.ceo.Firstname);
console.log(company["name"]);
var Stock = "company stock";
company[Stock]=452;
console.log("Stock price: "+company[Stock]);
*/

/*//Better way:Object literal
var facebook = {
	name:"Facebook",ceo:{Firstname: "Mark",Favcolor: "Blue"},"company stock": 450
}
console.log(facebook);
console.log(facebook.ceo.Firstname);
*/

/*function multiply(x,y){
	return x*y; 
}
var z=multiply(5,3);
console.log(z);
multiply.version="v.1.0.0";
console.log(multiply.version);*/

//Function factory
/*function MakeMultiplier(multiple){
	var Func=function(x){
		return multiple*x;
	};
	return Func;
}
var m3=MakeMultiplier(3);
console.log(m3(10));
var m2=MakeMultiplier(2);
console.log(m2(1000));



function Dooperation(x,operation){
	return operation(x);
}
var result=Dooperation(5,m3);
console.log(result);
result=Dooperation(50,m2);
console.log(result);
*/


/*
//Pass by value
var a = 7;
var b = a;
console.log("a: "+a);
console.log("b: "+b);

b=5;
console.log("After b update");
console.log("a: "+a);
console.log("b: "+b);

*/
/*
//Pass by reference
var a = {x:7};
var b = a;
console.log(a);
console.log(b);

b.x=5;
console.log("After b.x update");
console.log(a);
console.log(b);
*/

/*
function changePrimitive(primValue){
	console.log("In changePrimitive..");
	console.log("Before:");
	console.log(primValue);

	primValue=5;
	console.log("Afer:");
	console.log(primValue);	
}
var value = 7;
changePrimitive(value);
console.log("After changePrimitive,original value:");
console.log(value);
*/

/*function changeObject(objValue){
	console.log("In changeObject..");
	console.log("Before:");
	console.log(objValue);

	objValue.x=5;
	console.log("Afer:");
	console.log(objValue);	
}
var value = {x:7};
changeObject(value);
console.log("After changeObject,original value:");
console.log(value);
*/

/*function test(){
	console.log(this);
	this.name="Hari";
}
test();
console.log(window.name);*/


/*var literalcircle={
	radius:10,
	getarea:function(){
		var self=this;
		console.log(this);
		var increaseradius=function(){
			self.radius=20;
		}
		increaseradius();
		console.log (this.radius);
		return Math.PI * Math.pow(this.radius,2);
	}
};
console.log(literalcircle.getarea());

*/




/*//Arrays
var array = new Array();
array[0]="Hari";
array[1]=48;
array[2]=function(name){
	console.log("Hello "+name);
};
array[3]={course:"Html, Css and Js"};
console.log(array);
array[2](array[0]);
console.log(array[3].course);
*/

/*
var names=["eddy","wayne","Basha"];
console.log(names);
for(var i=0;i<names.length;i++){
	console.log("Hi "+ names[i]);
}

names[10]="Jack";
for(var i=0;i<names.length;i++){
	console.log("Hi "+ names[i]);
}
*//*
var Myobj={name:"James",class:"IT-A",college:"Psg"};
for(var prop in Myobj){
	console.log(prop+"="+Myobj[prop]);
}

var names=["eddy","wayne","Basha"];
names.greeting="Hi";
for(var name in names){
	console.log("Hello "+names[name]);
}
*/



/*
//Closures
function makeMuliplier(multiplier){
	//var multiplier=2;
	function b(){
		console.log("Multiplier is: "+multiplier);
	}
	b();
	return(
		function (x){
			return multiplier*x;
		}
		);
}
var m2=makeMuliplier(2);
console.log(m2(10));
*/
(function(window){
var WayneGreeter={};
WayneGreeter.name="Wayne";
var greet="Hello ";
WayneGreeter.sayHello= function(){
	console.log(greet +WayneGreeter.name);
}
window.WayneGreeter=WayneGreeter;
})(window);