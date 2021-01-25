class Todo {
    constructor(todoData) {
        this.todoData = todoData
        this.$todoListWrapper = document.createElement("div")
        this.$todoListWrapper.setAttribute("class", "todo-list")
        this.render()
    }

    render = () => {
        const $todoList = this.todoData.map(({completed, title}) => {
            if (completed) {
                return `<div><del>${title}</del></div>`
            } else {
                return `<div>${title}</div>`
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