import React from 'react'

export default function Button(props){
    const{onAdd} = props
    
    return (
        <button onClick={()=>onAdd(props.name)}>{props.name}</button>
        );
}