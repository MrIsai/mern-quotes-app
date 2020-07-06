const url = "http://localhost:3333/quotes/";

export function requestAll() {
    return fetch(url, {
        method: "GET",
        mode: "cors",
    })
        .then((res) => res.json())
        .catch((err) => err);
}

export function requestByAuthor(author) {}
