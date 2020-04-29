export const isUpdatedCardSelector = (state) => state.cardReducer.isUpdatedCard;

export const cardDataSelector = (state) => state.cardReducer.data;

export const isCardDataSelector = (state) => {

    if(state.cardReducer.data && state.cardReducer.data.cardNumber){
    return state.cardReducer.data.cardNumber.length > 0; }
return false;};

export const errorSelector = (state) => state.cardReducer.error;