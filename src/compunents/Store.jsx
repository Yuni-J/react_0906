import React from 'react';

const Store = ({ store, onRemove, onToggle}) => {
    // const store = props.store

    return (
        <div className='store'>
            <h3>
                <span style={{
                    color: store.active == true ? 'skyblue' : 'black',
                    cursor: 'pointer'
                }}
                onClick={()=>onToggle(store.id)}>{store.storename}</span>
                <span>({store.menu})</span>
                <button onClick={()=> onRemove(store.id)}>X</button>
            </h3>
        </div>
    );
};

export default Store;
