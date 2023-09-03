const TaskListItem = require("../lib/taskListItem")

describe('TaskListItem', () => {
    it('Should render list item correctly', () => {
        const tasklistitem = new TaskListItem(['task'],false);
        expect(tasklistitem.render()).toEqual(`<li class="tasks-item">task</li>`)
    })
    it('Should render list item correctly', () => {
        const tasklistitem = new TaskListItem(['task'],true);
        expect(tasklistitem.render()).toEqual(`<li class="tasks-item tasks-item-priority">task</li>`)
    })
})