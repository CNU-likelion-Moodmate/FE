import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { Div, Text, Button } from "../common/div";
import { CAROUSEL } from "../../constants/content";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons";

const ChatButton = styled(Button)`
  font-family: crayon;
  padding: 13px 20px;
  margin-top: 24px;
  left: 50%;
  transform: translateX(-50%);
`;

const Container = styled(Div)`
  padding: 0 28px 30px 28px;
  overflow-y: auto;
`;

const settings = {
  dots: false,
  speed: 1000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <ArrowRightIcon />,
  prevArrow: <ArrowLeftIcon />,
};

const Carousel = () => {
  const navigation = useNavigate();
  const data = Object.values(CAROUSEL);

  const handleGoChatroom = ( type ) => {
    navigation('/chat', { 
      state: { type }, 
    });
  };

  return(
    <Container $padding='0 28px'>
      <Slider {...settings}>
        {data.map((item, index) => (
          <Div key={index}>
            <img src={item.image} alt='slide' />
            <Text $size='14px' $lineHeight='21px' $weight='LIGHT' $margin='34px 0 0' style={{ whiteSpace: 'pre-wrap' }}>
              {item.content}
            </Text>
            <ChatButton onClick={() => handleGoChatroom(item.type)} >
              곰곰이와 대화 시작하기
            </ChatButton>
          </Div>
          )
        )}
      </Slider>
    </Container>
  )
}

export default Carousel;