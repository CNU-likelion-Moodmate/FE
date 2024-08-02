import styled from 'styled-components';
import { YELLOW } from '../../constants/color';
import { MOBILE_SIZE, FONT_WEIGHT } from '../../constants/content';
import { GRAY1, GRAY6 } from '../../constants/color';

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
  ${ props => props.$background && `background-color: ${props.$background};`};
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
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  border: solid 1px ${GRAY1};
  height: 43px;
  border-radius: 24px;
  padding: 0 19px;
  $:focus {
    outline: none;
  }
`;

export const Div = styled.div`
  ${ props => props.$flex && 'display: flex;'};
  ${ props => props.$wrap && 'flex-wrap: wrap;'};
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
  ${ props => props.$maxHeight && `max-height: ${props.$maxHeight};`};
  ${ props => props.$cursor && 'cursor: pointer;'};
  ${ props => props.$backgroundColor && `background-color: ${props.$backgroundColor};`};
  ${ props => props.$border && `border: ${props.$border};`};
  ${ props => props.$alginSelf && `align-self: ${props.$alginSelf};`};
  gap: ${ props => props.$gap || '0'};
`;

export const ProfileName = styled.div`
  font-family: ${ props => props.$font || 'Pretendard'};
  font-size: ${ props => props.$size || '16px'};
  font-weight: ${ props => props.$weight || '600'};
  color: ${ props => props.$color || 'black'};
  margin: ${ props => props.$margin || '20px 0 0 0'};
  padding: ${ props => props.$padding || '0'};
  height: ${ props => props.$height || 'auto'};
  width: ${ props => props.$width || 'auto'};
  text-align: ${ props => props.$align || 'center'};
`;

export const ProfileId = styled.div`
  font-family: ${ props => props.$font || 'Pretendard'};
  font-size: ${ props => props.$size || '14px'};
  font-weight: ${ props => props.$weight || '300'};
  color: ${ props => props.$color || GRAY6 };
  margin: ${ props => props.$margin || '3px'};
  padding: ${ props => props.$padding || '0'};
  height: ${ props => props.$height || 'auto'};
  width: ${ props => props.$width || 'auto'};
  text-align: ${ props => props.$align || 'center'};
`;

export const Line = styled.div`
  height: ${ props => props.$height || '24px'};
  width: ${ props => props.$width || '100%'};
  background-color: ${ props => props.$color || GRAY1 };
  margin: 50px 0 50px 0;
`;

export const InfoText = styled.div`
  font-family: ${ props => props.$font || 'Pretendard'};
  font-size: ${ props => props.$size || '16px'};
  font-weight: ${ props => props.$fontWeight || '400'};
  color: ${ props => props.$color || "black" };
  height: ${ props => props.$height || 'auto'};
  max-width: ${ props => props.$width || 'auto'};
`;