export const IsAddressesSelector = (state) => { 
    console.log ("ST", state);
    if(state.addressesReducer.data && state.addressesReducer.data.addresses)
        return state.addressesReducer.data.addresses.length > 0; 
    return false;};
export const AddressListSelector = (state) =>  state.addressesReducer.data.addresses;