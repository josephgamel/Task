class BasePage{
    constructor (page){
        this.page = page
    }
    async navigate (){
        await this.page.goto('https://subscribe.jawwy.tv/ae-en');
    }
}
module.exports = BasePage