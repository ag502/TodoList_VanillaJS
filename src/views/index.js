import TodoInput from "../components/TodoInput.js";
import TodoCounter from "../components/TodoCounter.js"
import Todo from "../components/Todo.js";
import TodoDetail from "../components/TodoDetail.js";

class TodoList {
    constructor($app) {
        this.fetchData()
        this.$app = $app
        this.$openDetail = false;

        this.$todoInput = new TodoInput(this.addTodo)
        this.$todoList = new Todo($app, this.todoData, this.toggleComplete, this.deleteTodo, this.openDetail)
        this.$todoCounter = new TodoCounter(this.todoData)
        this.$todoDetail = new TodoDetail($app, this.$openDetail, this.closeDetail)

        this.render()
    }

    fetchData = () => {
        try {
            const todoData = localStorage.getItem("todo")
            if (todoData) {
                this.todoData = JSON.parse(todoData)
            } else {
                this.todoData = []
            }
        } catch (error) {
            this.todoData = []
        }
    }

    setState = (newTodoData) => {
        this.todoData = newTodoData
        localStorage.setItem("todo", JSON.stringify(newTodoData))

        this.$todoList.setState(this.todoData)
        this.$todoCounter.setState(this.todoData)
        this.render()
    }

    addTodo = (newTodo) => {
        const todoData = [
            ...this.todoData,
            {
                userId: 1,
                id: this.todoData.length + 1,
                title: newTodo,
                completed: false
            }
        ]
        this.setState(todoData)
    }

    toggleComplete = (todoId) => {
        const targetTodoIndex = this.todoData.findIndex(({id}) => id === todoId)
        const newTodoData = [
            ...this.todoData.slice(0, targetTodoIndex),
            {...this.todoData[targetTodoIndex], completed: !this.todoData[targetTodoIndex].completed},
            ...this.todoData.slice(targetTodoIndex + 1)
        ]
        this.setState(newTodoData)
    }

    deleteTodo = (todoId) => {
        const targetTodoIndex = this.todoData.findIndex(({id}) => id === todoId)
        const newTodoData = [
            ...this.todoData.slice(0, targetTodoIndex),
            ...this.todoData.slice(targetTodoIndex + 1)
        ]
        this.setState(newTodoData)
    }

    openDetail = (todoId) => {
        const [selectedData] = this.todoData.filter(({id}) => id === todoId)
        this.$openDetail = true
        this.$todoDetail.setState(selectedData, this.$openDetail)
    }

    closeDetail = () => {
        this.$openDetail = false
        this.$todoDetail.setState(null, this.$openDetail)
    }


    render = () => {
        this.$app.appendChild(this.$todoInput.$inputWrapper)
        this.$app.appendChild(this.$todoCounter.$todoCounter)
        this.$app.appendChild(this.$todoList.$todoListWrapper)
    }
}

export default TodoList