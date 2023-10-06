import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"

function ProfileBody(props) {
    return (
        <div>
            <ul css={S.SBodyNav}>
                <li css={S.SBodyNavList}>
                    <svg aria-label="" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                    <div>게시물</div>
                </li>
            </ul>
            <div css={S.SFeedList}>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
                <div css={S.SFeedBox}></div>
            </div>
        </div>
    );
}

export default ProfileBody;