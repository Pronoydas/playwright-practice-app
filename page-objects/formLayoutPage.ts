import { Locator, Page } from "@playwright/test"; 


export class FormLayoutPage {

    readonly page : Page
    readonly parentFormSection : Locator 
    readonly formEmailField : Locator 
    readonly formPasswordField : Locator
    readonly formOptionsField : Locator
    readonly formSignInField : Locator 


    constructor(page: Page){
        this.page = page;
        this.parentFormSection = page.locator('nb-card' , {hasText:'Using the Grid'});
        this.formEmailField = this.parentFormSection.getByRole('textbox',{name:"Email"});
        this.formPasswordField = this.parentFormSection.getByPlaceholder('Password');
        this.formSignInField = this.parentFormSection.getByRole('button', {name:'Sign in'});
    }



    async fillFormLayout(email: string , password : string , optionText: string ){
        await this.formEmailField.fill(email);
        await this.formPasswordField.fill(password)
        await this.parentFormSection.getByText(optionText).check({force:true});
        await this.formSignInField.click()
    }

}