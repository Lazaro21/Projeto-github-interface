import React from 'react'
import Header from '../Header'
import useGitHub from '../../hooks/github-hooks'
import * as S from './styled'

function Layout({ children }) {
    
    return (
        <S.WrapperLayout>
            <Header />      
            { children }      
        </S.WrapperLayout>
    )
}

export default Layout
