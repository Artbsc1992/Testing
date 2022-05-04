
const {stringLength, stringReverse, stringCapital} = require ('./string')


describe('strings count and reverse', () =>{
    it('It counts the length of a string', () =>{
        expect(stringLength('casa')).toBe(4);
    });
    
    it('It reverse the input string', () =>{
        expect(stringReverse('casa')).toBe('asac');
    });

    it('It capitalize', () =>{
        expect(stringCapital('casa')).toBe('Casa');
    });
});