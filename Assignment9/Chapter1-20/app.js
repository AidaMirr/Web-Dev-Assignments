
//-------------------------------------------------Assignment 1 – Alerts---------------------------------------------------------

//1.
alert("Welcome");

//2.
alert("Error! Please enter a valid password.");

//3.
alert("Welcome to JS Land...\nHappy Coding!");

//4.
alert("Welcome to JS Land...");
alert("Happy Coding!");

//5.
console.log("Hello… I can run JS through my web browser’s console");

//6. Completed in index.html

//7. Completed in index.html


//-------------------------------------------------Assignment 2 - VARIABLES FOR STRINGS-----------------------------------------
//1.
var username;

//2.
var myName = "Aida Mir";

//3.
var _message;
_message = "Hello World";
alert(_message);

//4.
var name = "John Doe";
var age = "15 Years Old";
var certification = "Certified Mobile Application Development";

alert(name);
alert(age);
alert(certification);

//5.
var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP";
alert(pizza);

//6.
var email = "aidaamirr@gmail.com";
alert("My email address is " + email);

//7.
var book = "“A smarter way to learn JavaScript”.";
alert("I am trying to learn from the book " + book);

//8.
document.write("Yeah! I can write HTML content through JavaScript<br>");

//9.
var _string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(_string);
document.write(_string + "<br>");

//-------------------------------------------------Assignment 3 - VARIABLES FOR NUMBERS-------------------------------------------

//1.
var age = 3;
alert("I am " + age + " years old");

//2.
var n = 5;
alert("You have visited this website " + n + " times.");

//3.
var birthYear = 1800;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof (birthYear) + "<br>");

//4.
var visitor_name = "John Doe";
var product_name = "t-shirt";
var quantity = 5;

document.write(visitor_name + " ordered " + quantity + " " + product_name + "s on XYZ Clothing Store" + "<br>");


//-------------------------------------------------Assignment 4 - VARIABLE NAMES: LEGAL & ILLEGAL-----------------------------------
//1.
var a, b, c;

//2. legal
var abc;
var _abc;
var abc_1;
var $abc;
var abc1;

//illegal

//  var 123;
//  var 1abc;
//  var &abc;
//  var @abc;
//  var !abc;

//3.
document.write("<h1>Rules for naming JS variables</h1><br><p>Variable names can only contain numbers, $, and _. For example: $my_1stVariable<br>Variables must begin with a letter, $ or _. For example: $name, _name or name<br>Variable names are case sensitive<br>Variable names should not be JS keywords<br></p>");


//-------------------------------------------------Assignment 5 - MATH EXPRESSIONS------------------------------------------------

//1.
var x = 10;
var y = 15;
var z = x + y;

document.write("The sum of " + x + " and " + y + " is " + z + "<br>");

//2.
z = x - y
document.write("The subraction of " + x + " and " + y + " is " + z + "<br>");

z = x * y
document.write("The multiplication of " + x + " and " + y + " is " + z + "<br>");

z = x / y
document.write("The division of " + x + " and " + y + " is " + z + "<br>");

z = x % y
document.write("The modulus of " + x + " and " + y + " is " + z + "<br><br>");

//3.
var a;
document.write("Value after variable declaration is: " + a + "<br>")
a = 23;
document.write("Initial value: " + a + "<br>");
a++;
document.write("Value after increment is: " + a + "<br>");
a = a + 7;
document.write("Value after addition is: " + a + "<br>");
a--;
document.write("Value after decrement is: " + a + "<br>");
a = a % 3;
document.write("The remainder is: " + a + "<br><br>");

//4.
var price = 300;
var total = price * 10;
document.write("Total cost to buy  10 tickets to a movie is " + total + "PKR<br>");

//5.
var num = 5;
document.write("Table of " + num + "<br>");
for (i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (i * num) + "<br>");
}

//6.
var c = 30;
var f = (c * 9 / 5) + 32;
document.write("<br>" + c + "<sup>o</sup>C is " + f + "<sup>o</sup>F" + "<br>");
var f = 98;
var c = (f - 32) * 5 / 9;
document.write(f + "<sup>o</sup>F is " + c + "<sup>o</sup>C");

