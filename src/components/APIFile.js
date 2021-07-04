const url = 'http://localhost:8000/';



export const showWalkthroughs = (setWalkthroughs, setError) => {
    fetch(`${url}walkthroughs`)
        .then((res) => res.json())
        .then((data) => console.log(data))
        // .then((data) => setWalkthroughs(data))
        .catch(() => setError(true))
}