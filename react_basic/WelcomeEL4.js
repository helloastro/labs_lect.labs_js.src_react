/*
function WelcomeMsg(props) {
    return React.createElement('h3', null, `안녕하세요. ${data.name}님`);
}
*/
import WelcomeMsg from './WelcomeMsg.js';

function WelcomeEL4(props) {
    console.log(props);
    return React.createElement('i', { style: { color: 'blue' } }, `모듈: `, WelcomeMsg(props));
}

export default WelcomeEL4;
