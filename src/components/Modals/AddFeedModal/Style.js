import { css } from "@emotion/react";

export const SSelectFeedImgContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 24px;
    width: 396px;
    height: 396px;
`;

export const SFeedImgContainerText = css`
    margin-top: 16px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
`;

export const SFeedImgContainerButton = css`
    margin-top: 24px;
    border: none;
    border-radius: 8px;
    padding: 7px 16px;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: white;
    background-color: #0095f6;

`;

export const SFileInput = css`
    display: none;
`;

export const SReviewContainer = css`
    width: 396px;
    height: 396px;
`;

export const SImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 396px;
    height: 396px;

    & > img {
        height: 100%;

    }
`;

export const SFeedDetaileContainer = (isShow) => css`
    transition: all 1s ease;

    border-left: 1px solid #dbdbdb;
    width: ${isShow ? "340" : "0"}px;
    opacity: ${isShow ? "1" : "0"};
    height: 396px;
    overflow: hidden;
`;

export const SProfileContainer = css`
    display: flex;
    align-items: center;

    padding: 0px 16px;
    width: 100%;
    height: 60px;
`;

export const SProfileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 12px;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

export const SFeedContent = css`
    padding: 0px 16px;
    border: none;
    outline: none;
    width: 100%;
    height: 300px;
    resize: none;
    overflow-y: auto;

    font-size: 16px;
    line-height: 24px;


`;

