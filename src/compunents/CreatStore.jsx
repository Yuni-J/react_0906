import React from 'react';

const CreatStore = (props) => {
    const { storename, menu, onChange, onCreate} = props;

    return (
        <div className='createstore'>
            <input 
            type="text"
            name='storename'
            placeholder='가게 이름'
            onChange={onChange}
            value={storename}
            />
            <input 
            type="text" 
            name='menu'
            placeholder='메뉴'
            onChange={onChange}
            value={menu}
            />
            <button onClick={onCreate}>list 추가</button>
        </div>
    );
};

export default CreatStore;
