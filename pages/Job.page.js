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
