
import {Locator, Page} from '@playwright/test'

export class NavigationPage{

    readonly page : Page
    readonly formsLink : Locator
    readonly formsLayout : Locator 
    readonly datePickerLink : Locator

    constructor(page : Page){
        this.page = page
        this.formsLink =  page.getByText('Forms');
        this.formsLayout = page.getByText('Form Layouts');
        this.datePickerLink = page.getByText('Datepicker');
    }


    async fromLayoutPage() {
        await this.formsLink.click();
        await this.formsLayout.click();
        
        
    }
    async datePicker() {
        await this.formsLink.click()
        await this.datePickerLink.click();

    }

}