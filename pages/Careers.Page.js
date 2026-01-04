export default class CareersPage {
  constructor(page) {
    this.page = page;
    this.exploreJobsLink = page.getByRole("link", { name: "Explore jobs" });
  }

  async clickExploreJobsLink() {
    await this.exploreJobsLink.click();
  }
}
