import {eAppPage} from './eAppPageObjects'
const eApp = new eAppPage()

test('Home Office Login', async () => {
    await eApp.navigate()
    await eApp.driver.manage().window().maximize();
    await eApp.setInput(eApp.userName, 'Homeoffice')
    await eApp.setInput(eApp.passWord, 'im-kn@ck3r3d')
    await eApp.click(eApp.signInSubmit)

    await eApp.driver.sleep(10000)

    await eApp.click(eApp.neweApp)
    await eApp.setInput(eApp.state, 'Pennsylvania\n')
    await eApp.setInput(eApp.languageSelection, 'English\n')
    

    await eApp.driver.sleep(4000)
    await eApp.driver.quit
})