export default class Api {
    constructor(baseUrl, headers) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    getUser() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "GET",
            headers: this.headers,
        }).then((res) => {
            if (res.ok) return res.json();
            return Promise.reject(`error en la petición`);
        });
    }

    editUser(name, about) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "PATCH",
            headers: this.headers,
            "Content-Type": "application/json",
            body: JSON.stringify({
                name,
                about,
            }),
        }).then((res) => {
            if (res.ok) return res.json();
            return Promise.reject(`error en la petición`);
        });
    }

    editAvatar(link) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                avatar: link,
            }),
        }).then((res) => {
            if (res.ok) return res.json();
            return Promise.reject(`error en la petición`);
        });
    }

    getCards() {
        return fetch(`${this.baseUrl}/cards`, {
            method: "GET",
            headers: this.headers,
        }).then((res) => {
            if (res.ok) return res.json();
            return Promise.reject(`error en la petición`);
        });
    }

    createCard(name, link) {
        return fetch(`${this.baseUrl}/cards`, {
            method: "POST",
            headers: this.headers,
            "Content-Type": "application/json",
            body: JSON.stringify({
                name: name,
                link: link,
            }),
        }).then((res) => {
            if (res.ok) return res.json();
            return Promise.reject(`error en la petición`);
        });
    }

    deleteCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this.headers,
        }).then((res) => {
            if (res.ok) return res.json();
            return Promise.reject(`error en la petición`);
        });
    }

    addLikeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this.headers,
        }).then((res) => {
            if (res.ok) return res.json();
            return Promise.reject(`error en la petición`);
        });
    }

    removeLikeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this.headers,
        }).then((res) => {
            if (res.ok) return res.json();
            return Promise.reject(`error en la petición`);
        });
    }
}
