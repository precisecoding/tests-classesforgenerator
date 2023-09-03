class Component {
    constructor(children = []) {
        this.children = children;
    }
    render() {
        throw new Error("Child class must implement render() method.")
    }
    renderInnerHTML() {
        // console.log(this.children)
        return this.children.map(child => {
            if (typeof child != "string") {
                return child.render()
            }
            else {
                return child
            }
        }).join("")
    }
}

module.exports = Component