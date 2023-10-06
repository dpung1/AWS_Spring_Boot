import { css } from "@emotion/react";

export const SHeaderContainer = css`
    display: flex;
    margin-bottom: 44px;
    width: 100%;
`;

export const SProfileImgOutBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 16px;
    margin-right: 46px;
    border: 2px solid #dbdbdb;
    border-radius: 50%;
    width: 166px;
    height: 166px;
`;

export const SProfileImgInBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

export const SuserInfoTop = css`
    display: flex;
    align-items: center;
    
    & > * {
        margin-right: 10px;

        font-size: 20px;
    }

    & > button {
        border: none;
        border-radius: 8px;
        padding: 0px 16px;
        height: 32px;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
    }
`;

export const SSvgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
`

export const SUserInfoMid = css`
    display: flex;
    
    margin: 20px 0px;

    & > div > span {
        margin-right: 40px;
        margin-left: 5px;
        font-weight: 600;
    }
`;

export const SUserInfoBottom = css`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
`;