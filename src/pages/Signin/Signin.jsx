import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { RiKakaoTalkFill } from 'react-icons/ri'

import SigninAndUpLayout from '../../components/Layouts/SigninAndUpLayout/SigninAndUpLayout';
import Top from '../../components/Layouts/SigninAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SigninAndUpLayout/Input/Input';
import Button from '../../components/Layouts/SigninAndUpLayout/Button/Button';
import OrBar from '../../components/Layouts/SigninAndUpLayout/OrBar/OrBar';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../apis/api/account';


function Signin(props) {
    const navigate = useNavigate();

    const emptyAccount = {
        phoneOrEmailOrUsername: "",
        loginPassword: ""
    }

    const [ account, setAccount ] = useState(emptyAccount);
    const [ isAccountValuesEmpty, setIsAccountValuesEmpty ] = useState(true);
    const [ errorMsg, setErrorMsg ] = useState("");

    const changeAccount = (name, value) => {
        setAccount({
            ...account,
            [name]: value
        })
    }

    useEffect(() => {
        // 리스트 변환 후 빈칸 찾기
        setIsAccountValuesEmpty(Object.values(account).includes(""))
    }, [account])

    const handleSiginSubmit = async () => {
        try {
            await signin(account);

        }catch(error) {
            setErrorMsg(error.response.data.errorMessage);
        }
    }

    return (
        <SigninAndUpLayout>
            <Top>
                <div>
                    <Input placeholder={"전화번호, 사용자 이름 또는 이메일"} name={"phoneOrEmailOrUsername"} changeAccount={changeAccount} />
                    <Input type={"password"} placeholder={"비밀번호"} name={"loginPassword"} changeAccount={changeAccount} />
                    <Button text={"로그인"} disabled={isAccountValuesEmpty} onClick={handleSiginSubmit}/>
                    <OrBar />
                    <div css={S.SKakaoBox}>
                        <button css={S.SKakaoButton}>
                            <RiKakaoTalkFill css={S.SKakaoLogo}/>
                            카카오로 로그인
                        </button>
                    </div>
                    <div>
                        {errorMsg}
                    </div>
                </div>
            </Top>
        </SigninAndUpLayout>
    );
}

export default Signin;