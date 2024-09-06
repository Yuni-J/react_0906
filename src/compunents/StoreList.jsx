import React, { useRef, useState} from 'react';
import Store from './Store';
import CreatStore from './CreatStore';

const StoreList = () => {
    const nextId = useRef(4)

    const [ stores, setStores ] = useState([
        {
            id: 1,
            storename: '월미당',
            menu: '쌀국수',
            active: true
        },
        {
            id: 2,
            storename: '버거킹',
            menu: '햄버거',
            active: false
        },
        {
            id: 3,
            storename: '서브웨이',
            menu: '샌드위치',
            active: false
        }
    ])

    const [ inputs, setInputs ] = useState({
        storename: '',
        menu: ''
    });

    const { storename, menu } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onCreate = ()=>{
        const store = {
            id: nextId.current,
            storename,
            menu
        }

        setStores(stores.concat(store));

        setInputs({
            storename: '',
            menu: ''
        })

        nextId.current += 1;
    };

    const onRemove = (id) => {
        setStores(stores.filter(store => store.id != id));
    }

    const onToggle = (id) => {
        setStores(stores.map(s=>(
            s.id == id ? {...s, active: !s.active} : s
        )))
    }

    return (
        <div className='storeList'>
            <CreatStore storename={storename} menu={menu} onChange={onChange} onCreate={onCreate}/>
            {
                stores.map(s=>(
                    <Store store={s} key={s.id} onRemove={onRemove} onToggle={onToggle}/>

                ))
            }
        </div>
    );
};

export default StoreList;
