import React from 'react'
import { InputContainer } from './stylesInput'

export default function Input({value}) {
  return (
    <InputContainer>
     <input disabled value={value} />
    </InputContainer>
  )
}
