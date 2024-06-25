import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const checkUser = async () => {
    const res = await axios.get('http://localhost:3003/mypage', {
        params: {},
        withCredentials: true,
    });

    const data = res.data;
    if (data.code === '200') {
        return true;
    } else {
        return false;
    }
};

// 로그인 체크등 처리
function MemoLogin(props) {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        checkUser().then((result) => {
            setLogin(result);
        });
    }, []);

    return (
        <>
            {login ? (
                <div>
                    <h3>메모장</h3>
                    <hr />
                    <Outlet />
                </div>
            ) : (
                <h3>로그인 필요</h3>
            )}
        </>
    );
}

export default MemoLogin;
