// https://api.tvmaze.com/search/shows?q=big%20bang%20theory
// Fetching for an api
fetch('https://api.tvmaze.com/search/shows?q=tulsa%20king')
// Before we can console log or access the response, we need to convert the JSON
.then((response) =>response.json())
// The data returned from the .json will be access in this new .then
.then((data)=> console.log(data))