import dummyData from "../constants/dummyData.js";
import TodoInput from "../components/TodoInput.js";
import Todo from "../components/Todo.js";

class TodoList {
    constructor($app) {
        this.todoData = dummyData
        this.$app = $app
        this.$todoInput = new TodoInput(this.addTodo)
        this.$todoList = new Todo(this.todoData)
        this.render()
    }

    setState = (newTodoData) => {
        this.todoData = newTodoData
        this.$todoList.setState(this.todoData)
        this.render()
    }

    addTodo = (newTodo) => {
        const todoData = [
            ...this.todoData,
            {
                userId: this.todoData.length,
                title: newTodo,
                completed: false
            }
        ]
        this.setState(todoData)
    }


    render = () => {
        this.$app.appendChild(this.$todoInput.$inputWrapper)
        this.$app.appendChild(this.$todoList.$todoListWrapper)
    }
}

export default TodoList