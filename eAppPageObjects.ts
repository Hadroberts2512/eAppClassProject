import {BasePage} from './basePage'
import {By} from 'selenium-webdriver'

export class eAppPage extends BasePage {    
signInSubmit: By = By.id(('btn-login'))
userName: By = By.id('username')
passWord: By = By.id('password')
//end of login page


neweApp: By = By.xpath('//button[@class="ui blue right floated button new-eapp-button"]')

state: By = By.xpath(('(//input[@class="search"])[1]'))
languageSelection: By = By.xpath(('(//input[@class="search"])[2]'))
typeOfApp: By = By.xpath(('(//input[@class="search"])[3]'))
create: By = By.xpath(('//button[@class="ui green primary button eAppbutton"]'))
continue: By = By.xpath(('//button[text()="Continue"]'))
//

applicantSection: By = By.id('1')


//start of health questions
tobQ: By = By.xpath('(//label[text()="No"])[1]')




insuredFirstName: By = By.name('Proposed_Insured.PrimInsFirstName')
insuredFirstNameXpath: By = By.xpath('//input[@name="Proposed_Insured.PrimInsFirstName"]')
insuredMiddleName: By = By.xpath('//input[@name="Proposed_Insured.PrimInsMiddleName"]')
insuredLastName: By = By.xpath('//input[@name="Proposed_Insured.PrimInsLastName"]')
insuredAddressLine1: By = By.xpath('//input[@name="Proposed_Insured.PrimInsLine1"]')
insuredCity: By = By.xpath('//input[@name="Proposed_Insured.PrimInsCity"]')
insuredState: By = By.xpath('//input[@name="Proposed_Insured.PrimInsState"]')
insuredZip: By = By.xpath('//input[@name="Proposed_Insured.PrimInsZip"]')
insuredPhone: By = By.xpath('//input[@name="Proposed_Insured.PrimInsHomePhone"]')
ssn: By = By.xpath('//input[@name="Proposed_Insured.PrimInsGovtID"]')
ssnWithheld: By = By.name('Proposed_Insured.GovtIDWithheld')
DOB: By = By.xpath('//input[@name="Proposed_Insured.PrimInsBirthDate"]')
age: By = By.name('Proposed_Insured.PrimInsAge')
gender: By = By.xpath('//div[@name="Proposed_Insured.PrimInsGender"]//input[@type="text"]')
relation: By = By.xpath('//input[@name="Proposed_Insured.PrimInsRelationship"]')
//end of applicant info 

healthQuestionsHeader: By = By.xpath('//div[contains(text(),"Health Questions")]')
tobaccoNo: By = By.xpath('//div[@name="Health_Questions.TobaccoQuestions_00000000-0000-0000-0000-000000001304"]//label[contains(text(),"No")]')
hivNo: By = By.xpath('//div[@name="Health_Questions.UninsurabilityQuestions_00000000-0000-0000-0000-000000001292"]//label[contains(text(),"No")]')
hospiceNo: By = By.xpath('//div[@name="Health_Questions.UninsurabilityQuestions_00000000-0000-0000-0000-000000001293"]//label[contains(text(),"No")]')
heartNo: By = By.xpath('//div[@name="Health_Questions.HealthQuestions_00000000-0000-0000-0000-000000001283"]//label[contains(text(),"No")]')
strokeNo: By = By.xpath('//div[@name="Health_Questions.HealthQuestions_00000000-0000-0000-0000-000000001284"]//label[contains(text(),"No")]')
cancerNo: By = By.xpath('//div[@name="Health_Questions.HealthQuestions_00000000-0000-0000-0000-000000001285"]//label[contains(text(),"No")]')
copdNo: By = By.xpath('//div[@name="Health_Questions.HealthQuestions_00000000-0000-0000-0000-000000001286"]//label[contains(text(),"No")]')
organNo: By = By.xpath('//div[@name="Health_Questions.HealthQuestions_00000000-0000-0000-0000-000000001287"]//label[contains(text(),"No")]')
dementiaNo: By = By.xpath('//div[@name="Health_Questions.HealthQuestions_00000000-0000-0000-0000-000000001288"]//label[contains(text(),"No")]')
drugNo: By = By.xpath('//div[@name="Health_Questions.HealthQuestions_00000000-0000-0000-0000-000000001289"]//label[contains(text(),"No")]')
diabetesNo: By = By.xpath('//div[@name="Health_Questions.HealthQuestions_00000000-0000-0000-0000-000000001290"]//label[contains(text(),"No")]')
diagnosticTestNo: By = By.xpath('//div[@name="Health_Questions.HealthQuestions_00000000-0000-0000-0000-000000001291"]//label[contains(text(),"No")]')
//end of health questions

policySection: By = By.xpath('//div[@class="title"][normalize-space()="Policy"]')
planTypeInput: By = By.xpath('//div[@name="Policy_Information.ProductOption"]//input[@type="text"]')
faceAmount: By = By.xpath('//input[@name="Policy_Information.PrimInsFaceAmount"]')
yesFCGS: By = By.xpath('//div[@class="ui checked radio checkbox"]//label[contains(text(),"Yes")]')
noFCGS: By = By.xpath('//div[@name="Policy_Information.FCGSMembership"]//label[contains(text(),"No")]')
planTypeDropDown: By = By.xpath('//div[@name="Policy_Information.ProductOption"]//i[@class="dropdown icon"]')
selectFinalExpense: By = By.xpath('//span[normalize-space()="Final Expense"]')
noAPL: By = By.xpath('//div[@name="Policy_Information.IsAPL"]//label[contains(text(),"No")]')
mailToOwner: By = By.xpath('//label[normalize-space()="Owner"]')
selectBest: By = By.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/form[1]/div[1]/div[1]/div[4]/div[1]/div[9]/div[1]/div[1]/div[3]/div[3]/button[1]')
accidentalDeathUnits: By = By.xpath('//input[@name="Policy_Information.ADDCovUnits"]')
//end policy info 

//Bene section
beneSection: By = By.xpath('//div[contains(text(),"Beneficiary")]')
addBene: By = By.xpath('//button[normalize-space()="Add/Edit Beneficiary"]')
beneTypeDropDown: By = By.xpath('//div[@name="Beneficiary_Information.Beneficiaries[0].BeneficiaryType"]//i[@class="dropdown icon"]')
selectPrimaryBene: By = By.xpath('//span[normalize-space()="Primary Beneficiary"]')
beneRelationshipDropDown: By = By.xpath('//div[@name="Beneficiary_Information.Beneficiaries[0].PrimBeneRelationship"]//i[@class="dropdown icon"]')
beneRelationshipAunt: By = By.xpath('//div[@name="Beneficiary_Information.Beneficiaries[0].PrimBeneRelationship"]//div[@role="listbox"]//div[1]')
beneFirstNameInput: By = By.xpath('//input[@name="Beneficiary_Information.Beneficiaries[0].FirstName"]')
beneLastNameInput: By = By.xpath('//input[@name="Beneficiary_Information.Beneficiaries[0].LastName"]')
benePercentage: By = By.xpath('//input[@name="Beneficiary_Information.Beneficiaries[0].Percentage"]')
beneDone: By = By.xpath('//button[normalize-space()="Done"]')



ownerSection: By = By.name('//div[contains(text(),"Owner")]')
ownerFirstName: By = By.name('Owner_Information.OwnerFirstName')
onwerMiddleName: By = By.name('Owner_Information.OwnerMiddleName')
ownerLastName: By = By.name('Owner_Information.OwnerLastName')
ownerPhone: By = By.name('Owner_Information.OwnerCellPhone')
ownerAddressLine1: By = By.name('Owner_Information.OwnerLine1')
ownerCity: By = By.name('Owner_Information.OwnerCity')
ownerState: By = By.name('Owner_Information.OwnerState')
ownerZip: By = By.name('Owner_Information.OwnerZip')
//end of owner info 

payorSection: By = By.xpath('//div[contains(text(),"Payor")]')
payorSameAsOwner: By = By.xpath('//div[@name="Payor_Information.PayorOwnerFlag"]//div[@class="ui fitted toggle checkbox"]//label')
payorFirstName: By = By.name('Payor_Information.PayorFirstName')
payorMiddleName: By = By.name('Payor_Information.PayorMiddleName')
payorLastName:  By = By.name('Payor_Information.PayorLastName')
payorPhone: By = By.name('Payor_Information.PayorCellPhone')
payorAddress: By = By.name('Payor_Information.PayorLine1')
payorCity: By = By.name('Payor_Information.PayorCity')
payorState: By = By.name('Payor_Information.PayorState')
payorZipCode: By = By.name('Payor_Information.PayorZip')
billModeDropDown: By = By.xpath('//div[@name="Payor_Information.BillingFrequency"]//i[@class="dropdown icon"]')
selectModeMonthly: By = By.xpath('//span[normalize-space()="Monthly"]')
initialPayDateInput: By = By.xpath('//input[@name="Payor_Information.InitialPaymentDate"]')
billTypeDropDown: By = By.xpath('//div[@name="Payor_Information.PremType"]//i[@class="dropdown icon"]')
selectBankDraft: By = By.xpath('//div[@class="visible menu transition"]//span[@class="text"][normalize-space()="Bank Draft"]')
dueDay: By = By.name('Payor_Information.DueDay')
routing: By = By.xpath('//input[@name="Payor_Information.RoutingTransitNum"]')
account: By = By.xpath('//input[@name="Payor_Information.BankAccountNum"]')
recurringDayofMonth: By = By.xpath('//input[@name="Payor_Information.DueDay"]')
accountTypeDropDown: By = By.xpath('//div[@name="Payor_Information.BankAccountType"]//i[@class="dropdown icon"]')
accountTypeChecking: By = By.xpath('//div[@name="Payor_Information.BankAccountType"]//div[@role="listbox"]//div[1]')
financialInstitution: By = By.xpath('//input[@name="Payor_Information.FinancialInst"]')
bankCity: By = By.xpath('//input[@name="Payor_Information.BankCity"]')
futurePaymentsYes: By = By.xpath('//div[@name="Payor_Information.FuturePaymentQuestion"]//label[contains(text(),"Yes")]')
//end of payor info



constructor() {
    ;super({url: 'https://eapp-uat.lhlicagents.com'})
}
}