import React,{useContext} from 'react'
import {DataContext} from "../context/DataContext"
const Todos = () => {
    const {list,del} = useContext(DataContext)
    const remove = (id) =>{
        del(id)
    }
    return (
        <ul>
            {list.map(item=>
                <li key={item.id}>
                    {item.title}
                    <button onClick ={()=>remove(item.id)}>X</button>
                </li>
            )}   
        </ul>
    )
}

export default Todos
