import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const loadMemo = async (idx) => {
    const res = await axios.get(`http://localhost:3003/memos/${idx}`, {
        params: {},
        withCredentials: true,
    });

    return res.data;
};

const insertMemo = async (memo) => {
    console.log(memo);
    const res = await axios.post('http://localhost:3003/memos', memo, {
        withCredentials: true,
    });

    return res.data;
};

const deleteMemo = async (idx) => {
    console.log(idx);
    const res = await axios.delete(`http://localhost:3003/memos/${idx}`, {
        withCredentials: true,
    });

    return res.data;
};

const updateMemo = async (memo) => {
    console.log(memo);
    const res = await axios.put(`http://localhost:3003/memos/${memo.id}`, memo, {
        withCredentials: true,
    });

    return res.data;
};

function MemoInput(props) {
    const params = useParams();
    const idx = params.idx;

    const navigate = useNavigate();
    const [memo, setMemo] = useState({ title: '', content: '' }); // 입력되는 항목만 초기화

    const { id, title, content, createdAt, updatedAt } = memo;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMemo(() => {
            return {
                ...memo,
                [name]: value,
            };
        });
    };

    const handleDelete = (event) => {
        deleteMemo(idx).then((result) => {
            alert(result.message);
            navigate('/memo');
        });
    };

    const handleUpdate = (event) => {
        updateMemo(memo).then(() => {
            alert('수정');
            navigate('/memo');
        });
    };

    useEffect(() => {
        if (idx !== undefined) {
            loadMemo(idx).then((result) => {
                setMemo((prv) => {
                    return { ...prv, ...result };
                });
            });
        }
    }, [idx]);

    return (
        <div>
            <div>
                <h3>내용</h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        insertMemo(memo).then(() => {
                            alert('등록');
                            navigate('/memo');
                        });
                    }}
                >
                    id: {id}
                    <br />
                    title : <input type="text" name="title" value={title} onChange={handleChange} />
                    <br />
                    content : <textarea name="content" value={content} onChange={handleChange} />
                    <br />
                    createdAt: {createdAt}
                    <br />
                    updatedAt: {updatedAt}
                    <br />
                    {idx ? (
                        <button type="button" onClick={handleUpdate}>
                            수정
                        </button>
                    ) : (
                        <button type="submit">등록</button>
                    )}
                    {idx && (
                        <button type="button" onClick={handleDelete}>
                            삭제
                        </button>
                    )}
                    <Link to="/memo">
                        <button type="button">리스트</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default MemoInput;
