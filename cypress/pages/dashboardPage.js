class DashboardPage {

    selectorList (){
        const selectors = {
            dashBoardGrid: ".orangehrm-dashboard-grid",
        }
        return selectors
    }

    checkDashboardPage(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashBoardGrid).should('be.visible')
    }
}

export default DashboardPage