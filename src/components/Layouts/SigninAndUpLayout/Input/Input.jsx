import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { NAME, PASSWORD, PHONE_OR_EMAIL, USERNAME } from "../../../../constants/regex"
import { FaRegCircleXmark, FaRegCircleCheck } from 'react-icons/fa6'

function Input({ type, placeholder, name, changeAccount}) {
    const [ isEmpty, setIsEmpty ] = useState(true);
    const [ inputValue, setInputValue ] = useState("")
    const [ inputState, setInputState ] = useState("")
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        changeAccount(e.target.name, e.target.value)
    }
    // OnBlur = 포커스가 벗어났을때
    const handleInputOnBlur = (e) => {
        const value = e.target.value;
        let regex= null;

        switch(e.target.name) {
            case "phoneOrEmail": regex = PHONE_OR_EMAIL; break;
            case "name": regex = NAME; break;
            case "username": regex = USERNAME; break;
            case "password": regex = PASSWORD; break;
            default: regex = null;
        }

        if(!!regex && !regex.test(value)) {
            setInputState(<><FaRegCircleXmark /></>);
            return;

        }else if(!!regex && regex.test(value)) {
            setInputState(<><FaRegCircleCheck /></>);
            
        }else {
            setInputState("");
            
        }
    }

    const handleInputOnFocus = () => {
        setInputState("");
    }

    useEffect(() => {
        setIsEmpty(!inputValue);
    }, [inputValue])

    return (
        <div css={S.SLayout}>
            <label css={S.SInput(isEmpty)}>
                <input type={type} name={name} 
                    onChange={handleInputChange} 
                    onBlur={handleInputOnBlur}
                    onFocus={handleInputOnFocus}/>
                <span>{placeholder}</span>
            </label>
            <div css={S.SStateBox}>
                {inputState}
            </div>
        </div>
    );
}

Input.defaultProps = {
    type: "text",
    placeholder: "",
    name: ""
}

export default Input;