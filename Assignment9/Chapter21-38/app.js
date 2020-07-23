
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
var a = 0;
for (var i = 0; i < x; i++) {
    if (text.slice(i, i + 3) === "the" || text.slice(i, i + 3) === "The") {
        a++;
    }
}
document.write("<br>Text: " + text + "<br>There are " + a + " occurrence(s) of the word 'the'.<br>");


//-----------------------------------------Chapters 26-30 - MATH METHODS------------------------------------------------
document.write("<h1>Chapters 26-30 - MATH METHODS</h1>");

//1.
var n = +prompt("Enter a Positive Number", "3.45214");
var x = Math.round(n);
var y = Math.floor(n);
var z = Math.ceil(n);
document.write("<br>Number: " + n + "<br>Round Off Value: " + x + "<br>Floor Value: " + y + "<br>Ceil Value: " + z + "<br><br>");

//2.
var n = +prompt("Enter a Negative Number", "2.673");
var x = Math.round(n);
var y = Math.floor(n);
var z = Math.ceil(n);
document.write("Number: " + n + "<br>Round Off Value: " + x + "<br>Floor Value: " + y + "<br>Ceil Value: " + z + "<br><br>");

//3.
var n = +prompt("Enter a Number", "-4");
var x = Math.abs(n);
document.write("The absolute value of " + n + " is " + x + "<br><br>");

//4.
var random = Math.random();
var num = (random * 6) + 1;
var dice = Math.floor(num);
document.write("Random value of Dice: " + dice + "<br><br>");

//5.
var random = Math.random();
var coin = Math.round(random);
if (coin == 0) {
    document.write("Random value of Coin Toss: Tails<br><br>");
} else {
    document.write("Random value of Coin Toss: Heads<br><br>");
}

//6.
var random = Math.random();
var num = (random * 100) + 1;
var x = Math.floor(num);
document.write("Random number between 1 and 100: " + x + "<br><br>");

//7.
var user1 = prompt("Enter Your Weight in kilograms", "123.4 kilograms");
document.write("The weight of user is: " + user1 + "<br><br>");

//8,
var random = Math.random();
var x = (random * 10) + 1;
var n = Math.floor(x);
var num = +prompt("Guess the number(1-10)", "8");
if (n == num) {
    alert("Congratulations!\nCorrect Answer")
} else {
    alert("You lost\nTry again")
}


//-----------------------------------------Chapters 31-34 - DATE METHODS------------------------------------------------
document.write("<h1>Chapters 31-34 - DATE METHODS</h1>");

//1.
var x = new Date();
document.write(x + "<br><br>");

//2.
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var n = new Date();
var x = n.getMonth();
var mon = months[x];
document.write("Current month: " + mon + "<br><br>");

//3.
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var n = new Date();
var x = n.getDay();
var today = days[x];
document.write("Today is " + today + "<br><br>");

//4.
var n = new Date();
var day = n.getDay();
if (day == 0 || day == 6) {
    document.write("It's Fun Day!<br><br>");
}

//5.
var today = new Date();
var days = today.getDate();
if (days < 16) {
    document.write("First fifteen days of the month<br><br>");
} else {
    document.write("Last fifteen days of the month<br><br>");
}

//6.
var n = new Date();
var milli = n.getTime();
var minutes = Math.floor(milli / (1000 * 60));
document.write("Current Date: " + n + "<br>Elapsed milliseconds since Jan. 1, 1970: " + milli + "<br>Elapsed minutes since Jan. 1, 1970: " + minutes + "<br><br>");

//7.
var today = new Date();
var hour = today.getHours();
if (hour < 12) {
    document.write("<h3>It's AM</h3><br>");
} else {
    document.write("<h3>It's PM</h3><br>");
}

//8.
var laterDate = new Date("Dec 31 2020");
document.write("Later Date: " + laterDate + "<br><br>");

//9.
var today = new Date();
var ramadan = new Date("Apr 25 2020");
var todaymilli = today.getTime();
var ramadanmilli = ramadan.getTime();
var diff = todaymilli - ramadanmilli;
var diffdays = Math.floor(diff / (1000 * 60 * 60 * 24));
document.write(diffdays + " days have passed since 1<sup>st</sup> Ramadan 2020<br><br>");

//10.
var today = new Date();
var start = new Date("Jan 1 2020");
var todaymilli = today.getTime();
var startmilli = start.getTime();
var diff = todaymilli - startmilli;
var diffsec = Math.floor(diff / 1000);
document.write("On reference date : " + today + "<br>" + diffsec + " seconds have passed since beginning of 2020<br><br>");

//11.
var today = new Date();
document.write("Current date: " + today + "<br>");
var hour = today.getHours() - 1;
today.setHours(hour);
document.write("1 hour ago, it was: " + today + "<br><br>");

//12.
var today = new Date();
document.write("Current date: " + today + "<br>");
var hundred = today.getFullYear() - 100;
today.setFullYear(hundred);
document.write("100 years back, it was: " + today + "<br><br>");

//13.
var age = +prompt("Enter Your Age", "40");
var n = new Date();
var birthYear = n.getFullYear() - age;
document.write("Your age is: " + age + "<br>Your birth year is: " + birthYear + "<br><br>");

