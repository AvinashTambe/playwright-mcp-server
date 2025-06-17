import { Page, expect } from '@playwright/test';

// You should define these locators in your Playwright project, similar to Cypress locators
// Example: import { SignupPageLocators, LoginPageLocators } from '../locators/locators';
// For now, you can pass selectors as arguments or set them as class properties.

export class SignUpPage {
  readonly page: Page;
  readonly locators: any;
  readonly loginLocators: any;
  readonly baseUrl: string;
  readonly routes: any;

  constructor(page: Page, locators: any, loginLocators: any, baseUrl: string, routes: any) {
    this.page = page;
    this.locators = locators;
    this.loginLocators = loginLocators;
    this.baseUrl = baseUrl;
    this.routes = routes;
  }

  async visitSignUpPage() {
    await this.page.goto(`${this.baseUrl}${this.routes.SIGNUP}`);
    await expect(this.page).toHaveTitle('Automation Exercise - Signup / Login');
    await expect(this.page).toHaveURL('https://www.automationexercise.com/signup');
  }

  // Sign Up Form Actions
  async enterSignupName(name: string) {
    await this.page.locator(this.loginLocators.signupName).waitFor({ state: 'visible' });
    await this.page.fill(this.loginLocators.signupName, name);
  }

  async enterSignupEmail(email: string) {
    await this.page.locator(this.loginLocators.signupEmail).waitFor({ state: 'visible' });
    await this.page.fill(this.loginLocators.signupEmail, email);
  }

  async clickSignupButton() {
    await this.page.locator(this.loginLocators.signupButton).waitFor({ state: 'visible' });
    await this.page.click(this.loginLocators.signupButton);
  }

  async validateSignUpNameToaster() {
    const input = this.page.locator(this.loginLocators.signupName);
    await expect(input).toBeVisible();
    const validity = await input.evaluate((el: HTMLInputElement) => el.checkValidity());
    expect(validity).toBeFalsy();
    const message = await input.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(message).toContain('Please fill in this field');
  }

  async validateSignUpEmailToaster() {
    const input = this.page.locator(this.loginLocators.signupEmail);
    await expect(input).toBeVisible();
    const validity = await input.evaluate((el: HTMLInputElement) => el.checkValidity());
    expect(validity).toBeFalsy();
    const message = await input.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(message).toContain('Please fill in this field');
  }

  async validateInvalidSignUpEmailToaster(email: string) {
    const input = this.page.locator(this.loginLocators.signupEmail);
    await expect(input).toBeVisible();
    const validity = await input.evaluate((el: HTMLInputElement) => el.checkValidity());
    expect(validity).toBeFalsy();
    const expectedMessage = `Please include an '@' in the email address. '${email}' is missing an '@'.`;
    const message = await input.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(message).toContain(expectedMessage);
  }

  async validateMissingDomainToaster(email: string) {
    const input = this.page.locator(this.loginLocators.signupEmail);
    await expect(input).toBeVisible();
    const validity = await input.evaluate((el: HTMLInputElement) => el.checkValidity());
    expect(validity).toBeFalsy();
    const expectedMessage = `Please enter a part following '@'. '${email}' is incomplete.`;
    const message = await input.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(message).toContain(expectedMessage);
  }

  // Sign Up Form Actions
  async selectMaleRadioButton() {
    await this.page.locator(this.locators.mrradioButton).waitFor({ state: 'visible' });
    await this.page.click(this.locators.mrradioButton);
  }

  async selectFemaleRadioButton() {
    await this.page.locator(this.locators.mrsradioButton).waitFor({ state: 'visible' });
    await this.page.click(this.locators.mrsradioButton);
  }

  async enterName(name: string) {
    await this.page.locator(this.locators.name).waitFor({ state: 'visible' });
    await this.page.fill(this.locators.name, name);
  }

  async enterEmail() {
    const input = this.page.locator(this.locators.email);
    await expect(input).toBeDisabled();
  }

  async enterPassword(password: string) {
    await this.page.locator(this.locators.password).waitFor({ state: 'visible' });
    await this.page.fill(this.locators.password, password);
  }

