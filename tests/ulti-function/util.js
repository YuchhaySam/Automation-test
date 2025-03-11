import { expect } from '@playwright/test';
import path from 'path';
import { data } from '../test-data/data';
import { fileURLToPath } from 'url';

export const jobUtils = {
  // Job name generation
  generateJobName: function() {
    const randomNumber = Math.floor(Math.random() * 10000);
    return `Job automation ${randomNumber}`;
  },

  // Code auto generation
  codeGenerate: function() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 1; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  },

  // Answer creation loop
  answerCreationLoop: async function(createAndManageJobPage) {
    for (let i = 1; i <= 10; i++) {
      await createAndManageJobPage.prerequisiteQuestion.answerField.fill(`Answer ${i}`);
      await createAndManageJobPage.prerequisiteQuestion.addAnswerButton.click();
    }
  },

  // Check if button is disabled
  checkButtonDisabled: async function(button) {
    const isButtonDisabled = await button.isDisabled();
    expect(isButtonDisabled).toBe(true);
  },

  // Check for success message
  checkForSuccessMessage: async function(message) {
    await message.waitFor({ state: 'visible' });
    expect(await message.isVisible()).toBe(true);
  },

  // Check toggles status
  checkTogglesStatus: async function(toggles) {
    for (const toggle of toggles) {
      const isChecked = await toggle.locator.isChecked();
      expect(isChecked).toBe(false);
      if (!isChecked) {
        await toggle.locator.click();
      }
    }
  },

  // Check toggles status on
  checkTogglesStatusOn: async function(toggles) {
    for (const toggle of toggles) {
      const isChecked = await toggle.locator.isChecked();
      expect(isChecked).toBe(true);
    }
  },


  inputField : async function(inputFieldName, inputValue, CompleteValue, page){
    const selectDropdown = await inputFieldName.dropdownSelection(CompleteValue);
    const pillContainer = await inputFieldName.pillContainer(CompleteValue);
    await inputFieldName.inputField.fill(inputValue);
    await page.waitForTimeout(2000);
    await selectDropdown.click();
    await expect(pillContainer).toBeVisible();
  },
  hoverAndClick : async function(locatorHover, locatorClick){
    await locatorHover.hover();
    await locatorClick.click();
  },
  hideCard : async function(toggle, confirmationButton, copyLocator, copy){
    await toggle.click();
    await expect(copyLocator).toHaveText(copy);
    await confirmationButton.click();
  },
  checkHideCard : async function(modal, copyLocator, copy, okButton){
    await expect(modal).toBeVisible();
    await expect(copyLocator).toHaveText(copy);
    await okButton.click();
  },
  clickApplyOrContinue: async function(page) {
    try {
        // Wait for either the "Apply" or "Continue" button to appear
        await Promise.race([
            page.waitForSelector('button:has-text("Apply")', { timeout: 10000 }),
            page.waitForSelector('button:has-text("Continue")', { timeout: 10000 })
        ]);

        // Check if the "Apply" button is present and click it
        if (await page.isVisible('button:has-text("Apply")')) {
            await page.click('button:has-text("Apply")');
            console.log('clicked apply');
        }
        // Check if the "Continue" button is present and click it
        else if (await page.isVisible('button:has-text("Continue")')) {
            await page.click('button:has-text("Continue")');
            console.log('clicked continue');
        }
    } catch (error) {
        console.error('Neither "Apply" nor "Continue" button was found:', error);
    }
  },
  waitForRequestFunction : async function(API, query, page){
    await page.waitForResponse(response => {
      return response.url().includes(API) &&
      response.request().method() === 'POST' &&
      response.request().postData().includes(query);
    });
  },
  addingPrefixQuestion : async function (container, question){
    await container.click();
    await question.click(); 
  },
  uploadingFile : async function(hoverElement, button, type, upload,){
    const folderPath = path.join('tests', 'image-video', `${type}`); 
    await hoverElement.hover();
    await button.click();
    for(let i=1; i<=3; i++ ){
      const file = path.join(folderPath, `${i}`);
      await upload.setInputFile(file);

    }
  },
  uploadingFile: async function(type, upload, save, fileType, page, addURL, addButton) {
    const folderPath = path.join('tests', 'image-video', `${type}`);
    for (const fileTypeItem of fileType) {
      const file = path.join(folderPath, `${fileType.indexOf(fileTypeItem)}.${fileTypeItem}`);
      if (fileTypeItem !== 'youtube' && fileTypeItem !== 'vimeo' && fileTypeItem !== 'weblink') {
        await upload.setInputFiles(file);
      } else if (fileTypeItem === 'youtube') {
        await addURL.fill(data.url.youtubeURL1);
        await addButton.click();
        await page.waitForTimeout(3000);
      } else if (fileTypeItem === 'vimeo') {
        await addURL.fill(data.url.vimeoURL1);
        await addButton.click();
        await page.waitForTimeout(3000);
      } else {
        await addURL.fill(data.url.new);
        await addButton.click();
        await page.waitForTimeout(3000);
      }
      if (fileTypeItem === 'jpg' || fileTypeItem === 'png' || fileTypeItem === 'gif') {
        await save.click();
      } else {
        continue;
      }
      
      await page.waitForLoadState('domcontentloaded');
    }
    /* problem with vimeo and youtube container selector, will find a solution later
    for (let i = 0; i < fileType.length; i++) {
      const carousel = await page.getByRole('button', { name: `${i + 1}` }).getByRole('button');
      await expect(carousel).toBeVisible({ timeout: 10000 });
    }*/
  },
  answeringPsychometric: async function(psych, pageNum, rating1, rating2, page){
    const question = psych.answer[`page${pageNum}`];
    const answer1 = question.answer1;
    const answer2 = question.answer2;
    const nextButton = psych.answer.nextButton;
    const rating = async function(number){
      const locator = await page.getByRole('button', { name: `${number}`, exact: true });
      return locator;
    };
    const ratingAnswer1 = await rating(rating1);
    const ratingAnswer2 = await rating(rating2);
    
    await answer1.click();
    await answer2.click();
    await ratingAnswer1.click();
    await ratingAnswer2.click();
    await nextButton.click();
  },
  checkIfSubmitButtonIsDisable : async function(button, boonleanValue){
    const isButtonDisable = await button.isDisabled();
    expect(isButtonDisable).toBe(boonleanValue);
  },
  
  
};