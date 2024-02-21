import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { sort1, sortAll } from "../features/sortSlice";


export default function NumberBank() {
    const bank = useSelector(store => store.slice.bank);
    const dispatch = useDispatch();

    const onSort = e => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.name;

        if(action === "sort1")
            dispatch(sort1(bank));
        if(action === "sortall")
            dispatch(sortAll(bank));
    }




    
    return (
        <>
            <form onSubmit={onSort}>
                <h2>Number Bank</h2>
                <output>{bank}</output>
                <button name="sort1">Sort 1</button>
                <button name="sortall">Sort All</button>
            </form>
        </>

    );
}