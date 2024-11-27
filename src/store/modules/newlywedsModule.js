import marryInfo from "../../api/marryInfo";

const state = {
    all: []
}

const getters = {}

const actions = {
    getNewlywedsInfo({ commit }) {
        marryInfo.getNewlyweds(newlyweds => {
            commit('setNewlyweds', newlyweds);
        });
    }
}


const mutations = {
    setNewlyweds(state, newlyweds) {
        state.all = newlyweds;
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
