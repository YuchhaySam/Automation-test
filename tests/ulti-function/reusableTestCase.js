import { expect } from "@playwright/test"

export const testcase = {
    signUpStaging : async function(signUpField, autoGeneration, vizzy, mailinator, mailinatorField, email, password, lastName) {

        await signUpField.firstNameField.fill(autoGeneration.firstName);
        console.log('First name filled:', autoGeneration.firstName);
      
        await signUpField.lastNameField.fill(lastName);
        console.log('Last name filled:', lastName);
      
        await signUpField.emailField.fill(email);
        console.log('Email filled:', email);
      
        await signUpField.passwordField.fill(password);
        console.log('Password filled:', password);
      
        await signUpField.registerButton.click();

        await vizzy.waitForSelector(signUpField.verificationModalSelectors, {timeout: 15000});
        console.log('Verification modal is visible');
      
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
      },

    signUpBeta: async (signUpField, autoGeneration, mailTM, mailTMField, email, password, lastName) => {
      await signUpField.firstNameField.fill(autoGeneration.firstName);
      console.log('First name filled:', autoGeneration.firstName);
    
      await signUpField.lastNameField.fill(lastName);
      console.log('Last name filled:', lastName);
    
      await signUpField.emailField.fill(email);
      console.log('Email filled:', email);
    
      await signUpField.passwordField.fill(password);
      console.log('Password filled:', password);
    
      await signUpField.registerButton.click();
    
      // Navigate to mail tm and retrieve the verification code
      await mailTM.goto('https://www.mailinator.com/');
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
    },
    signIn : async (emailField, passwordField, email, password, button) =>{
      await emailField.fill(email);
      await passwordField.fill(password);
      await button.click();
    },
    fillInJobDetail : async (createAndManageJobPage, data, jobName, code, today, tomorrow) => {
      await expect(createAndManageJobPage.jobDetailCopy).toHaveText(data.copy.jobDetailCopy);
      await createAndManageJobPage.jobTitle.fill(jobName);
      console.log('Job name:', jobName);
      await createAndManageJobPage.jobCode.fill(code);
      console.log('Job code:', code);
      await createAndManageJobPage.applicationStartFromDate.fill(today);
      console.log('Application start from date:', today);
      await createAndManageJobPage.applicatonEndDate.fill(tomorrow);
      console.log('Application end date:', tomorrow);
      await createAndManageJobPage.applicationType.dropdownContainer.click();
      await createAndManageJobPage.applicationType.both.click();
      console.log('Application type: both');
      await createAndManageJobPage.jobDescription.fill('This is a job description');
      console.log('Job description: This is a job description');
      await createAndManageJobPage.requirement.fill('This is a job requirement');
      console.log('Job requirement: This is a job requirement');
      await createAndManageJobPage.workModel.onsite.click();
      console.log('Work model: Onsite');
      await createAndManageJobPage.expectedStartDate.fill(tomorrow);
      console.log('Expected start date:', tomorrow);
      await createAndManageJobPage.country.fill('Cambodia');
      console.log('Country: Cambodia');
      await createAndManageJobPage.city.fill('Siem Reap');
      console.log('City: Siem Reap');
      await createAndManageJobPage.currencyDropdown.currencyDropdownContainer.click();
      await createAndManageJobPage.currencyDropdown.USD.click();
      console.log('Currency value: USD');
      await createAndManageJobPage.salaryTypeDropdown.salaryTypeDropdownContainer.click();
      await createAndManageJobPage.salaryTypeDropdown.monthly.click();
      console.log('Salary type: Monthly');
      await createAndManageJobPage.employmentType.empoymentTypeContainer.click();
      await createAndManageJobPage.employmentType.fullTime.click();
      console.log('Employment type: Full-time');
      await createAndManageJobPage.minimumSalary.fill('1000');
      console.log('Minimum salary: 1000');
      await createAndManageJobPage.maximumSalary.fill('2000');
      console.log('Maximum salary: 2000');
      
      // Save the job
      await createAndManageJobPage.saveButton.click();
      console.log('Save the job');
    }
}