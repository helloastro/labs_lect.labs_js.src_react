import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Top(props) {
    const user_info = useSelector((state) => state.loginInfo.user_info);
    return (
        <div className="header">
            <h1 style={{ display: 'inline-block', width: '70%' }}>Header</h1>
            {user_info.check && (
                <div style={{ display: 'inline-block', width: '29%' }}>
                    {user_info.user_id} 님 환영합니다. <Link to="/Logout">로그아웃</Link>
                </div>
            )}
        </div>
    );
}

export default Top;
