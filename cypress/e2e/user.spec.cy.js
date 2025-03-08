import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange TEST', () => {


  it('User Info Update - success', () => {
    loginpage.accessLoginPage()
    loginpage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    DashboardPage.checkDashboardPage()
    MenuPage.accessMyInfo()
    

    MyInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    MyInfoPage.fillEmployeeDetails('EmployId', 'otherId', '2025-07-29', '123456', '0987654')
    //cy.get(selectorsList.myInfoButton).click()000   dentro do menuPage.js
    MyInfoPage.fillStatus()
    MyInfoPage.saveForm() 
  
  })
    
})