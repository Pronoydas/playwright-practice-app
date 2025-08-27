import {Page} from '@playwright/test'


export class DatePickerPage{

    readonly page :Page ;

    constructor(page:Page){
        this.page=page;
    }


    async selectTodayDayFromCommonCalender(dateNum: number){
    await this.page.getByTitle('Forms').click();
    await this.page.getByTitle('Datepicker').click();
    await this.page.getByPlaceholder('Form Picker').click();
   // await page.getByPlaceholder('Form Picker').fill('03/05/1994');

   const date = new Date();
   date.setDate(date.getDate()+dateNum);
   const expactedDate=date.getDate().toString();

   const currentMon=this.page.locator('nb-calendar-view-mode').textContent();

   await this.page.locator('[class="day-cell ng-star-inserted"]').getByText(expactedDate,{exact:true}).click();

    }
}