const url = "http://localhost:3333/quotes/";

export function requestAll() {
    let response = fetch(url, {
        method: "GET",
        mode: "cors",
    })
        .then((res) => res.json())
        .catch((err) => err);
    return response;
}

export function requestByAuthor(author) {}
