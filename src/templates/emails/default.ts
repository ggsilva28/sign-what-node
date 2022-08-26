class Template {

    style = {
        container: `
            width: 100%; 
            background-color: #F8F2FF;
            padding: 25px 0px;
        `,
        imgContainer: `
            width: 100%;
            text-align: center;
            margin-bottom: 45px;
        `,
        img: `
            margin: 0px auto;
            width: 120px;
        `,
        content: `
            width: 100%; 
            max-width: 600px; 
            background-color: #FFFFFF; 
            border-radius: 10px; 
            padding: 15px; 
            color: #333; 
            margin: 0px auto;"
        `
    }

    content = ''

    getTemplate() {
        return `
        <div style="${this.style.container}" >

            <div style="${this.style.imgContainer}"> 
                <img style="${this.style.img}" src="/assets/img/sign-what.png" alt="logo" title="Sign What?" >
            </div>

            <div style="${this.style.content}">
                ${this.content}
            </div>
        
        </div>
        `
    }

}

export { Template }