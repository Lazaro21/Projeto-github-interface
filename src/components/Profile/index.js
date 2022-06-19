import React from 'react'
import * as S from './styled'
import useGitHub from '../../hooks/github-hooks'

export default function Profile() {
    const { githubState } = useGitHub()
    // const username = githubState.user.login
    // console.log(username)
    return (
        <S.Wrapper>

            <S.WrapperImage src="https://avatars.githubusercontent.com/u/7505901?v=4" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserName>
                        <h3>Username: </h3>
                        <a
                            href="https://github.com/Lazaro21"
                            target="_blank" >
                            {githubState.user.login}
                        </a>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper >
    )
}
