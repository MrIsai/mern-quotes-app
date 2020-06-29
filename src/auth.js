class Auth {
    constructor() {
        /* Request the logged data to server */
        console.log('constructor');
        let id = localStorage.getItem("username_id");
        if (id == null) {
            this.authenticated = false;
        } else {
            const url = "http://localhost:3333/users/" + id;
            let response = fetch(url, {
                method: "GET",
                mode: "cors",
            })
                .then((res) => res.json())
                .catch((err) => "Error: " + err);
            
            console.log(response);
            //this.authenticated = true;
        }
    }

    login(fun) {
        this.authenticated = true;
        fun();
    }

    logout(fun) {
        this.authenticated = false;
        fun();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();
