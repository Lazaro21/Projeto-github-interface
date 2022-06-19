import React from 'react'
import * as S from './styled'
import api from '../../services/api'

export default function Profile() {
    return (
        <S.Wrapper>

            <S.WrapperImage src="https://avatars.githubusercontent.com/u/7505901?v=4"/>
            <S.WrapperInfoUser>
                <div>
                    <h1>Odeir Lázaro</h1>
                    <S.WrapperUserName>
                        <h3>Username: </h3>
                        <a href="https://github.com/Lazaro21" target="_blank" >Lazaro21</a>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>2</span>
                    </div>
                    <div>
                        <h4>Starred</h4>
                        <span>2</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>7</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>

        </S.Wrapper >
    )
}
