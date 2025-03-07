'use strict';
export const profile = async (page) => ({
    hideCardToggle: await page.locator('label').filter({ hasText: 'Hide on public profile' }).locator('span'),
    hideConfirmationModal: await page.getByText('Hide this cardAre you sure'),
    hideConfirmationCopy: await page.getByText('Please note: if this content'),
    hideConfirmationButton: await page.getByRole('button', { name: 'Hide' }),
    saveButton: await page.getByRole('button', { name: 'Save' }),
    addContent: await page.getByRole('button', { name: 'Content' }),
    API: 'https://backend-beta.vizzy.com/graphql',
    saveImage: await page.getByRole('button', { name: 'Save' }).nth(1),
    previewButton: await page.getByRole('button', { name: 'Preview' }),
    submittedButton: await page.getByRole('navigation').getByRole('button', { name: 'Submit' }),
    confirmSubmit: await page.locator('#modal-lightbox').getByRole('button', { name: 'Submit' }),
    sucessModal: await page.getByText('Your application has been submitted successfully!Please keep an eye on your'),
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
                addButton: await page.getByRole('button', { name: 'Add' })
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
            answerButton: await page.locator(`//body/div[@id='__next']/div[@class='Profile_pageContainer__46m_C']/div[@class='Theme_light__fM1Gr Profile_main__8Sovf']/div[@id='main']/main[@class='Profile_content__7kBov']/section/div[@class='Board_board__hE8pT']/div[1]/div[2]/div[2]/div[1]/button[1]`),
        },
        question4: {
            answerButton: await page.locator(`//body/div[@id='__next']/div[@class='Profile_pageContainer__46m_C']/div[@class='Theme_light__fM1Gr Profile_main__8Sovf']/div[@id='main']/main[@class='Profile_content__7kBov']/section/div[@class='Board_board__hE8pT']/div/div[2]/div[2]/div[1]/button[1]`)
        },
        question5: {
            answerButton: await page.locator(`//section//div[3]//div[2]//div[1]//button[1]`)
        },
        addFile: await page.locator('label').filter({ hasText: 'Drag and drop or click to' }),
        addURL: await page.getByPlaceholder('Add weblinks to videos or'),
        addButton: await page.getByRole('button', { name: 'Add a link' }),
        answerField: await page.getByPlaceholder('Type your answer here...'),
    },
    psych : {
        answerButton: await page.getByRole('button', { name: 'Psychometrics' }),
        heading: await page.getByRole('button', { name: 'Psychometrics' }),
        takingTest: await page.getByRole('button', { name: 'Take test' }),
        answer: {
            page1:{
                answer1: await page.getByLabel('Determined and ambitious'),
                answer2: await page.getByLabel('Cautious and private'),
            },
            page2: {
                answer1: await page.getByLabel('Extroverted and lively'),
                answer2: await page.getByLabel('Assertive and daring'),
            },
            page3:{
                answer1: await page.getByLabel('Listening and supportive'),
                answer2: await page.getByLabel('Proactive and direct'),
            },
            page4:{
                answer1: await page.getByLabel('Sympathetic and tolerant'),
                answer2: await page.getByLabel('Self-contained and well-'),
            },
            page5:{
                answer1: await page.getByLabel('Tidy and neat'),
                answer2: await page.getByLabel('Opinionated and confident'),
            },
            page6:{
                answer1: await page.getByLabel('Bubbly and fun-loving'),
                answer2: await page.getByLabel('Brave and decisive'),
            },
            page7:{
                answer1: await page.getByLabel('Purposeful and straight-'),
                answer2: await page.getByLabel('Peace-making and tactful'),
            },
            page8:{
                answer1: await page.getByLabel('Reserved and logical'),
                answer2: await page.getByLabel('Helpful and modest'),
            },
            page9:{
                answer1: await page.getByLabel('Calm and sensitive'),
                answer2: await page.getByLabel('Out-going and cheerful'),
            },
            page10:{
                answer1: await page.getByLabel('Strong-willed and assertive'),
                answer2: await page.getByLabel('Influential and popular'),
            },
            pronounsSelection: {
                he: await page.getByRole('button', { name: 'He/His' }),
                she: await page.getByRole('button', { name: 'She/Her' }),
                they: await page.getByRole('button', { name: 'They/Their' })
            },
            nextButton: await page.getByText('Next', { exact: true }),
            submitButton: await page.locator('#modal-lightbox').getByRole('button', { name: 'Submit' })
        },
        psychHeader: await page.getByText('“A practical and committed contributor.”Their knowledge and expertise')
    },
    education: {
        addEducation: await page.getByRole('button', { name: 'Education Bring your' }),
        educationModal: await page.getByText('Add educationUpload CV BetaGet all eyes on your qualifications.Institution *'),
        institute: await page.getByLabel('Institution *'),
        url: await page.getByLabel('Institution URL'),
        degree: await page.getByPlaceholder('Degree, certification, etc...'),
        grade: await page.getByLabel('Grade'),
        fieldOfStudy: await page.getByLabel('Field of study'),
        description: await page.getByPlaceholder('How did it go? Add any'),
    },
    share: {
        logo: await page.locator('input[name="logo"]'),
        saveLogo: await page.getByRole('button', { name: 'Save' }).nth(2),
        saveImage: await page.getByRole('button', { name: 'Save' }).nth(1),
        startDate: await page.getByLabel('Start date *'),
        endDate: await page.getByLabel('End date (if applicable)'),
        saveButton: await page.getByRole('button', { name: 'Save', exact: true }),
        weblinkField: await page.getByPlaceholder('Add weblinks to videos or'),
        addLink: await page.getByRole('button', { name: 'Add a link' }),
        upload: await page.locator('label').filter({ hasText: 'Drag and drop or click to' }).locator('div').nth(1)
    },
    work: {
        addWork: await page.getByRole('button', { name: 'Work Showcase your work with' }),
        workModal: await page.getByText('Add workUpload CV BetaShowcase your experience and projects in style.Company'),
        companyName: await page.getByLabel('Company name *'),
        companyURl: await page.getByLabel('Company URL'),
        title: await page.getByLabel('Title *'),
        location: await page.getByLabel('Location'),
        description: await page.getByPlaceholder('e.g. “We were challenged to'),
    },
    project:{
        addProject: await page.getByRole('button', { name: 'Project Share your projects' }),
        title: await page.getByPlaceholder('Enter text here'),
        description: await page.getByPlaceholder('What did you do? Tell us'),
        modal: await page.getByText('Add projectFill in any')
    },
    mediaCard: {
        prompt: {
            container: await page.getByLabel('Select promptChoose prompt'),
            aGreatRead: await page.getByText('A great read')
        },
        addMedia: await page.getByRole('button', { name: 'Media card Share your' }),
        headline: await page.getByPlaceholder('Enter a headline…'),
        description: await page.getByPlaceholder('Tell us about it…'),
        saveButton: await page.getByRole('button', { name: 'Save' }),
        modal: await page.getByText('Add media cardAll the fields')
    },
    qaCard: {
        addQA: await page.getByRole('button', { name: 'Q&A Answer the questions you\'' }),
        modal: await page.locator('#modal-lightbox div').filter({ hasText: 'Add Q&A cardQuestion *' }).nth(1),
        question: {
            container: await page.getByLabel('Question *Select'),
            nextThreeYear: await page.getByText('In the next three years, I’d')
        },
        answer: await page.locator(`//textarea[@placeholder='Enter text…']`),
        saveButton: await page.getByRole('button', { name: 'Save' })
    }
});