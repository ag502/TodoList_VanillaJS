class TodoDetail {
    constructor($target, isShow, onClose) {
        this.isShow = isShow
        this.onClose = onClose

        this.selectedData = null
        this.$backdrop = document.createElement("div")
        this.$backdrop.classList.add("backdrop")

        this.$backdrop.addEventListener("click", this.detailClose)
        window.addEventListener("keydown", this.detailClose)

        $target.appendChild(this.$backdrop)
        this.render()
    }

    detailClose = (e) => {
        const {type, key, target} = e
        if ((type === "keydown" && key === "Escape")) {
            this.onClose()
        } else if (type === "click") {
            if (target.classList.contains("backdrop") || target.tagName === "BUTTON") {
                this.onClose()
            }
        }
    }

    render = () => {
        if (this.selectedData) {
            console.log(this.selectedData)
            this.$backdrop.innerHTML = `
                <div class="detail-wrapper">
                    ${this.selectedData.title}
                    <button class="detail-close-btn">✖</button>
                </div>
            `
        }
    }

    setState = (data, isShow) => {
        this.selectedData = data
        this.isShow = isShow
        if (this.isShow) {
            this.$backdrop.classList.add("show")
        } else {
            this.$backdrop.classList.remove("show")
        }
        this.render()
    }
}

export default TodoDetail