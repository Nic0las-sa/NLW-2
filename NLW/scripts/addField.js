//Procurar o botão:
document.querySelector('#add-time')
//Quando clicar no botão:
.addEventListener('click', clonefield)

document.querySelector('#rm-time')
.addEventListener('click', removeField)

// executar uma ação:
function clonefield() {
    // Duplicar os campos:
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos:
    const fields = newFieldContainer.querySelectorAll('input')
    
    //Para cada campo, limpar: 
    fields.forEach( (field) => {
        //Pega o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página: Onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

function removeField() {
    const containers = document.querySelectorAll('.schedule-item') // selecionando todos os items.

    if (containers.length == 1) {
        return
    }
    else {
        document.querySelector('#schedule-items').removeChild(containers[containers.length - 1])
    }
}