//7.
var price1 = 500;
var price2 = 200;
var qtyItem1 = 5;
var qtyItem2 = 4;
var shpCharges = 150;
var total = price1 * qtyItem1 + price2 * qtyItem2 + shpCharges;

document.write("<h1>Shopping Cart</h1>" + "Price of item 1 is " + price1 + "<br>Quantity of item 1 is " + qtyItem1 + "<br>Price of item 2 is " + price2 + "<br>Quantity of item 2 is " + qtyItem2 + "<br>Shipping Charges " + shpCharges + "<br><br>Total cost of your order is " + total);

//8.
var totMarks = 1000;
var marksObt = 775;
var percentage = (marksObt / totMarks) * 100;

document.write("<h1>Marks Sheet</h1>" + "Total marks: " + totMarks + "<br>Marks Obtained: " + marksObt + "<br>Percentage: " + percentage);

//9.
var usd$ = 164.52;
var sar$ = 43.8;
var pkr$ = 10 * usd$ + 25 * sar$;

document.write("<h1>Currency in PKR</h1> Total Currency in PKR: " + pkr$ + "<br>");

//10.
var n = 5;
n = ((n + 5) * 10) / 2;
document.write("The result is: " + n + "<br>");

//11.
var currentYear = 2020;
var birthYear = 1980;
var age = currentYear - birthYear;
document.write("<h1>Age Calculator</h1>Current Year: " + currentYear + "<br>Birth Year: " + birthYear + "<br>Your age is: " + age + "<br>");

//12.
var radius = 4.4;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("<h1>The Geometrizer</h1>" + "The radius of circle is: " + radius + "<br>The circumference is: " + circumference + "<br>The area is: " + area + "<br>");

//13.
var snack = "Cocomo";
var age = 20;
var maxAge = 70;
var amntPerDay = 2;
var total = (maxAge - age) * amntPerDay * 365;

document.write("<h1>The Life Time Calculator</h1>" + "Favourite Snack: " + snack + "<br>Current age: " + age + "<br>Estimated Maximum Age: " + maxAge + "<br>Amount of snacks Per day: " + amntPerDay + "<br>You will need: " + total + " " + snack + " to last you until the ripe old age of " + maxAge + "<br>");


//-------------------------------------------------Assignment 6-9 - MATH EXPRESSIONS-----------------------------------------------

//1.
var a = 10;
document.write("The value of a is: " + a + "<br><br>The value of ++a is: " + (++a) + "<br>Now The value of a is: " + a + "<br><br>The value of a++ is: " + (a++) + "<br>Now The value of a is: " + a + "<br><br>The value of --a is: " + (--a) + "<br>Now The value of a is: " + a + "<br><br>The value of a-- is: " + (a--) + "<br>Now The value of a is: " + a + "<br>");

//2.
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write("Value of a is: 2<br>Value of b is:1<br>Expression is: --a - --b + ++b + b--<br>");
document.write("Values become: 1~~~0~~~1~~~1~~~0<br>The result is: " + result + "<br>");

//3.
var name = prompt("Enter your Name");
alert("Hello " + name + " have a good day!");

//5.
var num = +prompt("Enter a Number", "5");
document.write("Table of " + num + "<br>");
for (i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (i * num) + "<br>");
}

//6.
var a = prompt("Enter First Subject Name");
var b = prompt("Enter Second Subject Name");
var c = prompt("Enter Third Subject Name");
var aMarks = +prompt("Enter First Subject Marks");
var bMarks = +prompt("Enter Second Subject Marks");
var cMarks = +prompt("Enter Third Subject Marks");
var totMarks = 100;

document.write(
    "<table>" +
    "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>" +
    "<tr><td>" + a + "</td><td>" + totMarks + "</td><td>" + aMarks + "</td><td>" + (aMarks / totMarks) * totMarks + " %</td></tr>" +
    "<tr><td>" + b + "</td><td>" + totMarks + "</td><td>" + bMarks + "</td><td>" + (bMarks / totMarks) * totMarks + " %</td></tr>" +
    "<tr><td>" + c + "</td><td>" + totMarks + "</td><td>" + cMarks + "</td><td>" + (cMarks / totMarks) * totMarks + " %</td></tr>" +
    "<tr><td>Total</td><td>" + (totMarks * 3) + "</td><td>" + (aMarks + bMarks + cMarks) + "</td><td>" + ((aMarks + bMarks + cMarks) / (totMarks * 3) * 100) + " %</td></tr>" +
    "</table>");

