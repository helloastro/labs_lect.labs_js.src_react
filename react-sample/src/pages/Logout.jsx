import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const checkLogout = async (userid, password) => {
    const res = await axios.get('http://localhost:3003/logout', {
        params: { username: userid, password: password },
        withCredentials: true,
    });
    // const res = await axios.get(.....)

    // await 이 끝날때까지 기다린다.
    const data = res.data;
    if (data.code === '200') {
        return true;
    } else {
        return false;
    }
};

function Logout(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <button
                type="button"
                onClick={(e) => {
                    checkLogout().then((result) => {
                        console.log('logout', result);
                        if (result) {
                            dispatch({ type: 'LOGOUT', data: { user_id: null, check: false } });
                            navigate('/Login');
                        }
                    });
                }}
            >
                로그아웃
            </button>
        </div>
    );
}

export default Logout;
