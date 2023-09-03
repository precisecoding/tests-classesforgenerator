const Component = require('./component');
class TaskListItem extends Component {
    constructor(children, priority = false) {
        super(children)
        this.priority = priority;
    }
    render () {
        const priorityclass = this.priority ? " tasks-item-priority" : "" 
        return `<li class="tasks-item${priorityclass}">${this.renderInnerHTML()}</li>`
    }
}
module.exports = TaskListItem;