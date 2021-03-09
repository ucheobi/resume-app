import { API } from '../config';


export const read = resumeId => {
    return fetch(`${API}/resume/${resumeId}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);     
    })
}

export const printResume = data => {
    return fetch(`${API}/resume/pdf`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);     
    })
}