const Port = require('../src/Port.js')

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('port object has a name', () => {
        const port = new Port('Dover');
        expect(port.name).toEqual('Dover');
    });
});