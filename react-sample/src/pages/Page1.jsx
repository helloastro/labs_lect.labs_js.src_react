import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Page1(props) {
    const location = useLocation();
    console.log(location);
    const info = location.state;

    return (
        <div>
            <h4>Link State</h4>
            {info && (
                <div>
                    {info.msg}, {info.user_name}
                </div>
            )}
            {/* <Link to={{ pathname: '/page1', state: { msg: '안녕하세요.', user_name: '홍길동' } }}> */}
            {/* Router v6 */}
            <Link to={'/page1'} state={{ msg: '안녕하세요.', user_name: '홍길동' }}>
                <button type="button">Link State</button>
            </Link>
        </div>
    );
}

export default Page1;
