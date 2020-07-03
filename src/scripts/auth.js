class Auth {
    constructor() {
        /* Request the logged data to server */

        this.authenticated = false;
        this.username = "defaultuser";
        this.password = "";
    }

    login(fun, username, password) {
        this.authenticated = true;
        this.username = username;
        this.password = password;
        fun();
    }

    logout(fun) {
        this.authenticated = false;
        fun();
    }

    isAuthenticated() {
        return this.authenticated;
    }

    getUsername(){
        return this.username;
    }
}

export default new Auth();
