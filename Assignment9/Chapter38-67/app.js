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
var text2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio minima ducimus cupiditate dignissimos `
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

//---------------------------------------Assignment 53-57 - EVENTS------------------------------------------
//1.
var images = document.getElementById("images");
var paths = ["images/others/1.jpg", "images/others/2.jpg", "images/others/3.jpg", "images/others/4.png", "images/others/5.jpg", "images/others/6.jpg", "images/others/7.png", "images/others/8.jpg", "images/others/9.jpg", "images/others/10.jpg", "images/others/11.jpg", "images/others/12.jpg", "images/others/13.jpg", "images/others/14.png", "images/others/15.jpg"];
for (var i = 0; i < paths.length; i++) {
    images.innerHTML += "<img class = 'format' src=" + paths[i] + " alt='imageError' onclick='getModel(this)'>";
}
function getModel(path) {
    var modal = document.getElementById('modal');
    modal.classList.add('modal-open');
    modal.classList.remove('modal-close');
    modal.style.display = "block";
    document.getElementById("modal-img").src = path.src;
    console.log(path);
}
function onClosedImagModal() {
    var modal = document.getElementById('modal');
    modal.classList.remove('modal-open');
    modal.classList.add('modal-close');
    setTimeout(() => { modal.style.display = "none"; }, 550)
}

//2.
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

//---------------------------------------Assignment 58-67 - DOM------------------------------------------
//1.

//i.
var mainContent = document.getElementById('main-content')
//ii.
console.log(mainContent.children)
//iii.
var render = document.getElementsByClassName('render')
for (var i = 0; i < render.length; i++) {
    console.log(render[i].innerHTML)
}
//iv & v.
var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var email = document.getElementById('e-mail')

firstName.value = "Aida"
lastName.value = "Mir"
email.value = "aidamir@live.com"

//2.
//i.
console.log(document.getElementById("form-content").nodeType)
document.write(document.getElementById('form-content').nodeType);
//ii.
document.write(document.getElementById('last-name').nodeType);
var cNodes = document.getElementById('last-name').childNodes;
for (var i = 0; i < cNodes.length; i++) {
    document.write(cNodes[i].nodeType);
}
console.log(document.getElementById("lastName").childNodes)
//iii.
var cn = document.getElementById('last-name');
cn.childNodes = 'p';
console.log(document.getElementById("lastName").childNodes[0].value = "LastName Update")
//iv. 
document.write(document.getElementById('main-content').firstChild);
document.write(document.getElementById('main-content').lastChild);
console.log(mainContent.firstChild, mainContent.lastChild)
//v.
document.write(document.getElementById('last-name').nextSibling);
document.write(document.getElementById('last-name').previousSibling);
console.log(document.getElementById('lastName').nextSibling, document.getElementById('lastName').previousSibling)
//vi.
document.write(document.getElementById('email').parentNode);
document.write(document.getElementById('email').nodeType);
console.log(document.getElementById('email').parentElement)