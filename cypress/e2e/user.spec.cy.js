import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'

const loginpage = new LoginPage()
const DashboardPage = new DashboardPage()

describe('Orange TEST', () => {

  const selectorsList = {
    
    
    firstNameField:"[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    dateField:"[placeholder='yyy-mm-dd']",
    dateCloseButton:".--close",
    dataOptions: ".oxd-select-text--arrow",
    submitButton: "[type='submit']",

  }

  it.only('User Info Update - success', () => {
    loginpage.accessLoginPage()
    loginpage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    DashboardPage.checkDashboardPage()

    cy.get(selectorsList.myInfoButton).click()000
    cy.get(selectorsList.firstNameField).clear().type('Dodge')
    cy.get(selectorsList.middleNameField).clear().type('Rampage')
    cy.get(selectorsList.lastNameField).clear().type('trirthfive')
    cy.get(selectorsList.genericField).eq(3).clear().type('OtherTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Midnight')
    cy.get(selectorsList.genericField).eq(5).clear().type('TestId')
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-12-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicTest')
    cy.get(selectorsList.dataOptions).eq(0).type('z').click()
    cy.get(selectorsList.dataOptions).eq(1).type('o').click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')


  })
  it('Login - ERROR ', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
  
})