import { When, Then } from "@cucumber/cucumber";
import BasePage from "../pages/home.page";
import HomePage from "../pages/home.page";
import CausePage from "../pages/Cause.page";
import SearchPage from "../pages/search.page";

const pages = {
  "": HomePage,
  "support-a-good-cause/": CausePage,
  "search/cause":SearchPage

};

When("I go to the {string} URL", (page) => {
  BasePage.goToPageUrl(page);
});

When("I wait for the {string} to be {string}", { wrapperOptions: { retry: 2 } }, (element, state) => {
    BasePage.waitForElement(pages[BasePage.getCurrentPage()].getSelector(element), state);
});

When("I store the text from the {string}", (elementToStore) => {
  BasePage.setStorageArrayValue(elementToStore,BasePage.getElementText(elementToStore,pages[BasePage.getCurrentPage()].getSelector(elementToStore)));
});

When("I click the {string}", (element) => {
  BasePage.clickElement(pages[BasePage.getCurrentPage()].getSelector(element));
});

When("I set the {string} to {string}",(element, elementValue) => {
    BasePage.setElementValue(element,pages[BasePage.getCurrentPage()].getSelector(element),elementValue);
  });


Then("the {string} contains stored {string}", (element, storedElement) => {
  expect(
    BasePage.getElementText(element,pages[BasePage.getCurrentPage()].getSelector(element))).toContain(BasePage.getStorageArrayValue(storedElement));
});
