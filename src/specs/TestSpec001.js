import LoginPage from '../pages/Login';

describe('Test spec 001',()=>{
    it('The first it',()=>{
        
        browser.url('/');
        console.log(browser.getTitle());
        LoginPage.login('cybozu','cybozu');
        console.log(browser.getTitle());
    })
})