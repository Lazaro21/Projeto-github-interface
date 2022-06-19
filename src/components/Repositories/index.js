import React from 'react'
import RepositoryItem from '../Repository-item'
import * as S from "./styled"

const Repositories = () => {
    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName='is-selected'
        >
            <S.WrapperTabList>
                <S.WrapperTab>
                    Repositories
                </S.WrapperTab>
                <S.WrapperTab>
                    Starred
                </S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem name="App ideas"
                    linkToRepo="https://github.com/Lazaro21"
                    fullName="Lazaro21/app-ideas" />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem name="Lazaro21"
                    linkToRepo="https://github.com/Lazaro21/Lazaro21"
                    fullName="Lazaro21/Lazaro21" />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    )
}

export default Repositories
