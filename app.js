'use strict'
var n1
var n2
var n3
let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;
function fn1() {
    n1 = document.getElementById("num1").value;
}

function fn2() {
    n2 = document.getElementById("num2").value;
}

function fn3() {
    n3 = document.getElementById("num3").value;
    var arr1 = [Number(n1), Number(n2), Number(n3)];
    arr1.sort();
    document.write(arr1);
}