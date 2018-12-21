export const setUser = ({commit},user) => {
    commit('userStatus', user)
}
export const setToken = ({commit}, token) => {
    commit('tokenStatus', token)
}