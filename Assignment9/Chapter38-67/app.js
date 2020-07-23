//-----------------Assignment 38-42 - FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS----------------

//1.
function power(a, b) {
    return Math.pow(a, b);
}
alert("4 raised to power 2 = " + power(4, 2));

//2.
function leapYear() {
    var year = +prompt("Enter Year", "2020")
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        alert(year + "is leap year");
    }
    else {
        alert(year + "is not a leap year");
    }
}

//3.
function calcS(a, b, c) {
    var sum = a + b + c;
    return sum / 2;
}
function calcArea(a, b, c) {
    var S = calcS(a, b, c);
    var area = S * (S - a) * (S - b) * (S - c);
    return area;
}
var a = +prompt("Enter value of side a", "3");
var b = +prompt("Enter value of side b", "4");
var c = +prompt("Enter value of side c", "5");
alert("Area of triangle is " + calcArea(a, b, c));

//4.
function calcPercentage(m1, m2, m3) {
    return ((m1 + m2 + m3) * 100) / 300;
}
function calcAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3
}
function mainFunction(m1, m2, m3) {
    document.write("<br> Total Marks = " + (m1 + m2 + m3));
    document.write("<br> Average Marks = " + calcAverage(m1, m2, m3));
    document.write("<br> Percentage = " + calcPercentage(m1, m2, m3) + "%");
}
var sub1 = +prompt("Enter marks of Subject 1", "75");
var sub2 = +prompt("Enter marks of Subject 2", "80");
var sub3 = +prompt("Enter marks of Subject 3", "85");
mainFunction(sub1, sub2, sub3);

//5.
function customIndexOf(word, char) {
    var index;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == char) {
            index = i;
            break
        }
        else {
            index = -1
        }
    }
    return index;
}
var word = "Javascript";
var index = customIndexOf(word, "s");
document.write("<br>String: " + word);
document.write("<br>Index of 's': " + index);

//6.
function removeVowels(sen) {
    for (var i = 0; i < sen.length; i++) {
        if (sen[i] === 'A' || sen[i] === 'E' || sen[i] === 'e' || sen[i] == 'a' || sen[i] === 'I' || sen[i] === 'i' || sen[i] === 'O' || sen[i] === 'o' || sen[i] === 'U' || sen[i] === 'u') {
            sen = sen.slice(0, i) + sen.slice(i + 1)
        }
    }
    alert("Now Sentence is " + sen);
}
removeVowels(prompt("Enter any sentence", "Lorem ipsum dolor set amet"));

//7.
function countSuccessiveVowels(sen) {
    var st = "", cnt = 0;
    for (var i = 0; i < sen.length; i++) {
        (sen[i] + sen[i + 1]).toLowerCase();
        switch (sen[i] + sen[i + 1]) {
            case 'ae':
            case 'ai':
            case 'ao':
            case 'au':
            case 'aa':

            case 'ea':
            case 'ei':
            case 'eo':
            case 'ee':
            case 'eu':

            case 'ia':
            case 'ie':
            case 'io':
            case 'iu':
            case 'ii':
            case 'oa':
            case 'oe':
            case 'oi':
            case 'ou':
            case 'oo':

            case 'ua':
            case 'ui':
            case 'uo':
            case 'uu':
            case 'ue':
                st = st + sen[i] + sen[i + 1] + ",";
                cnt++;
                break;
            default:
                continue;
        }
    }
    document.write("<br>Sentence = " + sen + "<br>Occurrences are = " + st + "<br>Total number = " + cnt);
}
countSuccessiveVowels("Please read this application and give me gratuity ");

//8.
function feet(dis) {
    document.write("<br>Distance in feet = " + (dis * 1000 * 3.2) + "ft");
}
function meter(dis) {
    document.write("<br>Distance in meters = " + (dis * 1000) + "m");
}
function cm(dis) {
    document.write("<br>Distance in centimeters = " + (dis * 1000 * 100) + " cm");
}
function inches(dis) {
    document.write("<br>Distance in inches = " + (dis * 1000 * 39.37) + " inches");
}
var distance = +prompt("Enter distance in km", "10");
feet(distance);
meter(distance);
cm(distance);
inches(distance);

//9.
function calcPay() {
    var workingHours = +prompt("Enter total working hours", "65");
    switch (true) {
        case workingHours > 40: {
            var overTimePay = (workingHours - 40) * 12;
            alert("Overtime pay is " + overTimePay + " RS");
            break;
        }
        default: {
            alert("Sorry No Overtime Pay");
        }
    }
}
calcPay();

//10.
function currencyNotes() {
    var amount = +prompt("Enter amount to withdraw", "470");
    var hundred = Math.floor(amount / 100);
    var fifty = Math.floor((amount % 100) / 50);
    var ten = Math.floor((amount % 100) % 50) / 10;
    var remaining = Math.floor(((amount % 100) % 50) % 10);
    document.write("<br><br>You will have " + hundred + " hundred notes & " + fifty + " fifty notes & " + ten + " ten notes.");
}
currencyNotes();

//---------------------------------------Assignment 43-48 - EVENTS------------------------------------------

//1.
//Done in index.html

