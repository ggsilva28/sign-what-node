import { Template as DefaultTemplate } from "./default";
class Template {

    username = '';

    getTemplate() {
        const defaultTemplate = new DefaultTemplate();
        defaultTemplate.content = `
            Opa bão? Eae ${this.username}
        `

        return defaultTemplate.getTemplate()
    }
}

export { Template }