import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"

function ModalHeader({ title, leftButton, rightButton }) {
    
    return (
        <div css={S.SLayout}>
            {leftButton}
            <h1 css={S.STitle}>{title}</h1>
            {rightButton}
            
        </div>
    );
}

export default ModalHeader;