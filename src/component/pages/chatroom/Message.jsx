import React from 'react'
import styled from 'styled-components'
import { GRAY1, YELLOW } from '../../../constants/color'
import { Text, Div } from '../../common/div'

export const Message = styled(Text)`
  padding: 8px 10px;
`;

const MessageContainer = styled(Div)`
  display: flex;
  flex-grow: 0;
  margin: 0 0 10px;
  padding: 8px 10px;
`;

export const ReceivedMessage = ({ chat }) => {
  return (
    <MessageContainer $backgroundColor={YELLOW} $alginSelf='flex-start' >
      { chat }
    </MessageContainer>
  )
}

export const SentMessage = ({ chat }) => {
  return (
    <MessageContainer $backgroundColor={GRAY1} $alginSelf='flex-end' >
      { chat }
    </MessageContainer>
  )
}