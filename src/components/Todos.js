import React,{useContext} from 'react'
import {DataContext} from "../context/DataContext"
const Todos = () => {
    const {list} = useContext(DataContext)
    return (
        <ul>
            {list.map(item=>
                <li key={item.id}>{item.title}</li>
            )}   
        </ul>
    )
}

export default Todos
