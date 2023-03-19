import React from 'react'
import * as S from './styles'

type ExempleTypes = {
  pascalCase: string
}

const Exemple = ({ pascalCase }: ExempleTypes) => {
  return (
    <S.Wrapper data-testid='exemple'>Exemple component {pascalCase}</S.Wrapper>
  )
}

export default Exemple
