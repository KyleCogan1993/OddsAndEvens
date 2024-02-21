import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addNumber } from "../features/sortSlice";

export default function AddNumber() {
    
    const bank = useSelector(store => store.slice.bank);
    const [inpBank, setInpBank] = useState([]);
    const dispatch = useDispatch();
    
    const onAdd = (e) => {
        e.preventDefault();
        let nums = inpBank.split(" ").map(Number);
        dispatch(addNumber({nums}));
    }
    
    return (
        <>
            <form onSubmit={onAdd}>
                <label>Add a Number to the Bank</label>
                <input type="text" value={inpBank} onChange={e=>setInpBank(e.target.value)}/>
                <button>Add Number</button>
            </form>
        </>
    );
}