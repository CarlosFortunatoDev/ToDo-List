// Seleção de elementos
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')

// Funções
const saveTodo = (text) =>{
    const todo = document.createElement('div') /*Criando um elemento div*/
    todo.classList.add('todo') /*Adicionando a classe todo*/

    const todoTitle = document.createElement('h3') /*Criando um elemento h3*/
    todoTitle.innerText = text; /*Adicionando o texto que veio pelo parâmetro no todoTitle*/
    todo.appendChild(todoTitle) /*Adicionando o todoTitle dentro do todo*/

    const doneBtn = document.createElement('button') /*Criando um elemento button*/
    doneBtn.classList.add('finish-todo') /*Adicionando a classe finish-todo*/
    doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>` /*Adicionando uma tag HTML dentro do doneBtn*/
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button') /*Criando um elemento button*/
    editBtn.classList.add('edit-todo') /*Adicionando a classe edit-todo*/
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>` /*Adicionando uma tag HTML dentro do editBtn*/
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button') /*Criando um elemento button*/
    deleteBtn.classList.add('remove-todo') /*Adicionando a classe remove-todo*/
    deleteBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>` /*Adicionando uma tag HTML dentro do deleteBtn*/
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoInput.value = '';
}

// Eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); /*Serve para não enviar o formulário para o backend*/

    const inputValue = todoInput.value; /*Salvando o valor do todoInput na variável inputValue*/

    if (inputValue) {
        saveTodo(inputValue); /*Chamando a função saveTodo passando como parâmetro a variável inputValue*/
    }
})