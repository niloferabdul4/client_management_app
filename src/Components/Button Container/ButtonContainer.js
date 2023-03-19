import React from 'react'
import { Section,SaveButton,ResetButton } from './buttoncontainerstyles'
import reset from '../../assets/Icon Set.png'

const ButtonContainer = () => {
  return (
    <>
      <Section>
        <SaveButton>Save & Continue</SaveButton>
        <ResetButton>
          <img src={reset}/>
          Reset</ResetButton>
     </Section>
    </>
  )
}

export default ButtonContainer
