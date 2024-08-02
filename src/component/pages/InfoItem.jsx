import { Link } from "react-router-dom";
import { InfoText } from "../common/div";
import { InfoArrowIcon } from "../../assets/icons";
import "./InfoItem.css"

const InfoItem = (props) => {
    return (
        <div className="InfoItemContainer">
            <InfoText className="InfoText">{props.text}</InfoText>
            <Link to={props.to}>
            <InfoArrowIcon className="InfoArrowIcon"></InfoArrowIcon>
            </Link>
        </div>
    )
}

export default InfoItem;