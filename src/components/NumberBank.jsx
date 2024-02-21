import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addNumber } from "../features/sortSlice";


export default function NumberBank() {
    const bank = useSelector(store => store.slice.bank);
    
    return (
        <>
            <h2>Number Bank</h2>
            <output>{bank}</output>
            <button>Sort 1</button>
            <button>Sort All</button>
        </>

    );
}