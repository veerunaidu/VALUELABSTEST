import { $ } from '@wdio/globals'

class HomePage {
   
    public get productsLabel () { return $('//*[text()="Products"]') }

    async productsText(){
        await browser.waitUntil(
            await this.productsLabel.isDisplayed,
            {
                timeout: 20000,
                timeoutMsg: `Element "products text" is not found with in given time`,
                interval: 2000

            })
    }
}

export default new HomePage();
