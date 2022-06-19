import React, { useState } from 'react'
import useGitHub from '../../hooks/github-hooks'
import * as S from './styled'

const Header = () => {
  const {getUser} = useGitHub();
  const [usernameForSearch, setUsernameForSearch] = useState(undefined)

  const submitGetUser = () => {
    if(!usernameForSearch) return 
    return getUser(usernameForSearch)
  } 
  return (
    <header>
      <S.Wrapper>
        <input 
        type="text" 
        placeholder='Digite o username para pesquisa...' 
        onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit">
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  )
}

export default Header