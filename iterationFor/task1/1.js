//Вивести числа від 5 до 500 на екран
let out =document.getElementById('out');
let tmt='';
for(let i=5; i<=500; i++){
    tmt=tmt + i + ' ';

}
out.innerHTML =tmt;