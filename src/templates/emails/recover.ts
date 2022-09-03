import { Template as DefaultTemplate } from "./default";

class Template {

    username = '';
    code = '';

    getTemplate() {
        const defaultTemplate = new DefaultTemplate();
        defaultTemplate.content = `
            Opa bão? Eae ${this.username}
            Esse é seu código: ${this.code}
        `

        return defaultTemplate.getTemplate()
    }
}

export { Template }