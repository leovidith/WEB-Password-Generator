'use script';

const slider_var = document.getElementById("slider");
const value_var = document.getElementById("value");
const button = document.getElementById("generate_btn");
const resultText = document.getElementById("result");

function driver()
{
    let length1 = slider_var.value;
    let database = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '&', '*', '_'];
    let result = "";

    for (let i=0;i<length1;i++)
    {
        let rand = Math.floor(Math.random()*(68 - 0 + 1));
        let char = database[rand]
        if(char!== undefined)
            result += char;
    }

    return result;   
}

slider_var.oninput = function() 
{
    value_var.textContent = `Value: ${slider_var.value}`;
}

button.addEventListener("click", function()
{
    let result = driver();
    resultText.textContent = `Password: ${result}`;
    navigator.clipboard.writeText(result);
});

document.addEventListener("keypress", function(event)
{
    if(event.key == "Enter")
    {
        button.click();
    }
});