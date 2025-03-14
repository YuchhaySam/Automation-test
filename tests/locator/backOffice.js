export const backOffice = async (page) => ({
    login: {
      emailField : await page.getByLabel('Email *'),
      passwordField : await page.getByLabel('Password *'),
      loginButton : await page.getByRole('button', { name: 'Sign in' }),
      verificationModal: `//h1[normalize-space()='Enter Verification Code']`,
      verifyButton: await page.getByRole('button', { name: 'Verify' }),
      dashBoardLogo: `//span[@class='Logo_logo__4TSTT Layout_vizzy__F4BDe']//*[name()='svg']`,
    },
    businessRegister : {
      container: await page.getByRole('button', { name: 'Businesses registered' }),
      approve: await page.getByRole('button', { name: 'Approved' }),
      pending: await page.getByRole('button', { name: 'Pending' }),
      reject: await page.getByRole('button', { name: 'Rejected' }),
      list: {
        search: await page.getByPlaceholder('Search anything…'),
        searchButton: await page.locator('label').getByRole('button'),
        businessNameLocator: async function(businessName){
          const locator = await page.getByRole('row', { name: `${businessName}` });
          return locator;
        },
        viewBusinessButton : async function(businessName){
          const locator = await page.getByRole('row', { name: `${businessName}` }).getByRole('link');
          return locator;
        },
        businessOverlay : {
          //business info
          //business onboarding page
          //customize invite team email
          //community
          community: {
            customVideoToggle: await page.locator(`//*[@id="__next"]/div/main/div/div[4]/div[2]/label[5]/input`)
          },
          hiring: {
            customVideoToggle: await page.locator(`//*[@id="__next"]/div/main/div/div[4]/div[2]/div[6]/label/input`)
          }
        }
      }
    }
});