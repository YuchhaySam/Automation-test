'use strict';
export const profile = async (page) => ({
    hideCardToggle: await page.locator('label').filter({ hasText: 'Hide on public profile' }).locator('span'),
    hideConfirmationModal: await page.getByText('Hide this cardAre you sure'),
    hideConfirmationCopy: await page.getByText('Please note: if this content'),
    hideConfirmationButton: await page.getByRole('button', { name: 'Hide' }),
    saveButton: await page.getByRole('button', { name: 'Save' }),
    API: 'https://backend-beta.vizzy.com/graphql',
    saveImage: await page.getByRole('button', { name: 'Save' }).nth(1),
    submittedButton: await page.getByRole('navigation').getByTitle('You must complete all'),
    bio:{
        hoverElement: await page.getByText('RequiredStart Your'),
        editBioButton : await page.getByRole('button', { name: 'Start Your Profile' }),
        addButton: await page.getByRole('button', { name: 'Add' }),
        bioOverLay: {
            bioModal : await page.getByText('Your bioProfile photoProfile'),
            profilePhoto: {
                container: await page.getByRole('button', { name: 'Profile photo' }),
                uploadPhoto: await page.locator('div').filter({ hasText: /^1x1 \(Square\) recommended Max 10MB$/ }).locator('div'),
                coverVideo : await page.getByPlaceholder('Copy & paste Youtube or Vimeo')
            },
            aboutYou: {
                container : await page.getByRole('button', { name: 'About you' }),
                location: await page.getByPlaceholder('e.g. London, United Kingdom'),
                headline : await page.getByLabel('Headline'),
                pronouns: {
                    container: await page.locator('span').filter({ hasText: /^Select$/ }),
                    //fill in the pronouns in the parameter. e.g, 'He / Him', etc
                    selection: async (answer) => {
                        const locator = await page.getByLabel(`${answer}`, { exact: true });
                        return locator;
                    }
                },
                business : await page.getByLabel('Current business or faculty', { exact: true }),
                businessURL : await page.getByPlaceholder('Copy & paste full link'),
                bioDescription: await page.getByPlaceholder('What\'s your story?')
            },
            tag: {
                container: await page.getByRole('button', { name: 'Tags' }),
                copy: await page.getByText('Add tags to provide more'),
                languages :{
                    inputField : await page.getByLabel('Languages'),
                    //input language inside language parameter, eg: 'Khmer'
                    dropdownSelection : async (language) => {
                        const locator = await page.getByLabel(`${language}`);
                        return locator;
                    },
                    pillContainer: async (language) => {
                        const locator = await page.locator('span').filter({ hasText: `${language}` }).first();
                        return locator;
                    }
                },
                nationalities: {
                    inputField: await page.getByLabel('Nationalities'),
                    //input nationality inside nationality parameter, eg: 'Cambodian'
                    dropdownSelection : async (nationality) => {
                        const locator = await page.getByLabel(`${nationality}`);
                        return locator;
                    },
                    pillContainer: async (nationality) => {
                        const locator = await page.locator('span').filter({ hasText: `${nationality}` }).first();
                        return locator;
                    }
                },
                interests : {
                    inputField: await page.getByLabel('Interests'),
                    //input interest inside interst parameter, eg: 'Sailing'
                    dropdownSelection: async (interest) => {
                        const locator = await page.getByLabel(`${interest}`);
                        return locator;
                    },
                    pillContainer: async (interest) => {
                        const locator = await page.locator('span').filter({ hasText: `${interest}` }).first();
                        return locator;
                    },
                    
                }

            },
            socialPlatform: {
                container: await page.getByRole('button', { name: 'Social platforms' }),
                copy: await page.getByText('Add your social media'),
                inputField: await page.getByLabel('Add link'),
            }
            
        }
    },
    skills : {
        hover: await page.getByText('RequiredSkillsAny software'),
        add: await page.getByRole('button', { name: 'Skills' }),
        copy: await page.locator('#modal-lightbox').getByText('Any software you\'re handy'),
        input: {
            inputField: await page.getByPlaceholder('Enter text here'),
            dropdownSelection: async (skill) => {
                const locator = await page.getByLabel(`${skill}`, { exact: true }); 
                return locator;
            },
            pillContainer: async (skill) => {
                const locator = await page.getByRole('button', { name: `${skill} Delete` });
                return locator;
            },
        },
        query: 'skillsManage',
        modal: await page.getByText('SkillsAny software you\'re')
    },
    customQA : {
        hoverElement: await page.getByText('Required QuestionsHere are a'),
        answerButton: await page.getByRole('button', { name: 'Questions', exact: true }),
        question1 : {
            answerButton: await page.locator(`//main[@class='Profile_content__7kBov']//section//div[1]//div[1]//div[2]//div[1]//button[1]`),
    
        },
        question2: {
            answerButton: await page.locator(`//section//div[@class='Board_board__hE8pT']//div[2]//div[1]//div[2]//div[1]//button[1]`)
        },
        question3: {
            answerButton: await page.locator(`
            //main[@class='Profile_content__7kBov']//div[1]//div[2]//div[2]//div[1]//button[1]`),
        },
        question4: {

            answerButton: await page.locator(`//section//div[@class='Board_board__hE8pT']//div[2]//div[2]//div[2]//div[1]//button[1]`)
        },
        question5: {
            answerButton: await page.locator(`//section//div[3]//div[2]//div[1]//button[1]`)
        },
        addFile: await page.locator('label').filter({ hasText: 'Drag and drop or click to' }),
        addURL: await page.getByPlaceholder('Add weblinks to videos or'),
        addButton: await page.getByRole('button', { name: 'Add a link' }),
        answerField: await page.getByPlaceholder('Type your answer here...'),
    }
});