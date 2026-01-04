export default class HomePage {
  constructor(page) {
    this.page = page;
    this.careersLink = page
      .getByLabel("Sub Menu")
      .getByRole("link", { name: "Careers" });
  }

  async clickCareersLink() {
    await this.careersLink.click();
  }
}

// await page.getByRole('button', { name: 'Apply now' }).first().click();
// await page.getByRole('menuitem', { name: 'Apply Now' }).click();
// await page.getByRole('textbox', { name: 'Email Address:' }).click();
// await page.getByRole('textbox', { name: 'Email Address:' }).fill('bakhtadzel@gmail.com');
// await page.getByRole('textbox', { name: 'Password:' }).click();
// await page.getByRole('textbox', { name: 'Password:' }).fill('0SCsh3pB4Hqp5TU');
// await page.getByRole('button', { name: 'Sign In' }).click();
// await page.getByRole('button', { name: 'Profile Information' }).click();
// await page.getByRole('button', { name: 'Previous Employment' }).click();
// await page.getByRole('button', { name: ' Add Previous Employment' }).click();
// await page.getByRole('combobox', { name: 'Is this your present employer?' }).click();
// await page.getByRole('menuitem', { name: 'Yes' }).click();
// await page.getByRole('textbox', { name: 'Company Name' }).click();
// await page.getByRole('textbox', { name: 'Company Name' }).fill('faker ');
// await page.getByRole('textbox', { name: 'Title / Designation' }).click();
// await page.getByRole('textbox', { name: 'Title / Designation' }).fill('f');
// await page.getByRole('textbox', { name: 'Title / Designation' }).press('CapsLock');
// await page.getByRole('textbox', { name: 'Title / Designation' }).fill('faker');
// await page.getByRole('textbox', { name: 'Start Date' }).click();
// await page.getByRole('textbox', { name: 'Start Date' }).fill('10/10/2020');
// await page.getByRole('combobox', { name: 'Type of Business' }).click();
// await page.getByRole('menuitem', { name: 'Information Technology' }).click();
// await page.getByRole('button', { name: 'Formal Education' }).click();
// await page.getByRole('button', { name: ' Add Formal Education' }).click();
// await page.getByRole('textbox', { name: 'School/College/University' }).click();
// await page.getByRole('textbox', { name: 'School/College/University' }).fill('faker');
// await page.getByRole('textbox', { name: 'School/College/University' }).press('Tab');
// await page.getByRole('button', { name: 'Major' }).click();
// await page.getByRole('menuitem', { name: 'Science', exact: true }).click();
// await page.getByRole('combobox', { name: 'Degree' }).click();
// await page.getByRole('menuitem', { name: 'Bachelors' }).click();
// await page.getByRole('combobox', { name: 'Minor' }).click();
// await page.getByRole('textbox', { name: 'From Date' }).click();
// await page.getByRole('textbox', { name: 'From Date' }).fill('10/10/2000');
// await page.getByRole('group', { name: 'Formal Education' }).getByLabel('End Date').click();
// await page.getByRole('group', { name: 'Formal Education' }).getByLabel('End Date').fill('10/10/2004');
// await page.getByRole('button', { name: 'Certifications/Licences' }).click();
// await page.getByRole('button', { name: ' Add Certifications/Licences' }).click();
// await page.getByRole('textbox', { name: 'Certification/License' }).click();
// await page.getByRole('textbox', { name: 'Certification/License' }).fill('faker');
// await page.getByRole('textbox', { name: 'Certification/License' }).press('Tab');
// await page.getByRole('textbox', { name: 'Description' }).fill('faker');
// await page.getByRole('textbox', { name: 'Description' }).press('Tab');
// await page.getByRole('textbox', { name: 'Institution' }).fill('faker');
// await page.getByRole('textbox', { name: 'Institution' }).press('Tab');
// await page.getByRole('button', { name: 'Language' }).click();
// await page.locator('[id="126:sectionContent"] > .btnRowWrapper').click();
// await page.getByRole('button', { name: ' Add Language' }).click();
// await page.locator('[id="251:_input"]').click();
// await page.getByRole('menuitem', { name: 'English' }).click();
// await page.getByRole('combobox', { name: 'Speaking Proficiency' }).click();
// await page.getByRole('option', { name: 'Fluent' }).click();
// await page.getByRole('combobox', { name: 'Reading Proficiency' }).click();
// await page.getByRole('menuitem', { name: 'Fluent' }).click();
// await page.getByRole('combobox', { name: 'Writing Proficiency' }).click();
// await page.getByRole('option', { name: 'Fluent' }).click();
// await page.getByRole('button', { name: ' Add Language' }).click();
// await page.locator('[id="289:_input"]').click();
// await page.getByRole('option', { name: 'German' }).click();
// await page.locator('[id="296:_input"]').click();
// await page.getByRole('menuitem', { name: 'Comprehend & Converse' }).click();
// await page.locator('[id="303:_input"]').click();
// await page.getByRole('menuitem', { name: 'Comprehend & Converse' }).click();
// await page.locator('[id="310:_input"]').click();
// await page.getByRole('menuitem', { name: 'Comprehend & Converse' }).click();
// await page.getByRole('button', { name: 'Job-Specific Information' }).click();
// await page.getByRole('combobox', { name: 'How did you hear about this' }).click();
// await page.getByRole('option', { name: 'Others', exact: true }).click();
