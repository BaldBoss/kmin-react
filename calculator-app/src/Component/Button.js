import React from 'react'

export default function Button(props){
    const{name, onAdd} = props
    
    return (
        <button onClick={()=>onAdd(props.name)}>{props.name}</button>
        );
}