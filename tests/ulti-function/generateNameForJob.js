import { expect } from '@playwright/test';

export const autoGenerationCreateJob ={
  //jobName
  generateJobName: function(){
    const randomNumber = Math.floor(Math.random() * 10000);
    return `Job automation ${randomNumber}`;
  },
  
  //code auto generation
  codeGenerate: function(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    // Generate the rest of the password
    for (let i = 1; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }
  
};

export async function answerCreationLoop(createAndManageJobPage) {
  for (let i = 1; i <= 10; i++) {
    await createAndManageJobPage.prerequisiteQuestion.answerField.fill(`Answer ${i}`);
    await createAndManageJobPage.prerequisiteQuestion.addAnswerButton.click();
  }
}

export async function checkButtonDisabled(button) {
  const isButtonDisabled = await button.isDisabled();
  expect(isButtonDisabled).toBe(true);
}
export async function checkForSuccessMessage(message){
  await message.waitFor({ state: 'visible' });
  expect(await message.isVisible()).toBe(true);
  console.log('Group created successfully');
}
