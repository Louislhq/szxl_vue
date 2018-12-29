const getters = {
    token: state => state.user.token,
    user: state => state.user.user,
    name: state => state.user.name,
    avatar: state => state.user.avatar,
    email: state => state.user.email,
    mobile: state => state.user.mobile
}

export default getters