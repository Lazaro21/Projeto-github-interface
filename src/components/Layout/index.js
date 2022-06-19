import React from 'react'
import * as S from './styled'

function Layout({children}) {
    return (
        <S.WrapperLayout>
            <header>
                {children}
            </header>
        </S.WrapperLayout>
    )
}

export default Layout
