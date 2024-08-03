import React, { useState } from 'react';
import { Div, Text, Button } from '../../common/div';
import { WHITE, YELLOW } from '../../../constants/color';
import { recommandQuestApi, SaveQuestApi } from '../../../api/quest';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../component/common/Loading';


const RecommendQuest = () => {
  const { emotion, activity } = useSelector((state) => state.emotion.value);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRecommend = async () => {
    setIsLoading(true);
    try {
      const res = await recommandQuestApi({mood1: emotion[0], mood2: emotion[1], activity: Number(activity)});
      const saveQuest = res.data.recommendedQuest;
      await SaveQuestApi({userId: 'user2@test.com', selectedQuests: saveQuest});
      setIsLoading(false);
      navigate('/quest');
    } catch (error) {
      console.error(error);
    }
  }

  return(
    <Div 
      $flex={true} 
      $backgroundColor={YELLOW}
      $padding='8px 10px'
      $alginSelf='flex-start'
      $margin='0 0 10px'
      $direction='column'
    >
      <Text $align='left' $size='16px'>너에게 작은 행복을 더해줄 수 있는 좋은 퀘스트를 추천해줄게!🍀</Text>
      <Button 
        $font='crayon'
        $backgroundColor={WHITE}
        $width='100%'
        $height='72px'
        $radius='8px'
        $margin='24px 0 0'
        onClick={handleRecommend}
      >
        퀘스트 추천받기🧩
      </Button>
      {isLoading && <Loading />}
    </Div>
  )
}

export default RecommendQuest;