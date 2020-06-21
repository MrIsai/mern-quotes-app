const requestQuotes = async () => {
    let response = await fetch(
        "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
        {
            method: "GET",
            headers: {
                "x-rapidapi-host": "quotes15.p.rapidapi.com",
                "x-rapidapi-key":
                    "83a4e9c594msh909265a2ae0d6b9p1130fcjsnce6cd5eb8333",
            },
        }
    );

    let data = await response.json();
    return data;
};

export {requestQuotes};