//-------------------------------------------------Assignment 9-11 - USER INPUT & CONDITIONAL STATEMENT----------------------------

//1.
var _city = prompt("Enter City Name");
var city = _city.toLowerCase();
if (city === "karachi") {
    alert("Welcome to City of Lights!")
}

//2.
var _gender = prompt("Enter Your Gender");
var gender = _gender.toLowerCase();
if (gender === "male") {
    alert("Good Morning Sir!")
} else if (gender === "female") {
    alert("Good Morning Ma'am!")
} else {
    alert("Change Your Gender")
}

//3.
var _light = prompt("Enter Color of Traffic Signal Light");
var light = _light.toLowerCase();
if (light === "red") {
    alert("Must Stop!")
} else if (light === "yellow") {
    alert("Ready to Move!")
} else if (light === "green") {
    alert("Move Now!")
} else {
    alert("Are you colorblind???")
}

//4.
var fuel = +prompt("Enter Remaining Fuel");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
} else {
    alert("You're good to go!")
}

//5.

//a.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// ALERT MESSAGE DISPLAYED - CONDITION TRUE

// b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// ALERT MESSAGE NOT DISPLAYED - CONDITION FALSE

// c.
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// ALERT MESSAGE DISPLAYED - CONDITION 2 IS TRUE

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// ALERT MESSAGE DISPLAYED - CONDITION IS TRUE

// e.
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// ALERT MESSAGE DISPLAYED - CONDITION IS TRUE

// f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// ALERT MESSAGE DISPLAYED - CONDITION IS TRUE


//6.
var sub1 = +prompt("Enter First Subject Marks");
var sub2 = +prompt("Enter Second Subject Marks");
var sub3 = +prompt("Enter Third Subject Marks");
var totMarks = 300;
var marksObt = sub1 + sub2 + sub3;
var percentage = (marksObt / totMarks) * 100;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You Need to improve";
} else if (percentage < 60) {
    grade = "Fail";
    remarks = "Sorry";
}
document.write("<h1>Marks Sheet</h1>" + "<br>Total Marks :" + totMarks + "<br>Marks Obtained :" + marksObt + "<br>Percentage :" + percentage + "%" + "<br>Grade :" + grade + "<br>Remarks :" + remarks + "<br");


//7.
var n = 5;
var num = +prompt("Enter the number");
if (n == num) {
    alert("Bingo! Correct Answer")
} else if (++num == n) {
    alert("Close enough to the correct answer")
} else {
    alert("You lost!")
}

//8.
var n = +prompt("Enter a Number");

if (n % 3 === 0) {
    alert("Number is Divisible by 3")
} else {
    alert("Number is not Divisble by 3")
}

//9.
var n = +prompt("Enter a number: ");
if (n % 2 === 0) {
    alert(n + " is EVEN number")
} else {
    alert(n + " is ODD number")
}

//10.
var temp = prompt("Enter the Temperature");
if (temp > 40) {
    alert("It is too hot outside!")
} else if (temp > 30) {
    alert("The weather today is Normal!")
} else if (temp > 20) {
    alert("Today's weather is cool!")
} else if (temp > 10) {
    alert("OMG! Today's weather is so Cool!")
} else {
    alert("Sorry wrong Temperature!")
}

//11.
var num1 = +prompt("Enter First Number");
var operator = prompt("Enter an operator(+,-,*,/,%)");
var num2 = +prompt("Enter Second Number");
if (operator === "+") {
    alert(num1 + "+" + num2 + "=" + (num1 + num2))
} else if (operator === "-") {
    alert(num1 + "-" + num2 + "=" + (num1 - num2))
} else if (operator === "*") {
    alert(num1 + "*" + num2 + "=" + (num1 * num2))
} else if (operator === "/") {
    alert(num1 + "/" + num2 + "=" + (num1 / num2))
} else if (operator === "%") {
    alert(num1 + "%" + num2 + "=" + (num1 % num2))
} else {
    alert("Error! Try again.")
}

//--------------------------------------Assignment 12-13 - IF...ELSE & ELSE IF STATEMENT,-----------------------------------------
//--------------------------------------------------------TESTING SET OF CONDITIONS-----------------------------------------------

