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

    await eApp.setInput(eApp.state, 'Arizona\n')
    await eApp.click(eApp.typeOfAppDropDown)
    await eApp.click(eApp.typeofAppSelectField)

    await eApp.click(eApp.create)
    await eApp.click(eApp.applicantSection)

    await eApp.driver.sleep(10000)

    await eApp.click(eApp.insuredFirstName)
    await eApp.setInput(eApp.insuredFirstNameXpath, 'ArizonaReplace')
    await eApp.setInput(eApp.insuredLastName, 'Test')
    await eApp.setInput(eApp.insuredAddressLine1, '123 Main St')
    await eApp.setInput(eApp.insuredCity, 'Mesa')
    await eApp.click(eApp.insuredStateDropDown)
    await eApp.click(eApp.insuredStateSelectAZ)
    await eApp.setInput(eApp.insuredZip, '85203')
    await eApp.setInput(eApp.insuredPhone, '480-303-8888')
    await eApp.setInput(eApp.DOB, "09/09/1979\n")
    await eApp.click(eApp.gender)
    await eApp.setInput(eApp.gender, "female\n")

//end of applicant info 

    await eApp.click(eApp.healthQuestionsHeader)
    await eApp.click(eApp.tobaccoNo)
    await eApp.click(eApp.hivNo)
    await eApp.click(eApp.hospiceNo)
    await eApp.click(eApp.heartNo)
    await eApp.click(eApp.strokeNo)
    await eApp.click(eApp.cancerNo)
    await eApp.click(eApp.copdNo)
    await eApp.click(eApp.organNo)
    await eApp.click(eApp.dementiaNo)
    await eApp.click(eApp.drugNo)
    await eApp.click(eApp.diabetesNo)
    await eApp.click(eApp.diagnosticTestNo)
// end of health questions

    await eApp.click(eApp.policySection)
    await eApp.click(eApp.planTypeDropDown)
    await eApp.click(eApp.selectFinalExpense)

    eApp.driver.sleep(5000)

    await eApp.setInput(eApp.faceAmount, '20000\n')
    await eApp.click(eApp.accidentalDeathUnits)

    await eApp.driver.sleep(5000)

    await eApp.click(eApp.noFCGS)
    await eApp.click(eApp.noAPL)
    await eApp.click(eApp.mailToOwner)

    await eApp.driver.sleep(4000)

    await eApp.click(eApp.beneSection)
    await eApp.click(eApp.addBene)
    await eApp.click(eApp.beneTypeDropDown)
    await eApp.click(eApp.selectPrimaryBene)
    await eApp.click(eApp.beneRelationshipDropDown)
    await eApp.click(eApp.beneRelationshipAunt)
    await eApp.setInput(eApp.beneFirstNameInput, 'Hannah')
    await eApp.setInput(eApp.beneLastNameInput, 'Roberts')
    await eApp.click(eApp.benePercentage)
    await eApp.click(eApp.beneDone)
    //end of bene section

    await eApp.click(eApp.payorSection)
    await eApp.click(eApp.payorSameAsOwner)
    await eApp.click(eApp.billModeDropDown)
    await eApp.click(eApp.selectModeMonthly)
    await eApp.setInput(eApp.initialPayDateInput, '10/01/2022')
    await eApp.click(eApp.billTypeDropDown)
    await eApp.click(eApp.selectBankDraft)
    await eApp.setInput(eApp.recurringDayofMonth, '1')
    await eApp.setInput(eApp.routing, '122100024')
    await eApp.setInput(eApp.account, '123456')
    await eApp.click(eApp.accountTypeDropDown)
    await eApp.click(eApp.accountTypeChecking)
    await eApp.setInput(eApp.financialInstitution, 'Chase Bank')
    await eApp.setInput(eApp.bankCity, 'Phoenix')
    await eApp.click(eApp.futurePaymentsYes)
    //end of payor section

    await eApp.click(eApp.replacementSection)
    await eApp.click(eApp.existingYes)
    await eApp.click(eApp.replacingYes)
    await eApp.click(eApp.producerExistYes)
    await eApp.click(eApp.producerReplaceYes)

    eApp.driver.sleep(3000)

    await eApp.click(eApp.multiStateReplaceFormQuestionOneYes)
    await eApp.click(eApp.multiStateReplaceFormQuestionTwoYes)
    await eApp.click(eApp.addReplacementInfo)
    await eApp.setInput(eApp.repExistingCompanyName, 'MetLife')
    await eApp.setInput(eApp.repExistingPolicyNum, '12345')
    await eApp.click(eApp.replaceVsFinanceReplace)
    await eApp.click(eApp.repDoneRepInfo)
    await eApp.setInput(eApp.repReasonForReplace, 'Too expensive')
    
    await eApp.click(eApp.producerSection)
    await eApp.click(eApp.producerNotSplit)

    await eApp.driver.sleep(4000)
    await eApp.driver.quit
})