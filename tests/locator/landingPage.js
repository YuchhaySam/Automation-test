// landingPage.mjs

// Exporting all locator functions
export const headerLocators = async (page) => ({
  vizzyLogo: await page.locator('span.Nav_logo__au6jc'),
  vizzyForBusiness: await page.locator('.DesktopView_desktopOnly___ZyYW > a:nth-child(1)'),
  loginButton: await page.locator('button.Button_reverseTertiary__IoEZ6'),
  
});

export const heroSectionLocators = async (page) => ({
  heroTitle: await page.locator('h1.LandingPage_heading__4jC4e'),
  heroDescription: await page.locator('.LandingPage_textContent__7E7m9 > p:nth-child(2)'),
  heroImage: await page.locator('.LandingPage_mediaContent__yxN4A > img:nth-child(1)'),
  heroCreateProfileButton: await page.locator('.LandingPage_anchorButton__QzsUQ'),
  heroWatchOurVideoButton: await page.locator(`//button[normalize-space()='Watch our video']`),
  heroPizzaExpressLogo: await page.locator('div.UsedBySection_logo__vtF0y:nth-child(1) > img:nth-child(1)'),
  heroTiffanyLogo: await page.locator('div.UsedBySection_logo__vtF0y:nth-child(2) > img:nth-child(1)'),
  heroLouisVuittonLogo: await page.locator('div.UsedBySection_logo__vtF0y:nth-child(3) > img:nth-child(1)'),
  heroBurberryLogo: await page.locator('div.UsedBySection_logo__vtF0y:nth-child(4) > img:nth-child(1)'),
  heroOctopusLogo: await page.locator('div.UsedBySection_logo__vtF0y:nth-child(5) > img:nth-child(1)'),
  heroFlodeskLogo: await page.locator('div.UsedBySection_logo__vtF0y:nth-child(6) > img:nth-child(1)')
});

export const exampleProfileLocators = async (page) => [
  {
    name: await page.locator('div.ExampleProfile_profilesContainer__qyenk:nth-child(1) > div:nth-child(2) > p:nth-child(1)'),
    image: await page.locator('div.ExampleProfile_profilesContainer__qyenk:nth-child(1) > div:nth-child(1) > img:nth-child(1)'),
    description: await page.locator('div.ExampleProfile_profilesContainer__qyenk:nth-child(1) > div:nth-child(2) > p:nth-child(2)'),
    visitProfileLink: await page.locator('div.ExampleProfile_profilesContainer__qyenk:nth-child(1) > div:nth-child(2) > div:nth-child(3) > a:nth-child(1)')
  },
  {
    name: await page.locator('div.ExampleProfile_profilesContainer__qyenk:nth-child(2) > div:nth-child(2) > p:nth-child(1)'),
    image: await page.locator('div.ExampleProfile_profilesContainer__qyenk:nth-child(2) > div:nth-child(1) > img:nth-child(1)'),
    description: await page.locator('div.ExampleProfile_profilesContainer__qyenk:nth-child(2) > div:nth-child(2) > p:nth-child(2)'),
    visitProfileLink: await page.locator('div.ExampleProfile_profilesContainer__qyenk:nth-child(2) > div:nth-child(2) > div:nth-child(3) > a:nth-child(1)')
  },
  {
    name: await page.locator('div.ExampleProfile_profilesContainer__qyenk:nth-child(3) > div:nth-child(2) > p:nth-child(1)'),
    image: await page.locator('div.ExampleProfile_profilesContainer__qyenk:nth-child(3) > div:nth-child(1) > img:nth-child(1)'),
    description: await page.locator('div.ExampleProfile_profilesContainer__qyenk:nth-child(3) > div:nth-child(2) > p:nth-child(2)'),
    visitProfileLink: await page.locator('div.ExampleProfile_profilesContainer__qyenk:nth-child(3) > div:nth-child(2) > div:nth-child(3) > a:nth-child(1)')
  }
];

export const footerLocators = async (page) => ({
  vizzyFooterLogo: await page.locator('.Footer_logo__tSFSn > span:nth-child(1) > svg:nth-child(1)'),
  certifiedLogo: await page.locator('.Footer_certified__kIAEl'),
  footerLink: {
    helpCenter: await page.locator('.Footer_spanCol3__vMfuj > span:nth-child(1) > a:nth-child(1)'),
    instagram: await page.locator('.Footer_footerColumns__tn81_ > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)'),
    linkedIn: await page.locator('.Footer_spanCol2__U7oMy > a:nth-child(1)'),
    privacy: await page.locator('.Footer_footerColumns__tn81_ > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)'),
    terms: await page.locator('.Footer_footerColumns__tn81_ > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)')
  },
  copyright: await page.locator('.Footer_copyrights__fGvsP')
});


export const expectedProfiles = [
  {
    name: 'Sally Rayan',
    description: 'Marketing Graduate',
  },
  {
    name: 'Sophie Taylor',
    description: 'Project Manager, E-commerce',
  },
  {
    name: 'Henry Garcia',
    description: 'Business & Finance Student',
  },
];
