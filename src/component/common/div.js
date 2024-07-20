import styled from 'styled-components';

export const Text = styled.div`
  font-family: ${ props => props.$fontFamily || 'Pretendard'};
  font-size: ${ props => props.$fontSize || '14px'};
  font-weight: ${ props => props.$fontWeight || 'normal'};
  color: ${ props => props.$color || 'black'};
  margin: ${ props => props.$margin || '0'};
  padding: ${ props => props.$padding || '0'};
  text-align: ${ props => props.$textAlign || 'center'};
`;

export const Div = styled.div`
  ${ props => props.$flex && 'display: flex;'};
  flex-grow: 1;
  position: relative;
  flex-direction: ${ props => props.$direction || 'row'};
  align-items: ${ props => props.$align || 'center'};
  justify-content: ${ props => props.$justify || 'center'};
  margin: ${ props => props.$margin || '0'};
  padding: ${ props => props.$padding || '0'};
  width: ${ props => props.$width || 'auto'};
  height: ${ props => props.$height || 'auto'};
  border-radius: ${ props => props.$radius || '15px'};
  max-width: ${ props => props.$maxWidth || '480px'};
  ${ props => props.$cursor && 'cursor: pointer;'};
  ${ props => props.$backgroundColor && `background-color: ${props.$backgroundColor};`};
  ${ props => props.$border && `border: ${props.$border};`};
  gap: ${ props => props.$gap || '0'};
`;