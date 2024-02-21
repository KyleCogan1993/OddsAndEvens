import {useState} from 'react';
import { store } from './store';
import { addNumber, sort1, sortAll } from './sortSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function Sort() {
    const bank = useSelector(store => store.slice.bank);

    const [inpBank, setInpBank] = useState([]);
    const dispatch = useDispatch();

    const onSort = (e) => {
        const action = e.nativeEvent.submitter.name;
        const nums = inpBank.split(" ");

        if(action === "Add Number")
            dispatch(addNumber({nums}));
        if(action === "Sort 1")
            dispatch(sort1({nums}));
        if(action === "Sort All")
            dispatch(sortAll({nums}));
    };
}