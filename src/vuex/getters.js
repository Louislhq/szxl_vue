const getters = {
    token: state => state.user.token,
    user: state => state.user.user,
    name: state => state.user.name,
    avatar: state => state.user.avatar,
    email: state => state.user.email,
    mobile: state => state.user.mobile,
    roles: state => state.user.roles,
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters
}

export default getters