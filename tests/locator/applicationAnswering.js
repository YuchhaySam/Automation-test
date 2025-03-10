export const applicationAnswering = async (page) =>({
    landingPage: {
        getStartedButton: await page.getByRole('navigation').getByRole('button', { name: 'Get started' })
    },
    applyButton: await page.getByRole('button', { name: 'Apply' }),
    nextButton: await page.getByRole('button', { name: 'Next' }),
    continueButton: await page.getByRole('button', { name: 'Continue' }),
    skipButton: await page.getByRole('button', { name: 'Skip video' }),
    answer:{
        question1: async (answer) => {
            const locator = await page.locator('span').filter({ hasText: `${answer}` }).first();
            return locator;
        },
        question2: async (answer) => {
            const locator= await page.locator('label').filter({ hasText: `${answer}` }).locator('span').first();
            return locator;
        },
        dateOfBirth: await page.getByPlaceholder('DD/MM/YYYY'),
        
        
        ethnicity: {
            container: await page.locator('span').filter({ hasText: 'Select' }),
            ethnicityAnswer: async (answer) =>{
                const locator = await page.getByLabel(`${answer}`, { exact: true });
                return locator;
            }
        },

        
        gender: async(answer) => {
            const locator = await page.locator('label').filter({ hasText: `${answer}` }).locator('span').first();
            return locator;
        },

       
        sexualOrientation: async(answer) => {
            const locator = await page.locator('label').filter({ hasText: `${answer}` }).locator('span').first();
            return locator;
        },

       
        disability: async(answer) => {
            const locator = await page.locator('label').filter({ hasText: `${answer}` }).locator('span').first();
            return locator;
        },
        neurodiverse: async(answer) => {
            const locator = await page.locator('span').filter({ hasText: `${answer}` }).first();
            return locator;
        },
        religion: {
            dropdownContainer: await page.locator('span').filter({ hasText: 'Select' }),
            religionAnswer : async (answer) => {
                const locator = await page.getByLabel(`${answer}`, { exact: true });
                return locator;
            }
        },
        meal: async(answer)=>{
            const locator = await page.locator('label').filter({ hasText: `${answer}` }).locator('span').first();
            return locator;
        },
        school: async (answer) =>{
            const locator = await page.locator('label').filter({ hasText: `${answer}` }).locator('span').first();
            return locator;
        }
    },
    headerQuestions : async (answer) => {
       const locator = await page.getByRole('heading', { name: `${answer}` });
       return locator;
    }


})