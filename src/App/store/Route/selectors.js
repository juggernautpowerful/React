 export const isRouteSelector = (state) => {

     if(state.routeReducer.data){
         console.log("data", state.routeReducer.data)
     return state.routeReducer.data.length > 0; }
 return false;};