export default class UserInfo {
    constructor({ name, about }) {
        this.name = name;
        this.about = about;
    }
    getUserInfo() {
        return {
            name: this.name.textContent,
            about: this.about.textContent,
        };
    }
    setUserInfo(inputName, inputAbout) {
        this.name.textContent = inputName;
        this.about.textContent = inputAbout;
    }
}
