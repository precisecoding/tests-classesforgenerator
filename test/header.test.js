const { formatDate } = require("../lib/date");
const Header = require("../lib/header")

describe('Header', () => {
    it('Should render header with current date', () => {
        const header = new Header();
        const date = new Date(2023, 8, 2);
        const formatteddate = formatDate(date);
        const expectedhtml = `<header class="header"><h1>Todo Today</h1><p>${formatteddate}</p></header>`
       
        expect(header.render()).toEqual(expectedhtml)
    })
    
})