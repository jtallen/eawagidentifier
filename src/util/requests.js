class Requests {
    constructor({ host }) {
        this._host = host;
        console.log(host);
    }

    get(url, config = {}) {
        return fetch(this._absoluteURL(url), config);
    }

    post(url, config = {}) {
        return fetch(this._absoluteURL(url), {
            method: 'POST',
            ...config,
        });
    }

    _absoluteURL(url) {
        return `${this._host}${url}`;
    }
}
const host = 'http://localhost:3000';
export default new Requests({
    host,
});
