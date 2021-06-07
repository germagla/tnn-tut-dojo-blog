import {useEffect, useState} from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => fetch(url, {
            signal: abortCont.signal,
            headers: {
                //"Request-mode": "no-cors",
            }
        })
            .then(res => {
                if (!res.ok) throw Error("Problem with the request");
                return res.json()
            })
            .then(data => {
                console.log(data);
                setIsPending(false);
                setData(data);
            })
            .catch(err => {
                if (err.name === "AbortError") console.log("fetch aborted")
                else {
                    setError(err.message);
                    setIsPending(false);
                }

            }), 1000);

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;