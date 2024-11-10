export default class UserInfo {
    constructor({ name, about, avatar}) {
        this.name = name;
        this.about = about;
        this.avatar = avatar;
        this.userId = null;
    }
    getUserInfo() {
        return {
            name: this.name.textContent,
            about: this.about.textContent,
            avatar: this.avatar.src,
            userId: this.userId,
        };
    }
    setUserInfo(inputName, inputAbout, userId) {
        this.name.textContent = inputName;
        this.about.textContent = inputAbout;
        this.userId = userId;
        
    }

    setUserAvatar(inputAvatar){
        this.avatar.src = inputAvatar;
    }
}
