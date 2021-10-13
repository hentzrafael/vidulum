import React from "react";

function Input(props){
    return(
        <div>
            <input type={props.inputType} name={props.id} id={props.id} required={props.required ? true : false}/>           
        </div>
    )
}

function Textarea(props){
    return(
        <div>
            <textarea name={props.id} id={props.id} required={props.required ? true : false}/>
        </div>
    )
    
} 


export default function FormSection(props){

    return (
        <div className="form-section">
            <label for={props.id}>
                        {props.label}:
                        {props.tag=="input" || undefined ? <Input /> : <Textarea />
    }
                    </label>
        </div>
            )
}