import React,{useContext} from 'react'
import {DataContext} from "../context/DataContext"
const Todos = () => {
    const {list,dispatch} = useContext(DataContext)
    const remove = id =>{
        const action={
            type:"DEL",
            payload : id
        }
        dispatch(action)
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
