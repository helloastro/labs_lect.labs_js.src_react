import { Outlet } from 'react-router-dom';

// 로그인 체크등 처리
function Memo(props) {
    return (
        <div>
            <h3>메모장</h3>
            <hr />
            <Outlet />
        </div>
    );
}

export default Memo;
