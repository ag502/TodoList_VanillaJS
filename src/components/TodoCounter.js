class TodoCounter {
    constructor (todoData) {
        this.todoData = todoData
        this.$todoCounter = document.createElement("div")
        this.render()
    }

    render = () => {
        const numOfUncompletedTodo = this.todoData.filter(({completed}) => !completed).length
        this.$todoCounter.innerText = `총 ${numOfUncompletedTodo}개의 할 일이 있습니다.`
    }

    setState = (newData) => {
        this.todoData = newData
        this.render()
    }
}

export default TodoCounter