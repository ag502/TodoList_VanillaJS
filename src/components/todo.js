const Todo = ({title, completed}) => {
    let $todoContent = null
    if (completed) {
        $todoContent = `
            <div>${title}</div>
        `
    } else {
        $todoContent = `
            <div>
                <del>${title}</del>
            </div>
        `
    }
    return $todoContent
}

export default Todo