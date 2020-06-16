
//-----------------------------------------Chapters 21-25 - STRING METHODS-----------------------------------

//1.
var name1 = prompt("Enter First Name");
var name2 = prompt("Enter Last Name");
var fullName = name1 + " " + name2;
alert("Hello " + fullName + "!");

//2.
var user1 = prompt("Enter Your Mobile Phone Model");
var a = user1.length;
document.write("My favorite phone is: " + user1 + "<br>Length of String: " + a + "<br>");

//3.
var a = "Pakistani";
var n = a.indexOf("n");
document.write("String: " + a + "<br>Index of 'n': " + n + "<br>");

//4.
var a = "Hello World";
var l = a.lastIndexOf("l");
document.write("String: " + a + "<br>Last Index of 'l': " + l + "<br>");

//5.
var a = "Pakistani";
var n = a.charAt(3);
document.write("String: " + a + "<br>Character at Index 3: " + n + "<br>");

//6.
var _name1 = prompt("Enter First Name");
var name1 = _name1 + " ";
var name2 = prompt("Enter Last Name");
var fullName = name1.concat(name2);
alert("Hello " + fullName + "!");

//7.





