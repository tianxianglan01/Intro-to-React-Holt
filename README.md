# Intro-to-React-Holt

#### What is React? 
- It's an toolset that lets you create UIs.
- a react application is a component made up of other and so on and so forth
- MVC stands for model view controller
- so with React, it's easier to find out where your bugs are
- 
#### Your First Vanilla React COmponnet
- app is a react ocmponent and it's the most basic building block in react to create reusable componenets. 
- app is a rubber stamp where you can stamp it down and down again (like a function)
- instance is the individual stamp of the rubber stamp 
- document.getElementByID('root') is telling it where to put it 
- things you 'created' are capitalized, lower cased items are considered not created

#### Setting up a React Project
- in your project directory (outside of src), type: npm init -y: this will create a package.json outside of your src folder
- in your project directory, type: npm install -d prettier to install prettier: a npm package which takes care of formatting and 
- you need to setup the configuration file for prettier so in your project directory, create '.prettierrc'. This is where you set up what you'd like in prettier: spaces, tabs, etc. To set up default configs, place a '{}' (no quotes) inside .prettierrc
- next inside package.json, delete the test script (under scripts) and put int 


"format": "prettier --write \"src/**/*.{js, jsx}\""
 
 which says every file in this directory will have prettier write to it

 - ESLint: allow syou to have opinion in enforcing code like: we don't use arrow functions or we only use single quotes
 - to install, in your project dir, type 
 
 npm install -D eslint@7.18.0 eslint-config-prettier@8.1.0

 - there are many different kinds of configs such as the Airbnb config, etc but we'll be using the standard eslint config
 - then create a file called .eslintrc.json and place into it

 {
    "extends": [
        "eslint:recommended", "prettier"
    ]
}

This turns on whitespace rules, and turn off those rules? Prettier doesn't add rules or turn on any features , it just turns off features it checks for 
- input settings (found in eslintrc.json)
- now go to package.json and add another script underneath format

"lint": "eslint \"src/**/*.{js,jsx}\" --quiet

- where quiet only tells us if something's wrong 
- check if it's working with

npm run lint

and there should be a bunch of errors.
- put a /* global React ReactDOM*/ at the top of App.js
- add a .gitignore to your project dir and add node_modules/ to it
- Parcel: 0 configuration (this uses typescript, css etc ). in your Project dir, type in

npm install -D parcel@1.12.3

- then under scripts place anew command called "dev" 
- delete script tags in index.html cause we're going to bundle react into our package
- then do

npm install react@17.0.1 react-dom@17.0.1

- then in your App.JS, import React from "react" and import ReactDOM from "react-dom"
- then do "npm run lint" (make sure everythings installed correctly)
- and then "npm run dev" to start a local server

##### Babel
- a transpiler: it takes code looking one way and makes it look another way 
- it allows us to have the latest version of JSX
- terminate your parcel server and type in:

npm install -D @babel/core@7.12.16 @babel/preset-react@7.12.13

- so everyitme parcel runs, itll be using the .babelrc configuration for our presets for react
- setup browserslist in your package.json. Right before your last curly brace, type in: "browserslist"

#### Rewriting Pet using JSX