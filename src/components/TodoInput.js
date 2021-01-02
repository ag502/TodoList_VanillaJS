function TodoInput(onSubmit) {
    const render = () => {
        this.$inputWrapper = document.createElement("div")

        const $input = document.createElement("input")
        $input.setAttribute("type", "text")

        const $submitBtn = document.createElement("button")
        $submitBtn.innerText = "제출"
        $submitBtn.addEventListener("click", function() {
            onSubmit($input.value)
        })

        this.$inputWrapper.appendChild($input)
        this.$inputWrapper.appendChild($submitBtn)
    }

    render()
}

export default TodoInput