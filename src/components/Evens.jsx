import { useSelector } from "react-redux";

export default function Evens() {
    
    const evens = useSelector(store=>store.slice.evens);

    return (
        <>
            <h2>Evens</h2>
            <output>{evens}</output>
        </>
    );

}