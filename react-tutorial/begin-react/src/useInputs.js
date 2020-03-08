import React, { useState, useReducer, useCallback } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_VALUE':
            return {
                ...state,
                [action.name]: action.value,
            };
        case 'RESET_VALUE':
            return {
                ...state,
                username: '',
                email: '',
            };
            defalut: throw new Error('unhandled action');
    }
}

function useInputs(intialForm) {
    const [form, dispatch] = useReducer(reducer, intialForm);

    const onChange = useCallback(e => {
        const { name, value } = e.target;

        dispatch({
            type: 'CHANGE_VALUE',
            name,
            value,
        });
    });
    const reset = useCallback(e => {
        dispatch({
            type: 'RESET_VALUE',
        });
    });
    // const onChange = useCallback(e => {
    //     const { name, value } = e.target;
    //     setForm(form => ({ ...form, [name]: value }));
    // }, []);
    // const reset = useCallback(
    //     e => {
    //         setForm(intialForm);
    //     },
    //     [intialForm]
    // );

    return [form, onChange, reset];
}

export default useInputs;