//14.
var n = new Date();
var m = n.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var name = prompt("Enter Your Name", "Customer");
var units = +prompt("Enter Number of Units", "410");
var charges = +prompt("Enter Charges per unit", "16");
var netAmt = units * charges;
var lateAmt = netAmt * (5 / 100);
var grossAmt = netAmt + lateAmt;
document.write("<h2>K-Electric Bill</h2>Customer Name: " + name + "<br>Month: " + months[m] + "<br>Number of Units: " + units + "<br>Charges per unit: " + charges + "<br><br>");
document.write("Net Amount Payable (within Due Date): " + netAmt.toFixed(2) + "<br>Late Payment Surcharge: " + lateAmt.toFixed(2) + "<br>Gross Amount Payable (after Due Date): " + grossAmt.toFixed(2) + "<br><br>");


//-----------------------------------------Chapters 35-38 - FUNCTIONS------------------------------------------------
document.write("<h1>Chapters 35-38 - FUNCTIONS</h1>");

//1.
function date() {
    var n = new Date();
    document.write(n + "<br>");
}
date();

//2.
function greeting() {
    var firstName = prompt("Enter First Name");
    var lastName = prompt("Enter Last Name");
    var fullName = firstName + " " + lastName;
    alert("Hello " + fullName + " !");
}
greeting();

//3.
function sum() {
    var num1 = +prompt("Enter First Number");
    var num2 = +prompt("Enter Second Number");
    return num1 + num2;
}
document.write("<br>The sum is " + sum());

//4.
var num1 = +prompt("Enter First Number");
var sign = prompt("Enter Operator (+, -, *, /, %)");
var num2 = +prompt("Enter Second Number");

function calc(num1, sign, num2) {
    if (sign === "+") {
        return num1 + num2;
    } else if (sign === "-") {
        return num1 - num2;
    } else if (sign === "*") {
        return num1 * num2;
    } else if (sign === "/") {
        return num1 / num2;
    } else if (sign === "%") {
        return num1 % num2;
    }
}
document.write("<br><br>" + num1 + sign + num2 + "=" + calc(num1, sign, num2));

//5.
var num1 = +prompt("Enter Number to Calculate Square");
function square(num) {
    return num * num
}
document.write("<br>Square of " + num1 + " is " + square(num1));

//6.
var num1 = +prompt("Enter Number to Calculate Factorial");
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
document.write("<br>Factorial of " + num1 + " is " + factorial(num1));

//7.
var num1 = +prompt("Enter Start Number for Counting");
var num2 = +prompt("Enter End Number for Counting");
function counting(num1, num2) {
    for (var i = num1; i <= num2; i++) {
        document.write("<br>" + i);
    }
}
document.write("<br><br>Counting from " + num1 + " to " + num2);
counting(num1, num2);

//8.
var base = +prompt("Enter Base of Triangle");
var perp = +prompt("Enter Perpendicular of Triangle");
function calculateHypotenuse(base, perp) {
    var hypo = calculateSquare(base) + calculateSquare(perp);
    function calculateSquare(num) {
        return num * num;
    }
    return Math.sqrt(hypo);
}
document.write("<br><br>Hypotenuse of Triangle with Base " + base + " and Perpendicular " + perp + " = " + calculateHypotenuse(base, perp));

//9.
//i.Arguments as value

function area(width, height) {
    return width * height;
}
document.write("<br>Area of Rectangle: " + area(4, 2));

//ii. Arguments as variables
var width = 4;
var height = 2;
function area(width, height) {
    return width * height;
}
document.write("<br>Area of Rectangle: " + area(width, height));

//10.
function palindrome(word) {
    word = word.toLowerCase();
    var check = true;
    var len = word.length;
    for (var i = 0; i < Math.floor(len / 2); i++) {
        if (word[i] !== word[len - 1 - i]) {
            check = false;
        }
    }
    if (check === true) {
        alert(word + " is a palindrome");
    }
    else {
        alert(word + " is not a palindrome");
    }
}
palindrome(prompt("Enter Word to Check if it is Palindrome"));

//11.
var user = prompt("Enter a String", "the quick brown fox");
function titleCase(string) {
    var arr = string.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
    }
    string = arr.join(" ");
    return string;
}
document.write("<br><br>String: " + user + "<br>Title Case: " + titleCase(user));

//12.
var user = prompt("Enter a String to Find Longest Word", "Web Development Tutorial");
function longest(string) {
    var arr = string.split(" ");
    var longest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (longest.length < arr[i].length) {
            longest = arr[i];
        }
    }
    return longest;
}
document.write("<br><br>String: " + user + "<br>Longest Word: " + longest(user));

//13.
var string = prompt("Enter any String", "JSResources.com");
var letter = prompt("Enter a Letter to Count Occurence", "o");
function count(string, letter) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            count++;
        }
    }
    return count;
}
document.write("<br><br>The letter " + letter + " occurs " + count(string, letter) + " times in " + string);

//14.
var radius = +prompt("Enter Radius of Circle", "4");

function calcCircumference(radius) {
    var circumference = 2 * 3.14 * radius;
    document.write("<br>The Circumference of Circle is " + circumference.toFixed(2));
}
function calcArea(radius) {
    var area = 3.14159 * radius * radius;
    document.write("<br>The Area of Circle is " + area.toFixed(2));
}
calcCircumference(radius);
calcArea(radius);



