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

    await eApp.click(eApp.create)
    await eApp.click(eApp.applicantSection)

    await eApp.driver.sleep(10000)

    await eApp.click(eApp.insuredFirstName)
    await eApp.setInput(eApp.insuredFirstNameXpath, 'Pennsylvania')
    await eApp.setInput(eApp.insuredLastName, 'Test')
    await eApp.setInput(eApp.insuredAddressLine1, '123 Main Street')
    await eApp.setInput(eApp.insuredCity, 'Scranton')
    //await eApp.setInput(eApp.insuredState, 'Pennsylvania')
    await eApp.setInput(eApp.insuredZip, '15108')
    await eApp.setInput(eApp.insuredPhone, '330-303-8888')
    await eApp.setInput(eApp.DOB, "09/09/1979\n")
    await eApp.click(eApp.gender)
    await eApp.setInput(eApp.gender, "female\n")

//end of applicant info 

    await eApp.click(eApp.healthQuestionsHeader)
    await eApp.click(eApp.tobaccoNo)
    await eApp.click(eApp.hospiceNo)
    await eApp.click(eApp.heartNo)

    

    await eApp.driver.sleep(4000)
    await eApp.driver.quit
})