//2.
//Done in index.html

//3.
function removeRow(child) {
    var row = child.parentNode.parentNode.rowIndex;
    document.getElementById('myTable').deleteRow(row);
}

//4.
//Done in index.html

//5.
var counter = document.getElementById('counter')
var num = 0;
counter.innerHTML = 0
function increase() {
    num++;
    counter.innerHTML = num
}
function decrease() {
    num--;
    counter.innerHTML = num
}

//---------------------------------------Assignment 49-52 - EVENTS------------------------------------------


//1.
function submit() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    document.write("<br>Full Name: " + fname + " " + lname);
    document.write("<br>Email: " + email);
}


//2.
var div = document.getElementById('para')
var text1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima ducimus cupiditate dignissimos nobis a rerum soluta ut dolore esse nam, quas, quod vitae optio, itaque vel incidunt in ex.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, nisi nulla! Consequuntur in minus ipsa labore exercitationem, rem vel delectus itaque molestiae modi, unde non officia ipsam, minima ea dolor?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium sapiente dolorem minus esse totam ratione beatae, amet explicabo ipsum delectus hic nihil possimus eius tempore pariatur accusamus aspernatur aperiam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem amet incidunt accusantium voluptates eius minus saepe. Maxime numquam inventore, assumenda illum, impedit excepturi, sed aperiam labore nam saepe adipisci tempore. `
var text2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio minima ducimus cupiditate dignissimos >>>>`
function showMore() {
    div.children[0].innerText = text1
    div.children[1].innerText = 'Show Less'
    div.children[1].getAttributeNode('onclick').value = 'showLess()'
}
function showLess() {
    div.children[0].innerText = text2
    div.children[1].innerText = 'Show More'
    div.children[1].getAttributeNode('onclick').value = 'showMore()'
}

//3.
function add() {
    var table = document.getElementById("data");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = document.getElementById("index").value;
    cell2.innerHTML = document.getElementById("name").value;
    cell3.innerHTML = document.getElementById("level").value;
    cell4.innerHTML = "<button id='edit' type='button' onclick='edit(this)'>Edit</button>";
    cell5.innerHTML = "<button id='del' type='button' onclick='del(this)'>Delete</button>";
}
function del(cell) {
    var row = cell.parentNode.parentNode;
    row.parentNode.removeChild(row);

}
function edit(cell) {
    var row = cell.parentNode.parentNode;
    document.getElementById("index").value = row.cells[0].innerHTML;
    document.getElementById("name").value = row.cells[1].innerHTML;
    document.getElementById("level").value = row.cells[2].innerHTML;
}

// <!-- chap53-58

// 1-Consider you have 4 images in a file as shown below: 


// Modal code is available in this assignment file.
var arrImgSrc = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.png']
var imgDiv = document.getElementById('img')
var modal = document.getElementById('modal');
modal.classList.add('modal-open')
modal.classList.remove('modal-close')
for (var i = 0; i < arrImgSrc.length; i++) {
    var img = document.createElement('img')
    var imgAtt = document.createAttribute('src')
    img.src = arrImgSrc[i]
    img.setAttribute('onclick', 'open(arrImgSrc[i])')
    imgDiv.appendChild(img)
}
function open(imgSrc) {
    console.log('clicked')

    modal.classList.add('modal-open')
    modal.classList.remove('modal-close')
    var imgModal = document.getElementById('modal-img')
    imgModal.src = imgSrc;
}
function onClosedImagModal() {
    modal.classList.remove('modal-open')
    modal.classList.add('modal-close')
    setTimeout(() => { modal.style.display = "none"; }, 550)
}



// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
//  On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph. -->
var pTag = document.getElementById('zoom')
var size = 10
function zoomIn() {
    size = size + 10
    pTag.style.fontSize = `${size}px`
}
function zoomOut() {
    size = size - 10
    pTag.style.fontSize = `${size}px`
}

// <!-- chap58-67

// 1- Consider you have following code snippet:
// (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>

// i- Get element of id “main-content” and assign them in a variable.
// ii- Display all child elements of “main-content” element.
// iii- Get all elements of class “render” and show their innerHTML
// in browser.
// iv- Fill input value whose element id first-name using javascript.
// v-  Repeat part iv for id ”last-name” and “email”.

var mainContent = document.getElementById('main-content')
console.log(mainContent.children)
var render = document.getElementsByClassName('render')
for (var i = 0; i < render.length; i++) {

    console.log(render[i].innerHTML)
}

var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var email = document.getElementById('e-mail')

firstName.value = "Anum"
lastName.value = "Essani"
email.value = "anum.essani@gmail.com"




// 2. use HTML code of question 1 and show the result on browser.

// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii.Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName ”.
// vi. Get parent node and node type of element having id “email”
console.log(document.getElementById("form-content").nodeType)
console.log(document.getElementById("lastName").childNodes)
console.log(document.getElementById("lastName").childNodes[0].value = "LastName Update")

console.log(mainContent.firstChild, mainContent.lastChild)
console.log(document.getElementById('lastName').nextSibling, document.getElementById('lastName').previousSibling)
console.log(document.getElementById('email').parentElement)

