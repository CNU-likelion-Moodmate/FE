import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { Div, Text } from "../common/div";
import { CAROUSEL } from "../../constants/content";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/icons";

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
  const data = Object.values(CAROUSEL);

  return(
    <Div $padding='0 28px'>
      <Slider {...settings}>
        {data.map((item, index) => (
          <Div key={index}>
            <img src={item.image} alt='slide' />
            <Text $size='14px' $lineHeight='21px' $weight='LIGHT' $margin='34px 0 0' style={{ whiteSpace: 'pre-wrap' }}>
              {item.content}
            </Text>
          </Div>
          )
        )}
      </Slider>
    </Div>
  )
}

export default Carousel;