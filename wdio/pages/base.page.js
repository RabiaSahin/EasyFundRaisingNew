

export default class BasePage {

    storageArray = [];

    setStorageArrayValue(identifier, value){
        value = value.trim();
        console.log(`Storing "${identifier}" Value: "${value}"`);
        this.storageArray.unshift([
            identifier,
            value
        ]);
    }

    getStorageArrayValue(identifier){
        for(let array of this.storageArray){
            if(array[0] == identifier){
                return array[1];
            }
        }
        throw `${BasePage.name}.${this.getStorageArrayValue.name}: "${identifier}" could not be found in Storage Array`;
    }

    getElementText(element, selector){
        try{
            this.waitForElementAndScroll(selector, `Displayed`);
            return $(selector).getText().trim();
        }
        catch(error){
            throw `${BasePage.name}.${this.getElementText.name}: ${error.message.replace(selector, element)}`;
        }
    }

    waitForElement(selector, state){
        switch(state){
            case(`Clickable`): $(selector).waitForClickable({ timeout: 50000 });
            break;
            case(`Displayed`): $(selector).waitForDisplayed({ timeout: 50000 });
            break;
            default:
                throw `${BasePage.name}.${this.waitForElement.name}: ${state} was not configured`;
        }
    }

    scrollToElement(selector){
        $(selector).scrollIntoView({
            behaviour: `smooth`,
            block: `center`,
            inline: `center`
        });
    }

    waitForElementAndScroll(selector, state){
        this.waitForElement(selector, state);
        if(!state.includes(`Not`)){
            this.scrollToElement(selector);
        }
    }
  
    clickElement(selector){
            this.waitForElementAndScroll(selector, `Clickable`);
            $(selector).click();
    }

    setElementValue(element, selector, value){
        try{
            this.waitForElementAndScroll(selector, `Clickable`);
            $(selector).setValue(value);
        }
        catch(error){
            throw `${BasePage.name}.${this.setElementValue.name}: ${error.message.replace(selector, element)}`;
        }
    }

    goToPageUrl(page){
        try{
            const baseUrl = `https://www.easyfundraising.org.uk`;
            switch (page){
                case(`Home Page`): return browser.url(`${baseUrl}/`);
                default:
                    throw `${BasePage.name}.${this.goToPageUrl.name}: page ("${page}") was not configured`;
            }
        }
        catch(error){
            throw `${BasePage.name}.${this.goToPageUrl.name}: ${error.message}`;
        }
    }
  
    getCurrentPage(){
        try{
            const pageUrl = browser.getUrl();
            let page = pageUrl.split(`org.uk/`).pop().split(`/?`).shift();
            console.log(`>>>>>>>>>>>>>>>>>>>>>>>>> page ${page}`);
            return page;
        }
        catch(error){
            throw `${BasePage.name}.${this.getCurrentPage.name}: ${error.message}`;
        }
    }

    getElementText(element, selector){
        try{
            this.waitForElementAndScroll(selector, `Displayed`);
            return $(selector).getText();
        }
        catch(error){
            throw `${BasePage.name}.${this.getElementText.name}: ${error.message.replace(selector, element)}`;
        }
    }

}
