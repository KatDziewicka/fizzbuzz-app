import { useState } from "react";

export default function Fizzbuzz(): JSX.Element {
    const [numbersAndFizzBuzz, setNumOrFizzBuzz] = useState([1]);

    const handleNextFizzBuzz = () => {
        setNumOrFizzBuzz([...numbersAndFizzBuzz, 2]);
    }
    
    return <>
        <h1>Welcome to Fizzbuzz</h1>
        <h2>{numbersAndFizzBuzz}</h2>
        <button>Next</button>
    </>
}