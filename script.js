const button = document.querySelector("button")


function generateNumber(){
    const min = Math.ceil(document.querySelector("#input-min").value)
    const max = Math.floor(document.querySelector("#input-max").value)
    const divResult = document.querySelector("#result")

    const result =  Math.floor(Math.random() * (max - min + 1) + min);
    
    divResult.innerHTML = result
}

button.addEventListener("click", generateNumber)