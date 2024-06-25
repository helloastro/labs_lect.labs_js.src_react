import { Link, Outlet, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const loadMemo = async () => {
    const res = await axios.get('http://localhost:3003/memos', {
        params: {},
        withCredentials: true,
    });

    return res.data;
};

const searchMemo = async (keyword) => {
    const res = await axios.get('http://localhost:3003/memos', {
        params: { keyword: keyword },
        withCredentials: true,
    });

    return res.data;
};

function MemoList(props) {
    const [memos, setMemos] = useState([]);

    useEffect(() => {
        loadMemo().then((result) => {
            setMemos(result);
        });
    }, []);

    const handleSearch = (event) => {
        const keyword = event.currentTarget.value;
        searchMemo(keyword).then((result) => {
            setMemos(result);
        });
    };

    const list = memos.map((memo, key) => (
        <tr key={key}>
            <td key={`{memo.id}{key}`}>{memo.id}</td>
            <td key={`{memo.id}{key}1`}>
                <Link to={`/memo/input/${memo.id}`}>{memo.title}&nbsp;</Link>
            </td>
            <td key={`{memo.id}{key}2`}>{memo.createdAt.substring(0, 10)}</td>
        </tr>
    ));

    return (
        <div>
            <h3>리스트</h3>
            <table style={{ borderCollapse: 'collapse', margin: '0px auto', width: '400px' }} border={1}>
                <thead>
                    <tr>
                        <th style={{ width: '50px' }}>번호</th>
                        <th>제목</th>
                        <th style={{ width: '100px' }}>등록일</th>
                    </tr>
                </thead>
                <tbody>{memos && list}</tbody>
            </table>
            <Link to="/memo/input">
                <button type="button">등록</button>
            </Link>
            <div>
                검색: <input type="text" onKeyUp={handleSearch} />
            </div>
        </div>
    );
}

export default MemoList;
