import "./QuestItem.css";
import { Div } from "../common/div";
import { HeartIcon } from "../../assets/icons";

const QuestItem = () => {
    return (
        <div className="QuestItem">
            <div className="Quest">
                <div className="QuestText">신곡 차트에서 내 플레이리스트 만들기</div>
                <HeartIcon className="HeartIcon" />
            </div>
            <div className="QuestDate">{new Date().toLocaleDateString()}</div>
        </div>
    )
}

export default QuestItem;