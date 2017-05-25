/*
This is a simple Web API setup which returns users
 */

/* eslint-disable no-console */

import 'whatwg-fetch'; //Using fetch to get data from API
import getBaseUrl from './baseUrl'; //Get URL

const baseUrl = getBaseUrl();

export function getUsers() {
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`)
}

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });

    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}


function onError(error) {
    console.log(error);
}