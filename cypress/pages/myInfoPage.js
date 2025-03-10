class MyInfoPage {


    selectorsList() {
        const selectors = {
            firstNameField:"[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField:"[name='lastName']",
            genericField:".oxd-input--active",
            dateField:"[placeholder='yyy-mm-dd']",
            dateCloseButton:".--close",
            dataOptions: ".oxd-select-text--arrow",
            submitButton: "[type='submit']",

        }

        return selectors
    }
    fillPersonalDetails(firstName,lastName,middleName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    
    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, dateOfBirth){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(dateOfBirth)
        cy.get(this.selectorsList().dateCloseButton).click()
        
        
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Update')
        cy.get('.oxd-toast-close')
    }
    
    fillStatus() {
        //cy.get(this.selectorsList().dataOptions).eq(0).type(nationality)
        //cy.get(this.selectorsList().dataOptions).eq(1).type(maritalStatus).click()
    }

}

export default MyInfoPage 