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

export default checkUser;
