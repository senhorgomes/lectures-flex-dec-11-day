Why should we avoid .json files for databases?
Tweeter -> Tweets would be stored in a .json file

```js
tweets: {
    1: {
        id: 1,
        tweet: "Hello",
        user: "Bob"
    },
    2: {
        id: 2,
        tweet: "Good evening!",
        user: "Shrek"
    },
    //....
}
```

File might be too big
Using 'fs' is slow
Structure
Less reusable/shareable
Changing the data structure would be a nightmare
Not modular
Difficult to query
Limited read/write
No central way to access the data

