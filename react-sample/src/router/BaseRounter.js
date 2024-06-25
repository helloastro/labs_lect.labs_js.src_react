import { Routes, Route } from 'react-router-dom';

import Middle from '../pages/Middle';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import MyPage from '../pages/MyPage';
import Memo from '../pages/memo/MemoLogin';
import MemoList from '../pages/memo/MemoList';
import MemoInput from '../pages/memo/MemoInput';
import Page1 from '../pages/Page1';
import Nopage from '../pages/NoPage';

import AdminMiddle from '../pages/admin/Middle';
import Admin from '../pages/admin/Admin';

function BaseRouter() {
    return (
        <Routes>
            <Route element={<Middle />}>
                <Route path="/" element={<Main />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Logout" element={<Logout />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/memo" element={<Memo />}>
                    <Route index element={<MemoList />} />
                    <Route path="/memo/input/:idx?" element={<MemoInput />} />
                </Route>
                <Route path="/page1" element={<Page1 />} />
                <Route path="*" element={<Nopage />} />
            </Route>
            <Route path="/admin" element={<AdminMiddle />}>
                <Route index element={<Admin />} />
            </Route>
        </Routes>
    );
}

export default BaseRouter;
