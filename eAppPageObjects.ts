import {BasePage} from './basePage'
import {By} from 'selenium-webdriver'

export class eAppPage extends BasePage {    
signInSubmit: By = By.id(('btn-login'))
userName: By = By.id('username')
passWord: By = By.id('password')





constructor() {
    ;super({url: 'https://eapp-uat.lhlicagents.com'})
}
}