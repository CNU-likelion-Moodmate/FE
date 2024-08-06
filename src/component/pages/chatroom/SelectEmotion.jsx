import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Div } from "../../common/div";
import { EMOTION } from "../../../constants/content"; 
import { GRAY3, GRAY7, GRAY4, YELLOW, BLACK } from "../../../constants/color";
import { ReceivedMessage } from "./Message";
import { useDispatch } from "react-redux";
import { selectEmotion, selectActivity } from "../../../store/slices/emotionSlice";

const Emotion = styled(Div)`
  border: 1px solid ${GRAY3};
  flex-grow: 0;
  cursor: pointer;
  padding: 13px 19px;
  border-radius: 50px;
  background-color: ${props => props.$selected ? YELLOW : 'white'};
`;

const Slider = styled.input`
  width: 80%;
  align-self: flex-start;
  -webkit-appearance: none;
  height: 5px;
  border-radius: 5px;
  background: ${GRAY3};
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  cursor: pointer;
  margin-top: 5px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: ${YELLOW};
    cursor: pointer;
  }
`;

const CompleteButton = styled(Button)`
  align-self: flex-start;
  background-color: ${({$disabled}) => $disabled ? GRAY7 : YELLOW};
  margin-top: 15px;
  color: ${({$disabled}) => $disabled ? GRAY4 : BLACK}
`;

const SelectEmotion = ({ selected }) => {
  const [selectedEmotion, setSelectedEmotion] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(0);
  const dispatch = useDispatch();
  const disable = selectedEmotion.length !== 2;

  const handleSelectEmotion = (emotion) => {
    if (selectedEmotion.length < 2) {
      if (!selectedEmotion.includes(emotion)) {
        setSelectedEmotion([...selectedEmotion, emotion]);
      } else {
        setSelectedEmotion(selectedEmotion.filter((selected) => selected !== emotion));
      }
    } else if (selectedEmotion.length >= 2) {
      setSelectedEmotion(selectedEmotion.filter((selected) => selected !== emotion));
    }
  } 

  // redux에 저장
  const handleSubmit = () => {
    dispatch(selectEmotion(selectedEmotion));
    dispatch(selectActivity(selectedActivity));
    selected({ emotion: selectedEmotion, activity: selectedActivity });
  }

  return (
    <>
      <ReceivedMessage chat='어떤 감정이 널 힘들게 하고 있는지 2가지를 선택해줘' />
      <Div $flex={true} $justify='flex-start' $alginSelf='flex-start' $gap='4px' $wrap={true} $margin='0 0 15px' style={{flexGrow: 0}}>
        {EMOTION.map((emotion, index) => (
          <Emotion 
            key={index} 
            onClick={()=>handleSelectEmotion(emotion)}
            $selected={selectedEmotion.includes(emotion)}
          >
            {emotion}
          </Emotion>
        ))}
      </Div>
      <ReceivedMessage chat='얼마나 활동적인 퀘스트를 추천받고싶어?' />
      <Slider 
        type="range"
        onChange={(e) => setSelectedActivity(e.target.value)}
      />
      <CompleteButton disabled={disable} $disabled={disable} onClick={handleSubmit}>입력 완료</CompleteButton>
    </>
  )
}

export default SelectEmotion;