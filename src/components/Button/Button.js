import React from 'react'
import { ButtonContainer } from './stylesButton'

export default function Button({ label, onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>

  )
}
