const Component = require('./component.js');
const {formatDate} = require('./date.js');
class Header extends Component {
    render() {
        const date = new Date();
        return `<header class="header"><h1>Todo Today</h1><p>${formatDate(date)}</p></header>` 
    }
}
module.exports = Header; 