import { createContext, useContext, useMemo, useReducer } from "react";
import { LoadingReducer, initLoadingState } from "../reducers/LoadingReducers";
import PropTypes from 'prop-types';

export const LoadingContext=createContext();

export const LoadingProvider=({children})=>{

    const [loading,loadingDispatch]=useReducer(LoadingReducer,initLoadingState);

    const value=useMemo(()=>({loading,loadingDispatch}),[loading])
    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
}
LoadingProvider.propTypes={
    children:PropTypes.node.isRequired,
}

export const useLoading=()=>useContext(LoadingContext)