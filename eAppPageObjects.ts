import {BasePage} from './basePage'
import {By} from 'selenium-webdriver'

export class eAppPage extends BasePage {    
signInSubmit: By = By.id(('send2'))
userName: By = By.name('login[username]')




constructor() {
    ;super({url: 'https://eapp-uat.lhlicagents.com'})
}
}