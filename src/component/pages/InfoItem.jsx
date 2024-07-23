import { InfoText } from "../common/div";
import { InfoArrowIcon } from "../../assets/icons";
import "./InfoItem.css"

const InfoItem = (props) => {
    return (
        <div className="InfoItemContainer">
            <InfoText className="InfoText">{props.text}</InfoText>
            <InfoArrowIcon className="InfoArrowIcon"></InfoArrowIcon>
        </div>
    )
}

export default InfoItem;