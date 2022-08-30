/**
 * Vuex module for modal window
 * 
 * @return state, mutations, getters
 */

const state = {
    name: null,
}

const mutations = {
    CALL_MODAL(state, payload) {
        state.name = payload;
    },
}

export default {
    namespaced: true,
    state,
    mutations,
}


