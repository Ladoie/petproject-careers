export default class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchByKeyword = page.getByRole("textbox", {
      name: "Search by Keyword",
    });
    this.searchByLocation = page.getByRole("textbox", {
      name: "Search by Location",
    });
    this.searchButton = page.getByRole("button", { name: "Search Jobs" });
    this.jobRows = page.locator("tbody tr.data-row");
    this.firstJob = page
      .locator("tbody tr.data-row")
      .first()
      .getByRole("link")
      .first();
  }

  async fillSearch(keyword, location) {
    await this.searchByKeyword.fill(keyword);
    await this.searchByLocation.fill(location);
    await this.searchButton.click();
  }

  async clickFirstJob() {
    await this.firstJob.click();
  }
}
