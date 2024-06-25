import React, { Component } from 'react';

/*
마운트
- constructor
- getDerivedStateFromProps
- render
- componentDidMount

업데이트
- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate
- componentDidUpdate

*/
class LifeCycleSample extends Component {
    state = {
        count: 0,
    };

    // 컴포넌트의 생성자 메서드입니다.
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // props 로 받아온 것을 state 에 넣어주고 싶을 때 사용합니다.
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    // 컴포넌트의 첫번째 렌더링이 마치고 나면 호출되는 메서드입니다.
    componentDidMount() {
        console.log('componentDidMount');
    }

    // 컴포넌트가 리렌더링 할지 말지를 결정하는 메서드
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    // 컴포넌트가 DOM에서 제거되기 전에 호출된다.
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // 컴포넌트에 변화가 일어나기 직전의 DOM 상태를 가져와서 특정 값을 반환하면 그 다음 발생하게 되는 componentDidUpdate 함수에서 받아와서 사용을 할 수 있습니다.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    // 리렌더링이 마치고, 화면에 우리가 원하는 변화가 모두 반영되고 난 뒤 호출되는 메서드입니다.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    // 컴포넌트를 렌더링하는 메서드
    render() {
        console.log('render');
        return (
            <>
                <h3>{this.state.count}</h3>
                <button
                    onClick={() =>
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }
                >
                    증가(Class)
                </button>
            </>
        );
    }
}

export default LifeCycleSample;
