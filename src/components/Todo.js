class Todo {
    constructor(todoData, toggleComplete, deleteTodo) {
        this.todoData = todoData
        this.$todoListWrapper = document.createElement("div")
        this.$todoListWrapper.setAttribute("class", "todo-list")
        this.$todoListWrapper.addEventListener("click", (e) => {
            const {target} = e
            console.log(target.tagName)
            if (target.tagName === "SPAN") {
                toggleComplete(parseInt(target.dataset.id))
            } else if (target.tagName === "BUTTON") {
                deleteTodo(parseInt(target.dataset.id))
            }
        })
        this.render()
    }

    render = () => {
        const $todoList = this.todoData.map(({id, completed, title}) => {
            if (completed) {
                return `<div><del><span data-id=${id}>${title}</span></del><button data-id=${id}>✖</button></div>`
            } else {
                return `<div><span data-id=${id}>${title}</span><button data-id=${id}>✖</button></div>`
            }
        }).join('')
        this.$todoListWrapper.innerHTML = $todoList
    }

    setState = (newTodoData) => {
        console.log(newTodoData)
        this.todoData = newTodoData
        this.render()
    }
}
export default Todo