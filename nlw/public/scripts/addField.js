//procurar botão
document.querySelector("#add-time")
//quando clica botao
.addEventListener('click', cloneField)


//executar acao
function cloneField() {
    //duplicar campos ?????????????????????
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos ?????????????
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function(field) {
        //pega o field do momento
        field.value = ""
    })


    //colocar pagina:onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
