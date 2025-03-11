export const backOffice = {
    login: {
      emailField : await page.getByLabel('Email *'),
      passwordField : await page.getByLabel('Password *'),
      loginButton : await page.getByRole('button', { name: 'Sign in' }),
      verificationModal: await page.getByText('Enter Verification CodePlease'),
      verifyButton: await page.getByRole('button', { name: 'Verify' }),
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
            customVideoToggle: await page.locator('label:nth-child(6) > .Toggle_toggleBoolean__B_Pa8')
          },
          hiring: {
            customVideoToggle: await page.locator('div:nth-child(14) > .FormFields_label__B7Uum > .Toggle_toggleBoolean__B_Pa8')
          }
        }
      }
    }
}