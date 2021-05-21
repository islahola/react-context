import React,{useContext} from 'react'
import {DataContext} from "../context/DataContext"
import {del} from "../action/listAction"
const Todos = () => {
    const {list,dispatch} = useContext(DataContext)
    const remove = id =>{
        dispatch(del(id))
    }
    return (
        <ul>
            {list.map(item=>
                <li key={item.id}>
                    {item.title}
                    <button onClick ={ ()=>remove(item.id)}>X</button>
                </li>
            )}   
        </ul>
    )
}

export default Todos
