const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');

restaurantApiRequest(' tapioca express', "", "", "Convoy San Diego");
//restaurantByIdApiRequest('WavvLdfdP6g8aZTtbBQHTw');

/***
 * https://developer.edamam.com/edamam-docs-recipe-api
 */
function recipeApiRequest(query) {
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    let apiID = '8f82b31f';
    let apiIdKey = '22c032d075f6f9eea215bacf203e93c4';

    let queryFormatted = query.trim().replace(' ', '+');
    let url = 'https://api.edamam.com/search?q=' + queryFormatted +
        '&app_id=' + apiID + '&app_key=' + apiIdKey;

    console.log(url);

    return fetch(url, {
        method: 'GET',
        headers: headers
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.error(response);
        }
    }).then((response) => {
        console.log(response);
        let recipes = [];
        response['hits'].forEach(function (hit) {
                let recipe = hit['recipe'];
                let r = {
                    label: recipe['label'],
                    image: recipe['image'],
                    source: recipe['source'],
                    sourceLink: recipe['sourceLink'],
                    yield: recipe['yield'],
                    dietLabels: recipe['dietLabels'],
                    healthLabel: recipe['healthLabels'],
                    ingredientLines: recipe['ingredientLines'],
                    calories: recipe['calories'],
                    totalWeight: recipe['totalWeight'],
                    totalTime: recipe['totalTime'],
                    digest: recipe['digest'].map((curr, i, arr) => {
                        let d = {
                            label: curr['label'],
                            total: curr['total'],
                            dailY: curr['daily'],
                            unit: curr['unit']
                        }
                        return d;
                    })
                }
                recipes.push(r);
            }
        )
        console.log(recipes[0]);
        return recipes;
    }).catch((err) => {
        console.error(err);
    })
}

/***
 * https://www.yelp.com/developers/documentation/v3/business_search
 ***/
function restaurantApiRequest(term, latitude, longitude, location) {
    let clientID = 'rII8Y9mwHKyzKVlEWGQ2QA';
    let apiKey = 'wuz14axWIJaDHRSx5gVUlC8KBXn9bVG_vtFOxxYOvuNxUAs7LQ6Mmfco' +
        'Xyl48ynDRjJ3xnNuUM2to6uI617pdPG4AIcJMdBzh9cYF3zGV2Dm9we7zyNYZUH52QvIX3Yx';

    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + apiKey
    }


    let termFormatted, locationFormatted, latitudeFormatted, longitudeFormatted, url;

    termFormatted = term.trim().replace(' ', '+');
    locationFormatted = (location !== "") ? '&location=' + location.trim().replace(' ', '+') : "";
    latitudeFormatted = (latitude !== "") ? '&latitude=' + latitude : "";
    longitudeFormatted = (longitude !== "") ? '&longitude=' + longitude : "";

    url = 'https://api.yelp.com/v3/businesses/search?term=' + termFormatted + longitudeFormatted + latitudeFormatted + locationFormatted;
    console.log(url);

    return fetch(url, {
        method: 'GET',
        headers: headers

    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.error(response);
        }
    }).then((response) => {
        console.log(response);
        return response;
    }).catch((err) => {
        console.error(err);
    })
}

/***
 * https://www.yelp.com/developers/documentation/v3/business
 ***/
function restaurantByIdApiRequest(id) {
    let clientID = 'rII8Y9mwHKyzKVlEWGQ2QA';
    let apiKey = 'wuz14axWIJaDHRSx5gVUlC8KBXn9bVG_vtFOxxYOvuNxUAs7LQ6Mmfco' +
        'Xyl48ynDRjJ3xnNuUM2to6uI617pdPG4AIcJMdBzh9cYF3zGV2Dm9we7zyNYZUH52QvIX3Yx';

    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + apiKey
    }

    let url = 'https://api.yelp.com/v3/businesses/' +id;
    console.log(url);

    return fetch(url, {
        method: 'GET',
        headers: headers

    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.error(response);
        }
    }).then((response) => {
        return {
            id: response['id'],
            alias: response['alias'],
            name: response['name'],
            image_url: response['image_url'],
            is_closed: response['is_closed'],
            url: response['url'],
            display_phone:response['display_phone'],
            categories: response['categories'],
            rating: response['rating'],
            location: response['location']['display_address'],
            coordinates: response['coordinates'],
            hours: response['hours'][0]['open']
        };
    }).catch((err) => {
        console.error(err);
    })
}




