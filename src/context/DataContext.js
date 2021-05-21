import React, {createContext,useReducer} from 'react'
import {listReducer} from "../reducer/listReducer"

export const DataContext = createContext()
const initialState = [
    {
        id : 1,
        title : "this is title 1"
    }
]
export const DataProvider = (props) =>{
    const [list,dispatch] = useReducer(listReducer,initialState)
    return (
        <DataContext.Provider value={{list,dispatch}}>
            {props.children}
        </DataContext.Provider>
    )
}