  async selectDay(day: string) {
    await this.page.locator(this.locators.day).waitFor({ state: 'visible' });
    await this.page.selectOption(this.locators.day, day);
  }

  async selectMonth(month: string) {
    await this.page.locator(this.locators.month).waitFor({ state: 'visible' });
    await this.page.selectOption(this.locators.month, month);
  }

  async selectYear(year: string) {
    await this.page.locator(this.locators.year).waitFor({ state: 'visible' });
    await this.page.selectOption(this.locators.year, year);
  }

  async selectNewsletterCheckbox() {
    await this.page.locator(this.locators.newsletterCheckbox).waitFor({ state: 'visible' });
    await this.page.check(this.locators.newsletterCheckbox);
  }

  async selectSpecialOffersCheckbox() {
    await this.page.locator(this.locators.specialoffersCheckbox).waitFor({ state: 'visible' });
    await this.page.check(this.locators.specialoffersCheckbox);
  }

  async enterFirstName(firstName: string) {
    await this.page.locator(this.locators.firstName).waitFor({ state: 'visible' });
    await this.page.fill(this.locators.firstName, firstName);
  }

  async enterLastName(lastName: string) {
    await this.page.locator(this.locators.lastName).waitFor({ state: 'visible' });
    await this.page.fill(this.locators.lastName, lastName);
  }

  async enterCompany(company: string) {
    await this.page.locator(this.locators.company).waitFor({ state: 'visible' });
    await this.page.fill(this.locators.company, company);
  }

  async enterAddress1(address1: string) {
    await this.page.locator(this.locators.address1).waitFor({ state: 'visible' });
    await this.page.fill(this.locators.address1, address1);
  }

  async enterAddress2(address2: string) {
    await this.page.locator(this.locators.address2).waitFor({ state: 'visible' });
    await this.page.fill(this.locators.address2, address2);
  }

  async selectCountry(country: string) {
    await this.page.locator(this.locators.country).waitFor({ state: 'visible' });
    await this.page.selectOption(this.locators.country, country);
  }

  async enterState(state: string) {
    await this.page.locator(this.locators.state).waitFor({ state: 'visible' });
    await this.page.fill(this.locators.state, state);
  }

  async enterCity(city: string) {
    await this.page.locator(this.locators.city).waitFor({ state: 'visible' });
    await this.page.fill(this.locators.city, city);
  }

  async enterZipcode(zipcode: string) {
    await this.page.locator(this.locators.zipcode).waitFor({ state: 'visible' });
    await this.page.fill(this.locators.zipcode, zipcode);
  }

  async enterMobileNumber(mobileNumber: string) {
    await this.page.locator(this.locators.mobileNumber).waitFor({ state: 'visible' });
    await this.page.fill(this.locators.mobileNumber, mobileNumber);
  }

  async clickCreateAccountButton() {
    await this.page.locator(this.locators.createAccountButton).waitFor({ state: 'visible' });
    await this.page.click(this.locators.createAccountButton);
  }

  async validateAccountCreatedText() {
    const el = this.page.locator(this.locators.accountCreatedText);
    await expect(el).toBeVisible();
    await expect(el).toHaveText('Account Created!');
  }

  async clickContinueButton() {
    await this.page.locator(this.locators.continueButton).waitFor({ state: 'visible' });
    await this.page.click(this.locators.continueButton);
  }

  async validateExistingAccountText() {
    const el = this.page.locator(this.locators.emailExistsText);
    await expect(el).toHaveText('Email Address already exist!');
  }

  async clickDeleteAccountButton() {
    await this.page.locator(this.locators.deleteAccountButton).waitFor({ state: 'visible' });
    await this.page.click(this.locators.deleteAccountButton);
  }

  async validateAccountDeletedText() {
    const el = this.page.locator(this.locators.accountDeletedText);
    await expect(el).toBeVisible();
    await expect(el).toHaveText('ACCOUNT DELETED!');
  }
}

export default SignUpPage;
