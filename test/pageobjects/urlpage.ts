import { browser } from '@wdio/globals'

export default class UrlPage {
   
    public open (_path: string) {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
