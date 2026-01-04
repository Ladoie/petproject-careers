import { test, expect } from "@playwright/test";
import HomePage from "../pages/HomePage";
import CareersPage from "../pages/Careers.Page";
import SearchPage from "../pages/Search.Page";

test.describe("Search for Vacancy", () => {
  test("Search QA engineer in United States", async ({ page }) => {
    const homePage = new HomePage(page);
    const careersPage = new CareersPage(page);
    const searchPage = new SearchPage(page);

    await page.goto("/");

    await homePage.clickCareersLink();
    await careersPage.clickExploreJobsLink();
    await searchPage.fillSearch("QA engineer", "United States");
    await searchPage.clickFirstJob();

    await expect(page).toHaveURL(/\/job\//);
  });
});
