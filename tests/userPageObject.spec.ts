import {test,expect}  from '@playwright/test'
import { PageObjectManager } from '../page-objects/pageObjectManager'; 


test.beforeEach('Setup' , async ({page})=>{
    await page.goto('http://localhost:4200/');
})


test('User Test', async ({page})=>{
    const pom = new PageObjectManager(page);
    await pom.onNavigationPage().fromLayoutPage();

})


test('Parameterize Methods' , async ({page})=>{
    const pom = new PageObjectManager(page);
    await pom.onNavigationPage().fromLayoutPage();
    await pom.onFormLayout().fillFormLayout('test.test#com','werew','Option 1');

})

test('Date Picker' , async ({page})=>{
    const pom = new PageObjectManager(page);
    await pom.onNavigationPage().datePicker();
    await pom.onDatePicker().selectTodayDayFromCommonCalender(4);

})