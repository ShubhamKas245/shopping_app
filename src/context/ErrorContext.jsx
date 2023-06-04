import { createContext, useContext, useMemo, useReducer } from "react";
import { ErrorReducer, initErrorState } from "../reducers/ErrorReducer";
import PropTypes from 'prop-types';


export const ErrorContext=createContext();

export const ErrorProvider=({children})=>{

    const [errorState,errorDispatch]=useReducer(ErrorReducer,initErrorState);

    const value=useMemo(()=>({errorState,errorDispatch}),[errorState])
    return (
        <ErrorContext.Provider value={value}>
            {children}
        </ErrorContext.Provider>
    )
}

ErrorProvider.propTypes={
    children:PropTypes.node.isRequired,
}

export const useError=()=>useContext(ErrorContext)