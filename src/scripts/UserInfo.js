export default class UserInfo {
    constructor({ name, about, avatar}) {
        this.name = name;
        this.about = about;
        this.avatar = avatar;
    }
    getUserInfo() {
        return {
            name: this.name.textContent,
            about: this.about.textContent,
            avatar: this.avatar.src,
        };
    }
    setUserInfo(inputName, inputAbout) {
        this.name.textContent = inputName;
        this.about.textContent = inputAbout;
        
    }

    setUserAvatar(inputAvatar){
        this.avatar.src = inputAvatar;
    }
}