//1.
var _char = prompt("Enter Character (a-z,A-Z,0-9)");
var char = _char.charCodeAt(0);
if (char >= 65 && char <= 90) {
    alert(_char + " is Capital letter")
} else if (char >= 97 && char <= 122) {
    alert(_char + " is Small letter")
} else if (char >= 48 && char <= 57) {
    alert(_char + " is a Number")
} else {
    alert("Error! Try again.")
}

//2.
var n1 = prompt("Enter first Integer");
var n2 = prompt("Enter second Integer");
var num1 = parseInt(n1);
var num2 = parseInt(n2);
if (num1 > num2) {
    alert(n1 + " is larger than " + n2)
} else if (num1 < num2) {
    alert(n2 + " is larger than " + n1)
} else {
    alert(n1 + " and " + n2 + " are equal");
}

//3.
var num = +prompt("Enter a Number");
if (num > 0) {
    alert(num + " is Positive")
} else if (num < 0) {
    alert(num + " is Negative")
} else {
    alert(num + " is Zero");
}

//4.
var char = prompt("Enter a Character");
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert("true")
} else {
    alert("false")
}

//5.
var pass = "pakistan";
var userPass = prompt("Enter your Password");
if (userPass === null || userPass === "") {
    alert("Please enter your Password!")
} else if (userPass === pass) {
    alert("Correct! Password you entered matches the original password!");
} else {
    alert("Incorrect Password!");
}

//6.
var greeting;
var hour = +prompt("Enter current hour");
if (hour < 18 && hour > 6) {
    greeting = "Good Day!";
} else if (hour < 5) {
    greeting = "Good Evening!";
}
alert(greeting);

//7.
var time = +prompt("Enter Time(2400 format)");
if (time >= 0000 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time < 2359) {
    alert("Good night!");
}


//-------------------------------------------------Assignment 14-16 - ARRAYS-------------------------------------------------------

//1.
var arr1 = [];

//2.
var arr2 = new Array();

//3.
var fruits = ["Apple", "Orange", "Plum"];

//4.
var numbers = [10, 20, 30, 40, 50];

//5.
var arr3 = [true, false];

//6.
var arr4 = ["Apple", 10, true, "Karachi"];

//7.
var arr5 = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("Qualifications: <br>");
for (var i = 0; i <= 7; i++) {
    document.write("<br>" + i + 1 + ")" + arr5[i] + "<br>")
}

//8.
var students = ["Ali", "Ahmed", "Hassan"];
var scores = [400, 300, 500];
var percentage = [];
for (var i = 0; i <= 2; i++) {
    percentage[i] = (scores[i] / 500) * 100
}
for (var j = 0; j <= 2; j++) {
    document.write("Score of " + students[j] + " is " + scores[j] + ". Percentage: " + percentage[j] + "% <br>")
}

//9.
var colors = ["Red", "Green", "Blue"];
document.write(colors + "<br>");
//a.
var user1 = prompt("Enter Color to add to the Beginning");
colors.unshift(user1);
document.write(colors + "<br>");
//b.
var user2 = prompt("Enter Color to add to the Ending");
colors.push(user2);
document.write(colors + "<br>");
//c.
colors.unshift("Pink", "Orange");
document.write(colors + "<br>");
//d.
colors.shift();
document.write(colors + "<br>");
//e.
colors.pop();
document.write(colors + "<br>");
//f.
var i = +prompt("Enter Index Number to add Color");
var col1 = prompt("Enter Color to add on Index");
colors.splice(i, 0, col1);
document.write(colors + "<br>");
//g.
var j = +prompt("Enter Index Number to Delete Color");
var col2 = +prompt("Enter how many Colors to Delete");
colors.splice(j, col2);
document.write(colors + "<br>");

//10.
var scores = [320, 230, 480, 120];
document.write("Scores of Students: " + scores + "<br>");
scores.sort();
document.write("Ordered Scores of Students: " + scores + "<br>");

//11.
var cities = ["Quetta", "Karachi", "Islamabad", "Lahore", "Peshawar"];
document.write("Cities list: <br>" + cities + "<br>");
var selectedCities = cities.slice(2, 4);
document.write("Selected Cities list: <br>" + selectedCities + "<br>");

