import React,{ useMemo, useRef, useState } from 'react';
import User from './User';
import CreateUser from './CreateUser';

const UserList = () => {

    const nextId = useRef(6);

    const [ users, setUsers ] = useState([
        {
            id: 1,
            username: 'kim',
            email: '111@naver.com',
            active: true
        },
        {
            id: 2,
            username: 'lee',
            email: '222@naver.com',
            active: false
        },
        {
            id: 3,
            username: 'pack',
            email: '333@naver.com',
            active: false
        },
        {
            id: 4,
            username: 'choi',
            email: '444@naver.com',
            active: false
        },
        {
            id: 5,
            username: 'hong',
            email: '555@naver.com',
            active: false
        }
    ]);

    const [ inputs, setInputs] = useState({
        usetname: '',
        email: ''
    });


    // const username = inputs.username;
    // const email = inputs.email;
    // => 구조 분해 할당 : 객체의 구조를 분해하여 변수에 할당하는 방법
    const { username, email } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        // 변경되지 않는 대상값을 공백처리 => 기존값 유지
        setInputs({
            ...inputs, // 기존 inputs 값을 복사
            [name]: value // 현대 변경된 값을 key: value 형태로 set
        })
        console.log(inputs);
    };

    const onCreate = ()=>{
        // 값이 추가되면...
        // 나중에 여기서 구현.
        // .current : 현재 값
        const user = {
            id: nextId.current,
            username: username,
            email: email
            // 이름이 같아서 한번만 작성해도 가능
            // username,
            // email
        };

        //현재 users에 user 추가 => concat
        setUsers(users.concat(user));

        //기존 inputs 창 초기화
        setInputs({
            username: '',
            email: ''
        })

        nextId.current += 1;  //ref() : 재 랜더링이 일어나지 않음   
        console.log(users);
    }

    const onRemove = (id) => {
        // filter : 배열의 항목을 제거하기 위해서 사용
        // filter 는 조건에 맞는 값만 배열로 리턴
        // user.id가 일치하지 않는 원소만 추출하여 새로운 배열로 리턴
        setUsers(users.filter(user => user.id !== id));
        // 가져온 유저의 아이디가 그 아이디가 같지 않으면 배열로 보냄
    }

    const onToggle = (id) =>{
        // forEach 는 리턴을 주지 않아서 map 사용
        // map : 배열의 처리를 하여 배열로 리턴
        // forEach : 배열의 처리만 하고 리턴하지 않음
        // user.id 가 파라미터의 id와 일치하면 active의 상태를 반전시켜 줌
        setUsers(users.map(u=>
            u.id === id ? {...u, active: !u.active} : u
        ));
    
    }

    //글씨를 클릭하면 그 글씨 색만 변경
    // const onToggle = (id) => {
    //     setUsers(users.map(ut => ({
    //         ...ut, // Spread the rest of the properties
    //         active: ut.id === id // Toggle active state
    //     })));
    // };

    const countActiveUser = (users) => {
        //user.active 가 true 인 사용자들 세어서 리턴
        // setUsers(users.filter(u => u.active == true));
        return users.filter(user => user.active).length;
    };

    const count = useMemo(()=>countActiveUser(users), [users]);

    return (
        <div className='userList'>
            {/* 컴포넌트에서 데이터를 하위 컴포넌트에게 전달하는 방법 = props */}
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
            {
                users.map(u=>(
                    <User user={u} key={u.id} onRemove={onRemove} onToggle={onToggle}/>
                ))
            }
            {/* array 랜더링 시 key의 존재 유무에 따라 
                업데이트, 삭제, 추가 시 효율적으로 랜더링 됨.
            {
                users.map((u,i)=>{
                    <User user={u} key={i}/>
                })
            } */}
            <div>완료 사용자수 : {count}</div>
        </div>
    );
};

export default UserList;

