class Auth {
    constructor() {
        /* Request the logged data to server */

        this.authenticated = true;
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
