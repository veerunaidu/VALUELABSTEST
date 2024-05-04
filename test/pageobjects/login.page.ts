import { $ } from '@wdio/globals'
import UrlPage from './urlpage';

 // sub page containing specific selectors and methods for a specific page
 
class LoginPage extends UrlPage {
    
     // define selectors using getter methods
     
    public get inputUsername () {return $('#user-name') }
    public get inputPassword () {return $('#password') }
    public get signInButton () { return $('#login-button') }


    async setUserNmae(_userName : string) {
        await browser.waitUntil(
            this.inputUsername.isDisplayed,
            {
                timeout: 10000,
                timeoutMsg: `Element "userName" is not found with in given time`,
                interval: 2000
            });
        await this.inputUsername.setValue(_userName);
    }

    async setPassword(_password : string ) {
        await browser.waitUntil(
            this.inputUsername.isDisplayed,
            {
                timeout: 10000,
                timeoutMsg: `Element "passwordField" is not found with in given time`,
                interval: 2000
            });
        await this.inputPassword.setValue(_password);
    }

    async clickSignInButton() {
        await browser.waitUntil(
            this.inputUsername.isDisplayed,
            {
                timeout: 10000,
                timeoutMsg: `Element "signInButton" is not found with in given time`,
                interval: 2000
            });
        await this.signInButton.click();
    }

    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
