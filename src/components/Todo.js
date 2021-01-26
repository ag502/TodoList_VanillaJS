class Todo {
    constructor(todoData, toggleComplete) {
        this.todoData = todoData
        this.$todoListWrapper = document.createElement("div")
        this.$todoListWrapper.setAttribute("class", "todo-list")
        this.$todoListWrapper.addEventListener("click", (e) => {
            const {target} = e
            if (target.hasAttribute("id")) {
                toggleComplete(parseInt(target.getAttribute("id")))
            }
        })
        this.render()
    }

    render = () => {
        const $todoList = this.todoData.map(({id, completed, title}) => {
            if (completed) {
                return `<div><del><span id=${id}>${title}</span></del></div>`
            } else {
                return `<div><span id=${id}>${title}</span></div>`
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