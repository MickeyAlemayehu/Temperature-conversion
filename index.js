const temp = document.getElementById("temp");
const c_f = document.getElementById("c_f");
const f_c = document.getElementById("f_c");
const button = document.getElementById("button");
const value = document.getElementById("value");
function far(temp){
    let result =  (9 / 5) * (temp) + 32;
    return result;
 }
 function cel(temp){
     return 5 * 9 * (temp - 32);
 }
button.onclick = function(){
    let input = temp.value;
    input = Number(input);
    if (isNaN(input)){
        value.textContent = "Invalid Value";
    }
    else{
        if (c_f.checked){
            value.textContent = far(input).toFixed(1) + " °F";
        }
        else if (f_c.checked){
            value.textContent = cel(input).toFixed(1) + " °C";
        }
       else
        value.textContent = "No peration choosen";
   }
}

