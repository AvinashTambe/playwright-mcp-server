import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';
import { LoginPage } from '../pages/LoginPage';
import { USER_INFO } from '../support/constants';
import { SignupPageLocators } from '../locators/locators';

// You must provide the correct imports/paths for your Playwright project structure.
// This assumes SignUpPage and LoginPage are Playwright page objects.

// Helper to check if error text is present
async function isExistingAccountError(page) {
  return await page.locator('text=Email Address already exist!').isVisible();
}

test.describe('Signup Test Suite Negative Testcase', () => {
  test('complete signup journey', async ({ page }) => {
    // Instantiate page objects
    const signUpPage = new SignUpPage(
      page,
      SignupPageLocators,
      SignupPageLocators, // Replace with LoginPageLocators if needed
      USER_INFO.BASE_URL,
      USER_INFO.ROUTES
    );
    const loginPage = new LoginPage(page);

    await signUpPage.visitSignUpPage();
    await signUpPage.enterSignupName(`${USER_INFO.FIRST_NAME} ${USER_INFO.LAST_NAME}`);
    await signUpPage.enterSignupEmail(USER_INFO.EMAIL);
    await signUpPage.clickSignupButton();

    if (await isExistingAccountError(page)) {
      await signUpPage.validateExistingAccountText();
      return;
    }

    await signUpPage.selectMaleRadioButton();
    await expect(page.locator(SignupPageLocators.name)).toHaveValue(`${USER_INFO.FIRST_NAME} ${USER_INFO.LAST_NAME}`);
    await signUpPage.enterEmail();
    await signUpPage.enterPassword(USER_INFO.PASSWORD);

    // Fill Address Information
    await signUpPage.enterFirstName(USER_INFO.FIRST_NAME);
    await signUpPage.enterLastName(USER_INFO.LAST_NAME);
    await signUpPage.selectDay(USER_INFO.B_DAY);
    await signUpPage.selectMonth(USER_INFO.B_MONTH);
    await signUpPage.selectYear(USER_INFO.B_YEAR);
    await signUpPage.selectNewsletterCheckbox();
    await signUpPage.selectSpecialOffersCheckbox();
    await signUpPage.enterAddress1(USER_INFO.ADDRESS1);
    await signUpPage.enterAddress2(USER_INFO.ADDRESS2);
    await signUpPage.selectCountry(USER_INFO.COUNTRY);
    await signUpPage.enterState(USER_INFO.STATE);
    await signUpPage.enterCity(USER_INFO.CITY);
    await signUpPage.enterZipcode(USER_INFO.ZIPCODE);
    await signUpPage.enterMobileNumber(USER_INFO.MOBILE_NUMBER);
    await signUpPage.clickCreateAccountButton();
    await signUpPage.validateAccountCreatedText();
    await signUpPage.clickContinueButton();
    await loginPage.validateLoggedInUserName(USER_INFO.FIRST_NAME, USER_INFO.LAST_NAME);
    await loginPage.clickLogoutButton();
  });
});
