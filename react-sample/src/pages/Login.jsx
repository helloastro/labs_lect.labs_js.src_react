import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function checkUserService(userid, password) {
    //public에 생성. 일반적으로는 Server API
    return new Promise((resolve, reject) => {
        axios
            //.get('/user.json', { username: userid, password: password }, { withCredentials: true })
            .get('http://localhost:3003/login', {
                params: { username: userid, password: password },
                withCredentials: true,
            })
            .then(function (response) {
                const data = response.data[0];
                if (data.user_id === userid && data.password === password) {
                    resolve(true);
                }
                resolve(false);
            })
            .catch(function (e) {
                console.log(e);
            });
    });
}

const checkUser = async (userid, password) => {
    const res = await axios.get('http://localhost:3003/login', {
        params: { username: userid, password: password },
        withCredentials: true,
    });
    // const res = await axios.get(.....)

    // await 이 끝날때까지 기다린다.
    const data = res.data[0];
    if (data.user_id === userid && data.password === password) {
        return true;
    } else {
        return false;
    }
};

function Login(props) {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <h3>Login</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(id, pwd);
                    checkUser(id, pwd).then((result) => {
                        if (result) {
                            dispatch({ type: 'LOGINSUCCESS', data: { user_id: id, check: true } });
                            navigate('/');
                        } else {
                            alert('아이디 또는 패스워드가 틀렸습니다.');
                            dispatch({ type: 'LOGINFAIL', data: { user_id: null, check: false } });
                        }
                    });
                }}
            >
                id : <input type="text" value={id} onChange={(e) => setId(e.currentTarget.value)} />
                <br />
                pwd : <input type="text" value={pwd} onChange={(e) => setPwd(e.currentTarget.value)} />
                <br />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default Login;
