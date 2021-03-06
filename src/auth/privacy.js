import { API } from "../config";

export const signup = (user) => {

    return fetch(`${API}/register`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(user => {
        return user.json();
    })
    .catch(err => {
        console.log("An error occured while processing your data", err);
    })
}

export const signin = (user) => {

    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(signed => {
        console.log(API);
        return signed.json();
    })
    .catch(err => {
        console.log("An error occured while processing your data", err);
    }) 
}

export const signout = (callback) => {
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt");

        callback();

        return fetch(`${API}/signout`, {
            method: "GET"
        })
        .then(response => {
            console.log("signout", response);
        })
        .catch(err => {
            console.log("An error occured while logging out", err);
        })
    }
}

export const authenticate = (user, callback) => {
    if(typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(user));
        callback();
    }
}

export const isAuthenticated = () => {
    if(typeof window == "undefined"){
        return false;
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"));
    } else {
        return false;
    }
}