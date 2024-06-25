import React, { useState, useEffect } from 'react';

/*
useEffect는 기본적으로 componentDidMount(), componentDidUpdate(), componentWillUnmount(), getDerivedStateFromProps()의 역할을 모두 한다.
*/
function FnLifeCycle() {
    const [count, setCount] = useState('0');

    useEffect(() =>
        console.log('componentDidMount(),componentDidUpdate(),componentWillUnmount(),getDerivedStateFromProps()'),
    );

    useEffect(() => console.log('componentDidMount()'), []);

    useEffect(() => console.log('componentDidUpdate(), getDerivedStateFromProps()'), [count]);

    useEffect(() => {
        return () => () => console.log('componentWillUnmount(), clean up');
    });

    return (
        <>
            <h3>{count}</h3>
            <button onClick={() => setCount(Number(count) + 1)}>증가(Fn)</button>
        </>
    );
}

export default FnLifeCycle;
