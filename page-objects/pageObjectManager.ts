import { Page } from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage';
import { FormLayoutPage } from '../page-objects/formLayoutPage';
import { DatePickerPage } from '../page-objects/datePickerPage';


export class PageObjectManager{

    private readonly page : Page 
    private readonly navigationPage : NavigationPage
    private readonly formlayoutPage : FormLayoutPage
    private readonly datePicker : DatePickerPage


    constructor(page :Page){
        this.page = page;
        this.navigationPage = new NavigationPage(this.page);
        this.formlayoutPage = new FormLayoutPage(this.page);
        this.datePicker = new DatePickerPage(this.page);
    }


    onNavigationPage(){
        return this.navigationPage;
    }

    onFormLayout(){
        return this.formlayoutPage;
    }

    onDatePicker(){
        return this.datePicker;
    }
    
}
