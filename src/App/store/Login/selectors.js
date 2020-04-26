export const isAuthSelector = (state) => state.loginReducer.isAuth;
export const tokenSelector = (state) => state.loginReducer.tokenAuth;
//export const tokenSelector = (state) => state.loginReducer.data.token;