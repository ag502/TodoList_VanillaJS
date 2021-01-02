import dummyData from "../constants/dummyData.js";
import TodoInput from "../components/TodoInput.js";
import Todo from "../components/Todo.js";

class TodoList {
    constructor($container) {
        this.$container = $container
        this.$todoInput = new TodoInput(this.handleInputSubmit)
        this.render()
    }

    handleInputSubmit = (newTodo) => {
        console.log(newTodo)
    }


    render = () => {
        this.$container.appendChild(this.$todoInput.$inputWrapper)
        dummyData.forEach(todo => {
            this.$container.insertAdjacentHTML("beforeend", Todo(todo))
        })
    }
}

export default TodoList