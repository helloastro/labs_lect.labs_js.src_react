import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Menu from '../Menu';
import LoginCheckService from '../../services/LoginCheckService';

function Admin() {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        LoginCheckService().then((result) => {
            setLogin(result);
        });
    }, []);

    return (
        <div className="middle">
            <Menu />
            <div className="content">{login ? <Outlet /> : <h3>로그인 필요</h3>}</div>
        </div>
    );
}

export default Admin;
