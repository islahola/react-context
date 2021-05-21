import React,{useContext,useState} from 'react'
import {DataContext} from "../context/DataContext"
import {add} from "../action/listAction"
const Form = () => {
    const [text,setText] = useState("")
    const {dispatch} = useContext(DataContext)
    const handleChange  = e =>{
        setText(e.target.value)
    }
    const submit = (e)=>{
        e.preventDefault()
        dispatch(add(text))
        setText("")
    }
    return (
        <form onSubmit={submit}>
            <input type="text" placeholder="Enter New List" value={text} onChange={handleChange} />
            <button>add</button>
        </form>
    )
}

export default Form