//12.
var arr1 = ["This", "is", "my", "cat"];
document.write("Array: <br>" + arr1 + "<br>");
var string = arr1.join(" ");
document.write("String: <br>" + string + "<br>");

//13.
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices : <br>" + devices + "<br>");
var device1 = devices.shift();
document.write("Out : <br>" + device1 + "<br>");
var device2 = devices.shift();
document.write("Out : <br>" + device2 + "<br>");
var device3 = devices.shift();
document.write("Out : <br>" + device3 + "<br>");
var device4 = devices.shift();
document.write("Out : <br>" + device4 + "<br>");

//14.
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices : <br>" + devices + "<br>");
var device1 = devices.pop();
document.write("Out : <br>" + device1 + "<br>");
var device2 = devices.pop();
document.write("Out : <br>" + device2 + "<br>");
var device3 = devices.pop();
document.write("Out : <br>" + device3 + "<br>");
var device4 = devices.pop();
document.write("Out : <br>" + device4 + "<br>");

//15.
var phones = ["Apple", "Samsung", "Motorla", "Nokia", "Sony", "Haier"];
document.write("<select>" + "<option>" + phones[0] + "</option>" + "<option>" + phones[1] + "</option>" + "<option>" + phones[2] + "</option>" + "<option>" + phones[3] + "</option>" + "<option>" + phones[4] + "</option>" + "<option>" + phones[5] + "</option>" + "</select>" + "<br>")


//-------------------------------------------------Assignment 17-20-----------------------------------------------------------------

//1.
var arr1 = [[], [], []];

//2.
var arr2 = [[], [], []];
arr2[0] = ["0", "1", "2", "3"];
arr2[1] = ["1", "0", "1", "2"];
arr2[2] = ["2", "1", "0", "1"];
arr3 = arr2[0].join(" ");
arr4 = arr2[1].join(" ");
arr5 = arr2[2].join(" ");
document.write(arr3 + "<br>" + arr4 + "<br>" + arr5 + "<br>");

//3.
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}

//4.
var num = +prompt("Enter Number of Table", "5");
var len = +prompt("Enter Length of Table", "10");
document.write("Table of " + num + "<br>");
document.write("Length: " + len + "<br>");
for (i = 1; i <= len; i++) {
    document.write(num + " x " + i + " = " + (i * num) + "<br>");
}

//5.
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var len = fruits.length;
for (var i = 0; i < len; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>")
}

//6.

//a.
var num = [];
for (var i = 0; i < 15; i++) {
    num[i] = i + 1;
}
document.write("<h2>Counting :</h2>" + num + "<br>");

//b.
document.write("<h2>Reverse Counting :</h2>" + num.reverse() + "<br>");

//c.
var even = [];
for (var a = 0; a <= 20; a++) if (a % 2 == 0) {
    even[a] = a;
}
var even1 = even.join(" ");
document.write("<h2>Even :</h2>" + even1 + "<br>");

//d.
var odd = [];
for (var b = 1; b <= 20; b++) if (b % 2 !== 0) {
    odd[b] = b;
}
var odd1 = odd.join(" ");
document.write("<h2>Odd :</h2>" + odd1 + "<br>");

//e.
var series = [];
for (var d = 1; d <= 20; d++) if (d % 2 === 0) {
    series[d] = d + "k";
}
var series1 = series.join(" ");
document.write("<h2>Series :</h2>" + series1 + "<br>");

//7.
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var x = prompt("Welcome to Bakery!\nWhat do you want to order?");
var b = a.indexOf(x);
if (b < 0) {
    alert("We are sorry " + x + " is not available!")
} else {
    alert(x + " is available!")
}

//8.
var arr = [24, 53, 78, 91, 12];
var a = arr.sort();
var b = arr[4];
document.write("Array items: " + arr + "<br>The Largest number is " + b + "<br>");

//9.
var arr = [24, 53, 78, 91, 12];
var a = arr.sort();
var b = arr[0];
document.write("Array items: " + arr + "<br>The Smallest number is " + b + "<br>");

//10.
var a = [];
for (var i = 1; i <= 100; i++) if (i % 5 === 0) {
    a[i] = i;
}
var b = a.join(" ");
document.write(b);

