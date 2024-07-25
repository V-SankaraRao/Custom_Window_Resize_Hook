import { useEffect, useState } from "react";

export default function useWindowResize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);



    }, []);
    return size;
}
