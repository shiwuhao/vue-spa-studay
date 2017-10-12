/**
 * Created by shiwuhao on 2017/10/12.
 */
export default {
    setToken(token) {
        window.localStorage.setItem('jwt_token', token);
    },
    getToken() {
        return window.localStorage.getItem('jwt_token');
    },
    removeToken() {
        window.localStorage.removeItem('jwt_token');
    }
}