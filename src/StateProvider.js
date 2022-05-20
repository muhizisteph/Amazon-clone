//setup a layer data
//this will track the basket

import React, {createContext, useContext, useReducer} from "react";

//DAta layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({reducer, initialState, children }) => (
   <StateContext.Provider value={useReducer(reducer, initialState )}>
       {children}
       </StateContext.Provider>
);
export const useStateValue = () => useContext (StateContext)