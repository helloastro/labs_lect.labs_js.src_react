import axios from 'axios';
import { useState, useEffect } from 'react';

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

function MyPage(props) {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        checkUser().then((result) => {
            setLogin(result);
        });
    }, []);
    return <div>{login ? <h3>My Page</h3> : <h3>로그인 필요</h3>}</div>;
}

export default MyPage;
