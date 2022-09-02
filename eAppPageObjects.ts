import {BasePage} from './basePage'
import {By} from 'selenium-webdriver'

export class eAppPage extends BasePage {    
signInSubmit: By = By.id(('btn-login'))
userName: By = By.id('username')
passWord: By = By.id('password')
//end of login page


neweApp: By = By.xpath(('//button[@class="ui blue right floated button new-eapp-button"]'))

state: By = By.xpath(('(//input[@class="search"])[1]'))
languageSelection: By = By.xpath(('(//input[@class="search"])[2]'))
typeOfApp: By = By.xpath(('(//input[@class="search"])[3]'))
create: By = By.xpath(('//button[@class="ui green primary button eAppbutton"]'))
continue: By = By.xpath(('//button[text()="Continue"]'))
//

//start of health questions
tobQ: By = By.xpath('(//label[text()="No"])[1]')




insuredFirstName: By = By.name('Proposed_Insured.PrimInsFirstName')
insuredMiddleName: By = By.name('Proposed_Insured.PrimInsMiddleName')
insuredLastName: By = By.name('Proposed_Insured.PrimInsLastName')
insuredAddressLine1: By = By.name('Proposed_Insured.PrimInsLine1')
insuredCity: By = By.name('Proposed_Insured.PrimInsCity')
insuredState: By = By.name('Proposed_Insured.PrimInsState')
insuredZip: By = By.name('Proposed_Insured.PrimInsZip')
insuredPhone: By = By.name('Proposed_Insured.PrimInsHomePhone')
ssn: By = By.name('Proposed_Insured.PrimInsGovtID')
ssnWithheld: By = By.name('Proposed_Insured.GovtIDWithheld')
DOB: By = By.name('Proposed_Insured.PrimInsBirthDate')
age: By = By.name('Proposed_Insured.PrimInsAge')
gender: By = By.name('Proposed_Insured.PrimInsGender')
relation: By = By.name('Proposed_Insured.PrimInsRelationship')
//end of applicant info 

planType: By = By.name('Policy_Information.ProductOption')
face: By = By.name('Policy_Information.PrimInsFaceAmount')
addRider: By = By.name('Policy_Information.ADDCovUnits')
childRiderUnits: By = By.name('Policy_Information.ChildRiderCovUnits')
numberChildRiders: By = By.name('Policy_Information.NumberOfChildren')
//end of plan info 

addBene: By = By.xpath(('//button[text()="Add/Edit Beneficiary"]'))


ownerFirstName: By = By.name('Owner_Information.OwnerFirstName')
onwerMiddleName: By = By.name('Owner_Information.OwnerMiddleName')
ownerLastName: By = By.name('Owner_Information.OwnerLastName')
ownerPhone: By = By.name('Owner_Information.OwnerCellPhone')
ownerAddressLine1: By = By.name('Owner_Information.OwnerLine1')
ownerCity: By = By.name('Owner_Information.OwnerCity')
ownerState: By = By.name('Owner_Information.OwnerState')
ownerZip: By = By.name('Owner_Information.OwnerZip')
//end of owner info 

payorSameAsOwner: By = By.name('Payor_Information.PayorOwnerFlag')
payorFirstName: By = By.name('Payor_Information.PayorFirstName')
payorMiddleName: By = By.name('Payor_Information.PayorMiddleName')
payorLastName:  By = By.name('Payor_Information.PayorLastName')
payorPhone: By = By.name('Payor_Information.PayorCellPhone')
payorAddress: By = By.name('Payor_Information.PayorLine1')
payorCity: By = By.name('Payor_Information.PayorCity')
payorState: By = By.name('Payor_Information.PayorState')
payorZipCode: By = By.name('Payor_Information.PayorZip')
billMode: By = By.name('Payor_Information.BillingFrequency')
initialPayDate: By = By.name('Payor_Information.InitialPaymentDate')
billType: By = By.name('Payor_Information.PremType')
dueDay: By = By.name('Payor_Information.DueDay')
routing: By = By.name('Payor_Information.RoutingTransitNum')
account: By = By.name('Payor_Information.BankAccountNum')
//end of payor info



constructor() {
    ;super({url: 'https://eapp-uat.lhlicagents.com'})
}
}