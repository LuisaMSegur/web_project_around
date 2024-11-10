class Api {
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
            headers: {
                "Content-Type": "application/json", 
                ...this.headers, 
            },
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
            headers: {
                "Content-Type": "application/json", 
                ...this.headers, 
            },
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
            headers: {
                ...this.headers,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                link,
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

    likeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: this.headers,
        }).then((res) => {
            if (res.ok) return res.json();
            return Promise.reject(`error en la petición`);
        });
    }

    dislikeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            method: "DELETE",
            headers: this.headers,
        }).then((res) => {
            if (res.ok) return res.json();
            return Promise.reject(`error en la petición`);
        });
    }

    toggleLike(cardId, isliked) {
        return isliked ? this.dislikeCard(cardId) : this.likeCard(cardId);
    }
}

export const api = new Api(
    "https://around.nomoreparties.co/v1/web-es-cohort-16",
    {
        authorization: "8a4f71dd-3b26-4bfa-a79c-46527c68df13",
    }
);
