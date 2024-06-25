import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Menu(props) {
    const user_info = useSelector((state) => state.loginInfo.user_info);
    return (
        <div className="menu">
            <ul>
                <li>
                    <Link to="/">메인</Link>
                </li>
                <li>{user_info.check ? <Link to="/Logout">로그아웃</Link> : <Link to="/Login">로그인</Link>}</li>
                <li>
                    <Link to="/mypage">마이페이지</Link>
                </li>
                <li>
                    <Link to="/memo">메모</Link>
                </li>
                <li>
                    <Link to="/page1">메뉴1</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
