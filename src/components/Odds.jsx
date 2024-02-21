import { useSelector } from "react-redux";

export default function Odds() {
    const odds = useSelector(store=>store.slice.odds);

    return (
        <>
            <h2>Odds</h2>
            <output>{odds}</output>
        </>
    );

}