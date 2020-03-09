import React, {
    useReducer,
    useRef,
    useMemo,
    useCallback,
    useState,
    useEffect,
} from 'react';
import UserList from './UserList.js';
import CreateUser from './createUser.js';
import UseInputs from './useInputs.js';

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중..');
    return users.filter(user => user.active).length;
}

const intialState = {
    nextId: 4,
    users: [
        {
            id: 1,
            username: 'David',
            email: 'david@naver.com',
            active: false,
        },
        {
            id: 2,
            username: 'kavin',
            email: 'kavin@naver.com',
            active: false,
        },
        {
            id: 3,
            username: 'kate',
            email: 'kate@naver.com',
            active: false,
        },
    ],
};
function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_VALUE':
            return {
                inputs: intialState.inputs,
                users: state.users.concat(action.user),
            };
        case 'DELITE_VALUE':
            return {
                inputs: intialState.inputs,
                users: state.users.concat(action.user),
            };
            defalut: throw new Error('unhandled action');
    }
}
function App() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log(value);
    }, []);
    const [state, dispatch] = useReducer(reducer, intialState);



    const { users } = state;
    const [form, onChange, reset] = UseInputs({
        username: '',
        email: '',
    });
    const { username, email } = form;
    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        dispatch({
            type: 'CREATE_VALUE',
            user,
        });
        nextId.current++;
        reset();
    }, [username, email, reset]);

    const onDelite = useCallback(id => {
        dispatch({
            type: 'DELITE_VALUE',
            id,
        });
    }, []);

    return (
        <div>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <br></br>
            <UserList users={users} onDelite={onDelite} />
            <br></br>0
        </div>
    );
}

export default App;
