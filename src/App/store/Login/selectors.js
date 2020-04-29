export const isAuthSelector = (state) => state.loginReducer.isAuth;
export const tokenSelector = (state) => state.loginReducer.tokenAuth;
export const isLoadingSelector = (state) => state.loginReducer.isLoading;
export const errorSelector = (state) => state.loginReducer.error;