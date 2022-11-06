import BasePage from './base.page.js';

/**
 * Page-object containing elements for the Inventory Page
 */
class CausePage extends BasePage {

    /**
    * Returns a selector for an element which is local to the Inventory Page
    * @param element User-friendly name of the element we would like to identify (e.g `Sauce Labs Backpack Image`)
    * @example Step: Then the "Sauce Labs Backpack Image" is displayed
    */
    getSelector(element){
        switch(element){
            case(`Search Cause Input Box`): return `#sagc-hero-search-input`;
            case(`3rd Option From Searched Result`): return `//*[@class = "style_suggestion__-CRCo"][3]`;
            case(`Search Cause Button`): return `#sagc-hero-search-submit`;
            default:
                throw `${CausePage.name}.${this.getSelector.name}: element ("${element}") was not configured`;
        }
    }
}

export default new CausePage();
