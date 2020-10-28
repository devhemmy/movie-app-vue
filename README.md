[The App Is Live Here](https://movie-app-interface.vercel.app/)


# What is this app

this app uses OMDb API that fetches movies data and displays them on the page depending on the movie name you searched associated with the page number with many functionality and different state

## How to run

- cd into the project

- in the root directory run **npm install**

- cd into the client directory and run **npm install**

- go back into the root directory and start the app with **npm start** or **npm run start**

## How to Use the App

just write down the name of the movie you desire and the page number which is set to 1 by default

## My solution

- after building the bare bones of an express app I used react boilerplate so scaffold a lightweight react app and installing Redux and redux-thunk to handle async requests

- the Idea is feeding the data from the form component to redux where it goes through redux-thunk to handle async requests and also change a state variable which represents the state of the request

- through redux-thunk, the request is then handled by the backend where it gets the query data from the URL parameters and uses the external API call to get the movies data which is then sent back as a JSON object to redux-thunk

- then redux-thunk gets the data and parses it into JS object where it is then sent to the reducers along with the app state variables to was sent many times to represent the request state

- once all those data are fed to the redux store the movie component get the data along with the request state and so depending on the app state it represents the data to the user

- caching in the browser is being processed using the local storage API as it is stored with every successful request once it receives the data and also a timer starts where it clears the item added to the local storage after 30 secs

- caching in Nodejs is implemented using the native new Map() API in javascript which is too similar to localStorage API as I make an instance of it and store all successful API calls as keys and values in the Map API and checks whether it was added before so it serves it from the data that was already saved in Node instead of fetched the data again from the external apo

## Things I would do differently

- to make this app production-ready I would go with a React/Typescript Solution where it makes sure that every part of the app can never be handled with empty data or undefined and fully optimized as it catches bugs way ahead of time before it even happens

- to improve the quality and performance of the app I would use React/Nextjs as a server-side rendering solution which greatly improves performance and SEO as such thing is critical for this kind of app

- for this particular task, I wouldn't use Redux or useContext as such task doesn't need such a complicated solution which could have been easily implemented using just react hooks to improve simplicity

- to make sure no bugs happen in the future I would test the app using Jest for unit testing and Integration testing or Cypress for e2e testing solution
