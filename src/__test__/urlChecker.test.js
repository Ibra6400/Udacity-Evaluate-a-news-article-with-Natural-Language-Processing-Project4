import {CheckingURL} from '../client/js/urlChecker'


describe("Testing the CheckingURL() functionality", () => {
    test("It should be functionality ", async () => {
        expect(CheckingURL).toBeInstanceOf(Function);
    });
});;


describe('Testing URL in the CheckingURL() function to be validate' , () => {
    test("It should be validate ", async () => {
        expect(CheckingURL("https://www.wordstream.com/blog/ws/2015/02/09/how-to-write-a-blog-post")).toBeTruthy();
    });
});

describe('Testing URL in the CheckingURL() function to be invalidate' , () => {
    test("It should be invalidate ", async () => {
        expect(CheckingURL("/article")).toBeFalsy();
    });
});


