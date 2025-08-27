import {test , expect} from '@playwright/test' 

test.beforeEach('Setup' , async ({page}) =>{
   await page.goto('http://localhost:4200/');
})


test.describe('Using Grid' , () =>{

    test.beforeEach('test setup', async ({page})=>{
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
    })


    test('Input' ,async ({page}) =>{

        const emaiFeild = page.locator('nb-card' ,{hasText:'Using the Grid'}).getByRole('textbox' ,{name:'Email'});

        await emaiFeild.fill('test.test#bac.com');

        await emaiFeild.clear();

        await emaiFeild.pressSequentially('test.test#bac.com',{delay:500});

    })

    test('Radio Button' , async ({page})=> {
        const parentHeader = page.locator('nb-card' ,{hasText:'Using the Grid'});

      // await  parentHeader.getByLabel('Option 1').check({force:true});

       await parentHeader.getByRole('radio' , {name:'Option 1'}).click({force:true});

    //    const isChecked = await parentHeader.getByRole('radio' , {name:'Option 1'}).isChecked();

    //    expect(isChecked).toBeTruthy();

    await expect(parentHeader.getByRole('radio' , {name:'Option 1'})).toBeChecked;


    })

})


test('Checkout' , async ({page})=>{
   await page.getByTitle('Modal & Overlays').click();
   await page.getByTitle('Toastr').click();
})

test('List and DropDowns' , async ({page})=>{
    const dropDown = page.locator('ngx-header nb-select');
    await dropDown.click();

    const dropDownList = page.locator('nb-option-list nb-option')

    await expect(dropDownList).toHaveText(['Light','Dark','Cosmic','Corporate'])

    await dropDownList.filter({hasText:'Cosmic'}).click();

     const headerParent = page.locator('nb-layout-header')

     await expect(headerParent).toHaveCSS('background-color','rgb(50, 50, 89)');
})

test('ToolTip' , async ({page})=>{
     await page.getByTitle('Modal & Overlays').click();
     await page.getByTitle('Tooltip').click();
     const tooltipParent = page.locator('nb-card',{hasText:'Tooltip Placements'})

     await tooltipParent.getByRole('button', {name:'TOP'}).hover();
     await expect(page.locator('nb-tooltip')).toHaveText('This is a tooltip');
})

test('Dialog Box' , async ({page}) =>{
   await page.getByText('Tables & Data').click();
   await page.getByText('Smart Table').click();

   page.on('dialog' ,   dia =>{
    //expect(dia.message).toEqual('Are you sure you want to delete?')
     dia.accept();
   })

   await page.locator('table').locator('tr', {hasText: 'mdo@gmail.com'}).locator('.nb-trash').click();
   await expect(page.locator('table tr').first()).not.toHaveText('mdo@gmail.com');

})

test('Web tables', async ({page}) =>{
   await page.getByText('Tables & Data').click();
   await page.getByText('Smart Table').click();

   const parentRow = page.getByRole('row' , {name:'mdo@gmail.com'});
   await parentRow.locator('.nb-edit').click();

   await page.locator('input-editor').getByPlaceholder('Age').clear();
   await page.locator('input-editor').getByPlaceholder('Age').pressSequentially('45',{delay:500});
   await page.locator('.nb-checkmark').click();

   await page.locator('.ng2-smart-pagination-nav').getByRole('listitem',{name: '2'}).click()

})

test('Date Picker' , async ({page})=>{
    await page.getByTitle('Forms').click();
    await page.getByTitle('Datepicker').click();
    await page.getByPlaceholder('Form Picker').click();
   // await page.getByPlaceholder('Form Picker').fill('03/05/1994');

   const date = new Date();
   date.setDate(date.getDate()+3);
   const expactedDate=date.getDate().toString();

   const currentMon=page.locator('nb-calendar-view-mode').textContent();

   await page.locator('[class="day-cell ng-star-inserted"]').getByText(expactedDate,{exact:true}).click();


})

test('Sliders' ,async ({page})=>{

   const silderBtn = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')

   await silderBtn.evaluate( node => {
      node.setAttribute('cx' , '232.6309');
      node.setAttribute('cy','232.6309');
   })

   await silderBtn.click();

})