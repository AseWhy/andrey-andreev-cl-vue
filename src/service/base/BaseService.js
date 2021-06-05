export default class BaseService {
    static baseUrl = ''

    async apply(data) {
        const text = await (await data).text();

        if(text.trim() != '') {
            const json = JSON.parse(text);

            if(json.data?.token) {
                localStorage.setItem('service-token', json.data?.token);
            }

            return json;
        }

        return {};
    }

    delete(url, data) {
        return this.apply(
            fetch(
                BaseService.baseUrl + url,
                {
                    method: "DELETE",
                    body: JSON.stringify(data),
                    headers: this.getHeaders()
                }
            )
        )
    }

    put(url, data) {
        return this.apply(
            fetch(
                BaseService.baseUrl + url,
                {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: this.getHeaders()
                }
            )
        )
    }

    post(url, data) {
        return this.apply(
            fetch(
                BaseService.baseUrl + url,
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: this.getHeaders()
                }
            )
        )
    }

    get(url) {
        return this.apply(
            fetch(
                BaseService.baseUrl + url,
                {
                    method: "GET",
                    headers: this.getHeaders()
                }
            )
        );
    }

    getHeaders(){
        return {
            "Authorization": 'Bearer ' + this.getToken(),
            "Content-Type": "application/json"
        }
    }

    getToken(){
        return localStorage.getItem('service-token');
    }
}