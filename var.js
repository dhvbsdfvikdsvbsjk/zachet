let res = document.getElementById("res");
document.getElementById("res").disabled = true;
let play = document.getElementById("go");
let kon1 = document.getElementById("1");   // Прямоугольный 
let kon2 = document.getElementById("2");   // Равностороний
let kon3 = document.getElementById("3");   // Произвольный
let clean = document.getElementById("delete");
var oni;
play.onclick = function (event)
{ 
if(kon1.checked)
{
    oni = prompt("Введите а=");
    res.value = (1/2) * 100 * oni;                 
    event.preventDefault();
}
else if(kon2.checked)
{
    oni = prompt("Введите а=");
    res.value = 100 * ((oni ^ 2 * 1,7 / 4));  
    console.log(oni);
    console.log(res);      
    event.preventDefault();
}
else if(kon3.checked)
{
    oni = prompt("Введите а=");
    res.value = 100 * ((oni ^ 2) / 2);               
    event.preventDefault();  
}
else{
    alert("Невыбран не один из треугольников");
}
 
}
clean.onclick = function ()
{
    oni = "";
    play.value = "";
    res.value = "";
}