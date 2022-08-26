class Template {

    username = '';

    getTemplate() {
        return `
            Hello ${this.username}
        `
    }
}

export { Template }