import { useSelector } from 'react-redux';

function Main(props) {
    const user_info = useSelector((state) => state.loginInfo.user_info);
    console.log(user_info);
    return (
        <>
            <div>Main</div>
            {user_info.check && <div>{user_info.user_id} 님 환영합니다.</div>}
        </>
    );
}

export default Main;
