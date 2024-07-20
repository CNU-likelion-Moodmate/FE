import styled from 'styled-components';
import { YELLOW } from '../constants/color';
import { MOBILE_SIZE, FONT_WEIGHT } from '../constants/content';

export const Text = styled.div`
  font-family: ${ props => props.$font || 'Pretendard'};
  font-size: ${ props => props.$size || '14px'};
  font-weight: ${ props => props.$fontWeight || 'normal'};
  color: ${ props => props.$color || 'black'};
  margin: ${ props => props.$margin || '0'};
  padding: ${ props => props.$padding || '0'};
  height: ${ props => props.$height || 'auto'};
  width: ${ props => props.$width || 'auto'};
  text-align: ${ props => props.$align || 'center'};
  line-height: ${ props => props.$lineHeight || '1.5'};
  ${ props => props.$weight && FONT_WEIGHT[props.$weight]};
`;

export const Button = styled.button`
  font-family: ${ props => props.$font || 'Pretendard'};
  border: ${ props => props.$border || 'none'};
  background-color: ${ props => props.$backgroundColor || YELLOW};
  height: ${ props => props.$height || 'auto'};
  width: ${ props => props.$width || 'auto'};
  padding: ${ props => props.$padding || '10px 20px'};
  border-radius: ${ props => props.$radius || '30px'};
  margin: ${ props => props.$margin || '0'};
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
  max-width: ${ props => props.$maxWidth || MOBILE_SIZE};
  ${ props => props.$cursor && 'cursor: pointer;'};
  ${ props => props.$backgroundColor && `background-color: ${props.$backgroundColor};`};
  ${ props => props.$border && `border: ${props.$border};`};
  gap: ${ props => props.$gap || '0'};
`;