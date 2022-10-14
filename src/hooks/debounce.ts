import {useEffect, useState} from "react";
import {clear} from "@testing-library/user-event/dist/clear";


export function useDebounce(value: string, delay: number = 300): string {
    const [debounced, setDebounce] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounce(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay])
    return debounced
}