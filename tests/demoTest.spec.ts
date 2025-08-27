import {test,expect} from '@playwright/test'

test.beforeEach('Setup' , async ({page}) => {
    await page.goto('http://localhost:4200')
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();

})

test('FristTest' ,async ({page}) =>{

   const str=await page.title();
   console.log(str);
})

test('User Facing Locator' , async ({page}) =>{

    await page.getByRole('button', {name: "SUBMIT"}).first().click();


    await page.getByLabel('Email').first().click();

    await page.getByPlaceholder('Jane Doe').click();

   
})

test('locating using child', async ({page}) =>{
   await page.locator('nb-radio label :text-is("Option 1")').click();
})

test('locating using parent', async ({page})=>{

    await page.locator('nb-card', {hasText:'Using the Grid'}).getByRole('textbox' , {name: "Email"}).click();
    await page.locator('nb-card',{has:page.locator('#inputEmail1')}).getByPlaceholder('Email').click();

    await page.locator('nb-card').filter({hasText: 'Basic form'}).getByRole('textbox' , {name: "Email"}).click();

    await page.locator('nb-card').filter({has:page.locator('input[type="checkbox"]')}).getByRole('button' , {name: 'Sign in'}).click();
})

test('extracting values' , async ({page}) =>{
    const basicForm = await page.locator('nb-card').filter({hasText: 'Basic form'});
    const textValue = basicForm.getByRole('button' , {name:'Submit'}).textContent();
    console.log(textValue);
})


test('Asserting Values' , ({page}) =>{

    const val = 5;

    expect(val).toEqual(9);
    
})