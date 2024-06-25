import { Outlet } from 'react-router-dom';

import Menu from './Menu';

function Middle(props) {
    return (
        <div className="middle">
            <Menu />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Middle;
