export const settingLocator = async (page) => ({
  settingIcon: await page.locator(`a[aria-label='Settings'] svg path`),

  MyAccount: await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[normalize-space()='My account']`),

  businessAccountSetting : await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[contains(text(),'Business account settings')]`),

  createAndManageJob : await page.locator(`aside[class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT'] div:nth-child(4) a:nth-child(1)`),

  createAndManageCommuntiy : await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[contains(text(),'Create & manage community')]`),

  candidateLandingPage : await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[contains(text(),'Candidate landing page')]`),
  
  communityLandingPage : await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[contains(text(),'Community landing page')]`),
  
  businessVizzyProfile : await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[contains(text(),'Business Vizzy profile')]`),

  integrations : await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[contains(text(),'Integrations')]`),

  logOut: await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[normalize-space()='Log out']`)
});

export const createAndManageJob = async (page) => ({
  createNewJobButton : await page.locator(`//a[@class='Button_button__SbxBC Button_variantPrimaryLightBackground___T_v_ Button_borderRegular__irCcT Button_sizeMedium__J0mM8']`)
});

export const createJobForm = async (page) => ({
  
});