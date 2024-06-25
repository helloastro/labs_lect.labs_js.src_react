import logo from './logo.svg';
import './App.css';
import './Base.css';

import Top from './pages/Top';
import Footer from './pages/Footer';

import BaseRouter from './router/BaseRounter';

function App() {
    return (
        <>
            <Top />
            <BaseRouter />
            <Footer />
        </>
    );
}

export default App;
