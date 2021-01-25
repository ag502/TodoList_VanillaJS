function TodoInput(addTodo) {

    this.render = () => {
        this.$inputWrapper = document.createElement("div")

        const $input = document.createElement("input")
        $input.setAttribute("type", "text")

        const $submitBtn = document.createElement("button")
        $submitBtn.innerText = "제출"

        $submitBtn.addEventListener("click", function() {
            if ($input.value) {
                addTodo($input.value)
                $input.value = ""
            }
        })

        $input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                addTodo($input.value)
                $input.value = ""
            }
        })

        this.$inputWrapper.appendChild($input)
        this.$inputWrapper.appendChild($submitBtn)
    }

    this.render()
}

export default TodoInput