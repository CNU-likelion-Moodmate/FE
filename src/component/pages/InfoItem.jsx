import { Link } from "react-router-dom";
import { InfoText } from "../common/div";
import { InfoArrowIcon } from "../../assets/icons";
import "./InfoItem.css"
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/userSlice";

const InfoItem = ({ text }) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        if (text === '로그아웃') {
            dispatch(logout());
        }
    }

    return (
        <div className="InfoItemContainer" onClick={handleLogout} style={{ cursor: 'pointer'}}>
            <InfoText className="InfoText">{text}</InfoText>
            <InfoArrowIcon className="InfoArrowIcon"></InfoArrowIcon>
        </div>
    )
}

export default InfoItem;