import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import HomePage from '../pageobjects/homePage'

describe('My Swag Labs Login application test', () => {
    const testData = [
        { username: 'standard_user', password: 'secret_sauce' },
        { username: 'locked_out_user', password: 'secret_sauce' },
        { username: 'problem_user', password: 'secret_sauce' },
        { username: 'performance_glitch_user', password: 'secret_sauce' },
        { username: 'error_user', password: 'secret_sauce' },
        { username: 'visual_user', password: 'secret_sauce' },

    ];

    testData.forEach((data) => {
        it(`should login with valid credentials: ${data.username}`, async () => {
            await LoginPage.open();
            await LoginPage.setUserNmae(data.username);
            await LoginPage.setPassword(data.password);
            await LoginPage.clickSignInButton();
            await expect(HomePage.productsLabel).toBeDisplayed();
        });
    });
});

