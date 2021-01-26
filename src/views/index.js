import dummyData from "../constants/dummyData.js";
import TodoInput from "../components/TodoInput.js";
import TodoCounter from "../components/TodoCounter.js"
import Todo from "../components/Todo.js";

class TodoList {
    constructor($app) {
        this.todoData = dummyData
        this.$app = $app
        this.$todoInput = new TodoInput(this.addTodo)
        this.$todoList = new Todo(this.todoData, this.toggleComplete, this.deleteTodo)
        this.$todoCounter = new TodoCounter(this.todoData)
        this.render()
    }

    setState = (newTodoData) => {
        this.todoData = newTodoData
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


    render = () => {
        this.$app.appendChild(this.$todoInput.$inputWrapper)
        this.$app.appendChild(this.$todoCounter.$todoCounter)
        this.$app.appendChild(this.$todoList.$todoListWrapper)
    }
}

export default TodoList