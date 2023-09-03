const TaskList = require("../lib/TaskList")
const TaskListItem = require("../lib/taskListItem")

describe('Tasklist', () => {
    it('verifies unordered list renders when called', () => {
        const tasklist = new TaskList([])
        expect(tasklist.render()).toEqual(`<ul class="tasks"></ul>`)
    }
    )
    it('verifies task list items priority', () => {
        const tasklistitem = [new TaskListItem(['listitem'])]
        const tasklist = new TaskList(tasklistitem)
        expect(tasklist.render()).toEqual(`<ul class="tasks"><li class="tasks-item">listitem</li></ul>`)
    }
    )
})
