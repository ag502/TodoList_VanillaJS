import dummyData from "../constants/dummyData.js";
import Todo from "../components/todo.js";

class TodoList {
    constructor($container) {
        this.$container = $container
        this.render()
    }

    render = () => {
        dummyData.forEach(todo => {
            this.$container.insertAdjacentHTML("beforeend", Todo(todo))
        })
    }
}

export default TodoList