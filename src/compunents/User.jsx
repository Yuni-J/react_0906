import React from 'react';

const User = ({ user, onRemove, onToggle }) => {

    // const user = props.user

    return (
        <div className='user'>
            <h3>
                <span style={{
                    color: user.active == true ? 'green' : 'black',
                    cursor: 'pointer'
                    }} 
                    onClick={()=> onToggle(user.id)}>
                    {user.username}
                </span>
                <span>({user.email})</span>
                {/* function으로 매개변수를 전달 할 경우 */}
                <button onClick={()=>onRemove(user.id)}>X</button>
            </h3>
        </div>
    );
};

export default User;
