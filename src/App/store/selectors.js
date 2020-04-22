export const appSelector = (state)=> state.appReducer;

export const isAuthSelector = (state) => appSelector(state).loginReducer.isAuth;

export const tokenSelector = (state) => appSelector(state).loginReducer.data.token;

export const isCardSelector = (state) => appSelector(state).cardReducer.isCard;