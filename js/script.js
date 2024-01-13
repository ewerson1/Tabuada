// seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplication")

const MultiplicatonTitlle = document.querySelector("#multiplication-tittle span") 


const multiplicationTable = document.querySelector("#multiplication-operations")

// Funções 

const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ""; // quando o submit for acionado, o (multiplication-operations P) ou o resultado anterior some, mostrando o novo resultado.

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;  // laço de repetição que multiplicará o multiplicationNumber x  multiplicatorNumber enquanto o numero desejado seja menor que o multiplicador
        
        const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class= "result"> ${result}</div>
        </div>`; //transferindo string para o HTML
        
        const parser = new DOMParser() //transformando string pro html

        const htmlTmeplate = parser.parseFromString(template, "text/html")

        const row = htmlTmeplate.querySelector(".row") 
        
        multiplicationTable.appendChild(row);
    }

    MultiplicatonTitlle.innerHTML = number;


}

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value; // usando "+" para transformar o Number-input em inteiro

    const multiplicatorNumber = +multiplicationInput.value;
    // usando "+" para transformar o multiplication-input em inteiro

    if (!multiplicationNumber || !multiplicatorNumber) return; // caso algum dos input não estiver preenchido, não vai calcular


    createTable(multiplicationNumber, multiplicatorNumber); //mostra o resultado na tela

})