import TodoInput from "../components/TodoInput.js";
import TodoCounter from "../components/TodoCounter.js"
import Todo from "../components/Todo.js";
import TodoDetail from "../components/TodoDetail.js";
import {getPosts} from "../constants/api.js";

class TodoList {
    constructor($app) {
        this.todoData = []
        this.$app = $app
        this.$openDetail = false;

        this.$todoInput = new TodoInput(this.addTodo)
        this.$todoList = new Todo($app, this.todoData, this.toggleComplete, this.deleteTodo, this.openDetail)
        this.$todoCounter = new TodoCounter(this.todoData)
        this.$todoDetail = new TodoDetail($app, this.$openDetail, this.closeDetail)

        this.fetchData()
        this.render()
    }

    fetchData = async () => {
        let todoData = null
        try {
            todoData = await getPosts()
        } catch (error) {
            console.log(error)
            todoData = []
        }
        this.setState(todoData)
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