import { useState } from "react";

export default function Fizzbuzz(): JSX.Element {
    const [numbersAndFizzBuzz, setNumOrFizzBuzz] = useState<(number|string)[]>([0]);

    const handleFizzbuzzLogic = () => {
        if (numbersAndFizzBuzz.length % 3===0 && numbersAndFizzBuzz.length % 5===0) {
            setNumOrFizzBuzz([...numbersAndFizzBuzz, " Fizzbuzz "]);
        } else if (numbersAndFizzBuzz.length % 3===0) {
            setNumOrFizzBuzz([...numbersAndFizzBuzz, " Fizz "]);
        } else if (numbersAndFizzBuzz.length % 5===0) {
            setNumOrFizzBuzz([...numbersAndFizzBuzz, " Buzz "]);
        } else {
            setNumOrFizzBuzz([...numbersAndFizzBuzz, ` ${numbersAndFizzBuzz.length} `])
        }
    }

    // const handleNextFizzBuzz = () => {
    //     setNumOrFizzBuzz([...numbersAndFizzBuzz, 2]);
    // }
    
    return <>
        <h1>Welcome to Fizzbuzz</h1>
        <h2>{numbersAndFizzBuzz}</h2>
        <button onClick={handleFizzbuzzLogic}>Next</button>
    </>
}