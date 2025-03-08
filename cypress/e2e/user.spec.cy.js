import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange TEST', () => {


  it('User Info Update - success', () => {
    loginpage.accessLoginPage()
    loginpage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    DashboardPage.checkDashboardPage()
    //alterac 01
    MenuPage.accessMyInfo()
    //alterac 02

    MyInfoPage.fillPersonalDetails('First Name','Last Name', 'Middle Name')
    MyInfoPage.fillEmployeeDetails('EmployId', 'otherId', '2025-07-29', '123456', '0987654')
    //cy.get(selectorsList.myInfoButton).click()000   dentro do menuPage.js
    MyInfoPage.fillStatus()
    MyInfoPage.saveForm() 
  
    


  })
    
})