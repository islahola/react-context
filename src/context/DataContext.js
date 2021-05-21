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
    const add = title =>{
        const newItem = {
            id :list.length+1,
            title
        }
        const newList = [...list , newItem]
        setList(newList)
    }
    return (
        <DataContext.Provider value={{list,add}}>
            {props.children}
        </DataContext.Provider>
    )
}