import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext('defaultValue');
function Child() {
    const text = useContext(MyContext);
    return <div>안녕하세요 {text}</div>;
}

function Panrent({ text }) {
    return <Child text={text}></Child>;
}

function GrandPanrent({ text }) {
    return <Panrent text={text}></Panrent>;
}

function ContextSample() {
    return <GrandPanrent text="Good"></GrandPanrent>;
}
export default ContextSample;
