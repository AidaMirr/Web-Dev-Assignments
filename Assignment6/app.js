
//-----------------------------------------Chapters 21-25 - STRING METHODS----------------------------------------
document.write("<h1>Chapters 21-25 - STRING METHODS</h1>");

//1.
var name1 = prompt("Enter First Name");
var name2 = prompt("Enter Last Name");
var fullName = name1 + " " + name2;
alert("Hello " + fullName + "!");

//2.
var user1 = prompt("Enter Your Mobile Phone Model", "Samsung Galaxy");
var a = user1.length;
document.write("My favorite phone is: " + user1 + "<br>Length of String: " + a + "<br><br>");

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
document.write("City: " + city + "<br>After Replacement: " + city1 + "<br><br>");

//8.
var message1 = "Ali and Sami are best friends. They play cricket and football together.";
var message = message1.replace(/and/g, "&");
document.write("String: " + message1 + "<br>After Replacement: " + message + "<br><br>");

//9.
var a = "272";
var n = Number(a);
document.write("Value: " + a + "<br>Type: " + typeof (a) + "<br>Value: " + n + "<br>Type: " + typeof (n) + "<br>");

//10.
var x1 = prompt("Convert to Uppercase", "peanuts");
var x = x1.toUpperCase();
document.write("User Input: " + x1 + "<br>Uppercase: " + x + "<br><br>");

//11.
var user1 = prompt("Enter a word", "javascript");
var user = user1.charAt(0);
var title = user.toUpperCase();
var user2 = user1.replace(user, title);

document.write("User Input: " + user1 + "<br>Title case: " + user2 + "<br>");

//12.
var num = 35.36;
var x = num.toString().replace(".", "");
document.write("Number: " + num + "<br>Result: " + x + "<br><br>");

//13.
var user1 = prompt("Enter Username", "cm@d");

for (var i = 0; i < user1.length; i++) {
    if (user1.charCodeAt(i) === 33 || user1.charCodeAt(i) === 44 || user1.charCodeAt(i) === 46 || user1.charCodeAt(i) === 64) {
        alert("Please enter a valid username!");
        break;
    }
}

//14.
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var x = prompt("Welcome to Bakery!\nWhat do you want to order?", "ApPLe PiE");
var y = x.toLowerCase();
var b = a.indexOf(y);
if (b < 0) {
    alert("We are sorry " + x + " is not available in our bakery!")
} else {
    alert(y + " is available at Index " + b + " in our bakery!")
}

//15.
var pass1 = prompt("Enter Password", "123cmad");
var pass = pass1.charCodeAt(0);
document.write("<br>Entered Password: " + pass1 + "<br>");

if (pass >= 48 && pass <= 57) {
    alert("Password must not begin with a Number\nPlease enter a valid password")
    document.write("Password must not begin with a Number!<br>Please enter a valid password.<br>")
} else if (pass1.length < 6) {
    alert("Password must be atleast 6 characters long\nPlease enter a valid password")
    document.write("Password must be atleast 6 characters long!<br>Please enter a valid password.<br>")
}

//16.
var university = "University of Karachi";
var arr = university.split("");
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>")
}

//17.
var user = prompt("Enter a word", "Pakistan");
var lastChar = user.charAt(user.length - 1);
document.write("<br>User Input: " + user + "<br>Last Character of Input: " + lastChar + "<br>");

//18.
var text = "The quick brown fox jumps over the lazy dog";
var x = text.length;
for (var i = 0; i < x; i++) {
    if (text.slice(i, i + 3) === "the" || text.slice(i, i + 3) === "The") {
        alert("found");
    }
}
document.write("<br>Text: " + text + "<br>There are 2 occurrence(s) of the word 'the'.<br>");


//-----------------------------------------Chapters 26-30 - MATH METHODS------------------------------------------------
document.write("<h1>Chapters 26-30 - MATH METHODS</h1>");

//1.







