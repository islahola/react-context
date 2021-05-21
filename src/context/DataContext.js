import React, {createContext,useState} from 'react'

export const DataContext = createContext()
const initialState = [
    {
        id : 1,
        title : "this is title 1"
    }
]
export const DataProvider = (props) =>{
    const [list,setList] = useState(initialState)
    return (
        <DataContext.Provider value={{list}}>
            {props.children}
        </DataContext.Provider>
    )
}