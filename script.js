const button = document.querySelector("button")


function generateNumber(){
    const min = Math.ceil(document.querySelector("#input-min").value)
    const max = Math.floor(document.querySelector("#input-max").value)
    const divResult = document.querySelector("#result")


    if(min >= max) {
        alert("O valor mínimo tem que ser MENOR que o valor máximo")
    } else {
        const result =  Math.floor(Math.random() * (max - min + 1) + min);
    
        divResult.innerHTML = result
    }
}

button.addEventListener("click", generateNumber)