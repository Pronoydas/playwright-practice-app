import {test,expect} from '@playwright/test'
import { timeout } from 'rxjs-compat/operator/timeout';

test.beforeEach('Setup' , async ({page}) => {
    await page.goto('http://www.uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click();
})

test('autowaiting',async ({page}) =>{

const btn= page.locator('.bg-success');
// await btn.waitFor({state:'attached'});
// const textvalue= await btn.allTextContents();
// expect(textvalue).toContain('Data loaded with AJAX get request.');

await expect(btn).toHaveText('Data loaded with AJAX get request.',{timeout: 30000})
} )

test('alternative wait' ,async ({page})=>{
    const btn= page.locator('.bg-success');
    // Wait for particuler element
    //await page.waitForSelector('.bg-success');
    
    //wait for response

    await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata');

    const textvalue= await btn.allTextContents();
    expect(textvalue).toContain('Data loaded with AJAX get request.');




})