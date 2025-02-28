import { expect } from "@playwright/test"

export const testcase = {
    signUp : async function(signUpField, autoGeneration, mailinator, mailinatorField, email, password, lastName) {

        await signUpField.firstNameField.fill(autoGeneration.firstName);
        console.log('First name filled:', autoGeneration.firstName);
      
        await signUpField.lastNameField.fill(lastName);
        console.log('Last name filled:', lastName);
      
        await signUpField.emailField.fill(email);
        console.log('Email filled:', email);
      
        await signUpField.passwordField.fill(password);
        console.log('Password filled:', password);
      
        await signUpField.registerButton.click();
      
        // Navigate to Mailinator and retrieve the verification code
        console.log('Navigating to Mailinator...');
        await mailinator.goto('https://www.mailinator.com/');
        await mailinatorField.emailInputField.fill(email);
        await mailinatorField.emailInputField.press('Enter');
        await mailinatorField.verificationInbox.click();
        console.log('Went inside inbox');
      
        // Wait for the email content to load and extract the verification code
        await mailinatorField.codelocator.waitFor({ state: 'visible', timeout: 60000 });
        const emailContent = await mailinatorField.codelocator.textContent();
        console.log('Email content:', emailContent);
      
        // Go back to Vizzy and complete the sign-up process
        await signUpField.verificationCodeInputField.fill(emailContent);
        await signUpField.continueButton.click();
      }
}