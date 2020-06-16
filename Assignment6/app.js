
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
var city = "Hyderabad";
var city1 = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>After Replacement: " + city1 + "<br>");

//8.
var message1 = "Ali and Sami are best friends. They play cricket and football together.";
var message = message1.replace(/and/g, "&");
document.write("String: " + message1 + "<br>After Replacement: " + message + "<br>");

//9.
var a = "272";
var n = Number(a);
document.write("Value: " + a + "<br>Type: " + typeof (a) + "<br>Value: " + n + "<br>Type: " + typeof (n) + "<br>");

//10.
var x1 = prompt("Convert to Uppercase", "peanuts");
var x = x1.toUpperCase();
document.write("User Input: " + x1 + "<br>Uppercase: " + x + "<br>");

//11.






















