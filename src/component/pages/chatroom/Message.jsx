import React from 'react'
import styled from 'styled-components'
import { GRAY1, YELLOW } from '../../../constants/color'
import { Text, Div } from '../../common/div'

export const Message = styled(Text)`
  padding: 8px 10px;
`;

export const ReceivedMessage = ({ chat }) => {
  return (
    <Div 
      $flex={true} 
      $backgroundColor={YELLOW}
      $padding='8px 10px'
      $alginSelf='flex-start'
      $margin='0 0 10px'
    >
      { chat }
    </Div>
  )
}

export const SentMessage = ({ chat }) => {
  return (
    <Div 
      $flex={true} 
      $backgroundColor={GRAY1}
      $padding='8px 10px'
      $alginSelf='flex-end'
      $margin='0 0 10px'
    >
      { chat }
    </Div>
  )
}