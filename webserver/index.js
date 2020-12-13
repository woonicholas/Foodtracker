const express = require('express');
const router = express.Router();

const async = require('async');

const fetch = require('node-fetch');

/***
 * RETURNS ARRAY OF OBJECTS
 *  [
 *     {
        "id": "HHtpR0RslupSQ99GIIwW5A",
        "alias": "marufuku-ramen-sf-san-francisco",
        "name": "Marufuku Ramen SF",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/ouK2VmW0SrI70jsJpTxJhw/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/marufuku-ramen-sf-san-francisco?adjust_creative=rII8Y9mwHKyzKVlEWGQ2QA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=rII8Y9mwHKyzKVlEWGQ2QA",
        "display_phone": "(415) 872-9786",
        "categories": [
                        {
                           "alias": "ramen",
                           "title": "Ramen"
                        }
                      ],
        "rating": 4.5,
        "location": [
                       "1581 Webster St",
                       "Ste 235",
                       "San Francisco, CA 94115"
                    ],
        "coordinates": {
                          latitude": 37.785014,
                          "longitude": -122.431842
                       },
        "hours": [
                    {
                        "is_overnight": false,
                        "start": "1100",
                        "end": "1400",
                        "day": 0
                    },

                ]
        },
 *   ]
 */
router.get('/search/restaurant/:location/:term', function (req, res, next) {
    let location = req.params['location'];
    let term = req.params['term'];
    getRestaurants(term, location).then(restaurants => {
        console.log(restaurants);
        res.json(restaurants);
    })
});

router.get('/search/restaurant-details/:id', function (req, res, next) {
    let id = req.params['id'];
    getRestaurantDetail(id).then(restaurant => {
        res.json(restaurant);
    });
});


router.get('/search/recipe/:query', function (req, res, next) {
    let query = req.params['query'];
    getRecipes(query).then(recipe => {
        res.json(recipe);
    });
});

async function getRestaurants(term, location) {
    let businesses = [];

    let q = async.queue(async (task, callback) => {
        let business = await restaurantByIdApiRequest(task['id']);
        businesses.push(business);
        callback();
    }, 1);

    q.push(await restaurantApiRequest(term, location));

    await q.drain();

    return businesses;
}

async function getRestaurantDetail(id) {
    console.log(id);
    return await restaurantByIdApiRequest(id);
}

async function getRecipes(query) {
    return await recipeApiRequest(query);
}

//https://www.yelp.com/developers/documentation/v3/business_search
function restaurantApiRequest(term, location) {
    let clientID = 'rII8Y9mwHKyzKVlEWGQ2QA';
    let apiKey = '2EtwaW2hnykRITz0ORDZc3XSvJ2l7zWITdyB7ctm0V7wY-wULqbCiDso-1chRYxG_sw7-7EsrVoUBelqrDvaukyPzpVn' +
        'gMRYWiGtYk4j6va7jiMGNQ8Nlyh45EvKX3Yx';

    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + apiKey
    }


    let params = new URLSearchParams();
    params.append('term', term);
    params.append('location', location);

    let url;

    url = 'https://api.yelp.com/v3/businesses/search?' + params;
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
        return response['businesses'];

    }).catch((err) => {
        console.error(err);
    })
}


//https://www.yelp.com/developers/documentation/v3/business
function restaurantByIdApiRequest(id) {
    let clientID = 'rII8Y9mwHKyzKVlEWGQ2QA';
    let apiKey = '2EtwaW2hnykRITz0ORDZc3XSvJ2l7zWITdyB7ctm0V7wY-wULqbCiDso-1chRYxG_sw7-7EsrVoUBelqrDvaukyPzpVn' +
        'gMRYWiGtYk4j6va7jiMGNQ8Nlyh45EvKX3Yx';

    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + apiKey
    }

    let url = 'https://api.yelp.com/v3/businesses/' + id;
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
            display_phone: response['display_phone'],
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


//https://developer.edamam.com/edamam-docs-recipe-api
function recipeApiRequest(query) {
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    let apiID = '8f82b31f';
    let apiIdKey = '22c032d075f6f9eea215bacf203e93c4';

    let params = new URLSearchParams();
    params.append('q', query);
    params.append('app_id', apiID);
    params.append('app_key', apiIdKey);


    let url = 'https://api.edamam.com/search?' + params;

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


module.exports = router;

