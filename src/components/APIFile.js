const url = 'http://localhost:8000/';

const token = localStorage.getItem('token')

export const signUp = (user, setError) => {
    fetch(`${url}users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch(() => setError(true));
};

export const signIn = (user, setError) => {
    return fetch(`${url}token/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .catch(() => setError(true))
}

export const showWalkthroughs = (setWalkthroughs, setError) => {
    fetch(`${url}walkthroughs`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Token ${token}`
        }

    })
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .then((data) => setWalkthroughs(data))
        .catch(() => setError(true))
}

export const viewWalkthrough = (activeWalkthrough, setView, setError) => {
    fetch(`${url}walkthroughs/${activeWalkthrough}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Token ${token}`
        }

    })
        .then((res) => res.json())
        .then((data) => setView(data))
        .catch(() => setError(true))
}

export const createWalkthrough = (walkthrough, setError) => {
    return fetch(`${url}walkthroughs`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify(walkthrough),
    })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch(() => setError(true))

}

export const deleteWalkthrough = () => {

}

export const addSlide = () => {

}

export const editSlide = () => {

}

export const deleteSlide = () => {

}



