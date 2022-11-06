import BasePage from './base.page.js';

/**
 * Page-object containing elements for the Cart Page
 */
class SearchPage extends BasePage {

    /**
    * Returns a selector for an element which is local to the Cart Page
    * @param element User-friendly name of the element we would like to identify (e.g `Checkout Button`)
    * @example Step: When I click the "Checkout Button"
    */
    getSelector(element){
        switch(element){
            case(`Searched Result Title`): return `#causesSearchItem0 [data-testid="title"]`;
            default:
                throw `${SearchPage.name}.${this.getSelector.name}: element ("${element}") was not configured`;
        }
    }
}

export default new SearchPage();
