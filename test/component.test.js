const Component = require("../lib/component")

describe('Component', () => {
    it('should throw an error when called', () => {
        const component = new Component ();
        expect(() => component.render()).toThrow("Child class must implement render() method.")
    })
})