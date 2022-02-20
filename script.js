
var today = moment();
var format = today.format("dddd, MMMM Do");
var time = today.format("H");
var first_hour = document.getElementById('9');
first_hour = today.format("9");
// saveIds = ['saveBtn1','saveBtn2','saveBtn3','saveBtn4','saveBtn5','saveBtn6','saveBtn7','saveBtn8','saveBtn9']
// saveIndex = 0;
var saveBtn1 = document.querySelector('#saveBtn1');
var input1 = document.querySelector('#event-9');
var saveBtn2 = document.querySelector('#saveBtn2');
var input2 = document.querySelector('#event-10');
var saveBtn3 = document.querySelector('#saveBtn3');
var input3 = document.querySelector('#event-11');
var saveBtn4 = document.querySelector('#saveBtn4');
var input4 = document.querySelector('#event-12');
var saveBtn5 = document.querySelector('#saveBtn5');
var input5 = document.querySelector('#event-13');
var saveBtn6 = document.querySelector('#saveBtn6');
var input6 = document.querySelector('#event-14');
var saveBtn7 = document.querySelector('#saveBtn7');
var input7 = document.querySelector('#event-15');
var saveBtn8 = document.querySelector('#saveBtn8');
var input8 = document.querySelector('#event-16');
var saveBtn9 = document.querySelector('#saveBtn9');
var input9 = document.querySelector('#event-17');

console.log(time);
// displaying the current day in the header
var currentDay = document.getElementById('currentDay');
currentDay.textContent = format;

function formatTimeblock() {

    if ( first_hour < time) {
        var colorEvent = document.getElementById('9-event');
        colorEvent.style;
    }
    

}


// Saving text area content in local storage
// I was trying to use a for loop or saveBtn index to cycle through all of them but couldn't figure it out
saveBtn1.addEventListener('click', saveInput);
input1.value = localStorage.getItem('content');

function saveInput() 
    {
        localStorage.setItem("content", input1.value);
        console.log(input1);
    }

saveBtn2.addEventListener('click', saveInput2);
input2.value = localStorage.getItem('content2');

function saveInput2() 
    {
        localStorage.setItem("content2", input2.value);
        console.log(input2);
    }

saveBtn3.addEventListener('click', saveInput3);
input3.value = localStorage.getItem('content3');

function saveInput3() 
    {
        localStorage.setItem("content3", input3.value);
        console.log(input3);
    }

saveBtn4.addEventListener('click', saveInput4);
input4.value = localStorage.getItem('content4');

function saveInput4() 
    {
        localStorage.setItem("content4", input4.value);
        console.log(input4);
    }

saveBtn5.addEventListener('click', saveInput5);
input5.value = localStorage.getItem('content5');

function saveInput5() 
    {
        localStorage.setItem("content5", input5.value);
        console.log(input5);
    }

saveBtn6.addEventListener('click', saveInput6);
input6.value = localStorage.getItem('content6');

function saveInput6() 
    {
        localStorage.setItem("content6", input6.value);
        console.log(input6);
    }
    
saveBtn7.addEventListener('click', saveInput7);
input7.value = localStorage.getItem('content7');

function saveInput7() 
    {
        localStorage.setItem("content7", input7.value);
        console.log(input7);
    }
    
saveBtn8.addEventListener('click', saveInput8);
input8.value = localStorage.getItem('content8');

function saveInput8() 
    {
        localStorage.setItem("content8", input8.value);
        console.log(input8);
    }
    
saveBtn9.addEventListener('click', saveInput9);
input9.value = localStorage.getItem('content9');

function saveInput9() 
    {
        localStorage.setItem("content9", input9.value);
        console.log(input9);
    }
// console.log(format);
// console.log(currentDay);



