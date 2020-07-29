const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate unique ID', () =>{
    it('Should generate unique ID', () => {
        const id =  generateUniqueId();
        expect(id).toHaveLength(8);
    })
})