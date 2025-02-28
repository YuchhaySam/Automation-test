export const applicationAnswering = async (page) =>({
    landingPage: {
        getStartedButton: await page.getByRole('navigation').getByRole('button', { name: 'Get started' })
    },
    applyButton: await page.getByRole('button', { name: 'Apply' }),
    nextButton: await page.getByRole('button', { name: 'Next' }),
    answer:{
        question1:[
            {
                locator: await page.locator('span').filter({ hasText: 'Answer 1' }).first()
            },
            {
                locator: await page.locator('span').filter({ hasText: 'Answer 2' }).first()
            },
            {
                locator: await page.locator('span').filter({ hasText: 'Answer 3' }).first()
            },
            {
                locator: await page.locator('span').filter({ hasText: 'Answer 4' }).first()
            },
            {
                locator: await page.locator('span').filter({ hasText: 'Answer 5' }).first()
            },
            {
                locator: await page.locator('span').filter({ hasText: 'Answer 6' }).first()
            },
            {
                locator: await page.locator('span').filter({ hasText: 'Answer 7' }).first()
            },
            {
                locator: await page.locator('span').filter({ hasText: 'Answer 8' }).first()
            },
            {
                locator: await page.locator('span').filter({ hasText: 'Answer 9' }).first()
            },
            {
                locator: await page.locator('span').filter({ hasText: 'Answer 10' }).first()
            },
        ],
        question2:[
            {
                locator: await page.locator('label').filter({ hasText: /^Answer 1$/ }).locator('span').first()
            },
            {
                locator: await page.locator('label').filter({ hasText: 'Answer 2' }).locator('span').first()
            },
            {
                locator: await page.locator('label').filter({ hasText: 'Answer 3' }).locator('span').first()
            },
            {
                locator: await page.locator('label').filter({ hasText: 'Answer 4' }).locator('span').first()
            },
            {
                locator: await page.locator('label').filter({ hasText: 'Answer 5' }).locator('span').first()
            },
            {
                locator: await page.locator('label').filter({ hasText: 'Answer 6' }).locator('span').first()
            },
            {
                locator: await page.locator('label').filter({ hasText: 'Answer 7' }).locator('span').first()
            },
            {
                locator: await page.locator('label').filter({ hasText: 'Answer 8' }).locator('span').first()
            },
            {
                locator: await page.locator('label').filter({ hasText: 'Answer 9' }).locator('span').first()
            },
            {
                locator: await page.locator('label').filter({ hasText: 'Answer 10' }).locator('span').first()
            }
        ],
        dateOfBirth: await page.getByPlaceholder('DD/MM/YYYY'),
        ethnicity: {
            container: await page.locator('span').filter({ hasText: 'Select' }),
            asainChinese: await page.getByLabel('Asian - Chinese', { exact: true })
        }
    }

})