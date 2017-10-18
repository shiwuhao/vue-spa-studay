
import * as types from './../mutation-type';

export default {
    state : {
        authenticated : false,
        name: null,
        email: null,
    },
    mutations : {
        [types.SET_AUTH_USER](state, payload) {
            state.authenticated = payload.user ? true : false;
            state.name  = payload.user ? payload.user.name : null;
            state.email = payload.user ? payload.user.email : null;
        },
    },
    actions : {
        setAuthUser({commit, dispatch}) {
            axios.get('api/user').then(response => {
                commit({
                    type : types.SET_AUTH_USER,
                    user : response.data,
                });
            })
        },
        unSetAuthUser({commit, dispatch}) {
            commit({
                type :types.SET_AUTH_USER,
                user : null,
            });
        }
    }
}