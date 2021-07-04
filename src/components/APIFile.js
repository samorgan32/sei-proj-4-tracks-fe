const url = 'http://localhost:8000/';

export const signup = () => {

}

export const signin = () => {

}

export const showWalkthroughs = (setWalkthroughs, setError) => {
    fetch(`${url}walkthroughs`)
        .then((res) => res.json())
        .then((data) => console.log(data))
        // .then((data) => setWalkthroughs(data))
        .catch(() => setError(true))
}

export const createWalkthrough = () => {

}

export const deleteWalkthrough = () => {

}

export const addSlide = () => {

}

export const editSlide = () => {

}

export const deleteSlide = () => {

}



