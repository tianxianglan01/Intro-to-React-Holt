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
- a more easily readable, fun way of writing react which basically looks like HTML
- in previous versions of react, you would need to import react to use JSX but babel (the tool) is smart enough to find JSX so it imports automatically

#### ESLint and React
- to setup ESLint (in your App.js folder, pet is not defined but you are using it), ESLint doesn't get that yet. 
- so type in 

npm install -D eslint-plugin-import@2.22.1 eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.22.0
  
where:
jsx-a11y is import jsx accessibility which helps us enforce "all images have ults, don't make divs clickable"

plugin-jsx: allows it to understand react

#### Hooks
- API for managing state in your react app
- never put hooks in for loops
- we'll add an eslint rule that own't let us put hooks in for loops
- install eslint for react hooks to set up best practices 

npm install -D eslint-plugin-react-hooks@4.2.0

- npm run dev is how you access your react dev server
- ctrl d to select all of the same word (all breed to replace)

#### useEffect & fetching api data
- useEffect allows you to have side effects of your application 
- say in your search param, you want to reach out to your api and fetch list of all dog breeds
- if you want to disable a rule from eslint, hover the error and then type as a comment on the line

// eslint-disable-line 'rule'

#### custom hooks
- 99% you're going to use react hooks, but what if you want to reuse a hook over and over again
- so let's learn to how to create our own hook
- say in our app, everytime we look up an animal (dog) we want to see the list of breeds. But we want to use this function multiple times in our application
- *alt + option + up/down arrow* to move a block of code up or down

#### Handling User INput
- when you submit a form, you have to prevent it from submitting or it'll refresh the page
- e.preventDefault() does the above

#### component composition
- idea is to have one component handle one thing
- want to have a page and then have smaller components do other things
- say you have a pet component, well it's one job is to just be a pet component and nothing else and it becomes reusuable if we have pets in multiple places
- we're going to create an actual results page now

#### refactoring the pet component
- we updated the pet component to make it look better
- react is pretty much pulling props and putting them in proper locations and wrapping them in the proper classes

#### Dev Environment
- when we're writing code, we want our NODE_ENV to be development
- make sure to put it into production when it's production/

#### Strict Mode
- less chill
- enforce stronger errors
- throws opinions at you
- generally good idea
- there are deprecated methods that the React team don't want you to use
- "we're not going to allow you to introduce any of these things": we only want you to work on safe APIs
- it itself doesn't do anything but it offers functionality to its children's components 
- will need to import StrictMOde from react

#### React Dev Tools
- a dom explorer for react
- can inspect elements
- can click into components
- can see render trees
### React Capabilities

#### React Router Route
- we'll be learning react router 5, but 6 is probably already out
- we have a route in App.js: the search params route
- but we want to be able to switch between the 2 pages. A search param page and a details page.
- react router allows the navigation among views of various components in a react application 
- to install type:

npm install react-router-dom@5.2.0

- now we want to condiionally render sometimes search param, and sometimes details 

#### React Router Link Tag
- we go into Pet.js and once we have a react router, we want to switch all a tags to their link tags
- and change the href to "to"
- we do this because if we click that link, it's oging to assume our anchor tag will take us to a whole separate page
- we don't really want that to happen
- we want to catch the navigation so the user doesn't reload the react application and then it doesn't unload react
- react catches the navigation event and it's now a single page activation
- important we use Links instead of <a> to get that behavior
- after you make the header with the link, you have to place it into the router

#### Class Components

#### Class properties
- modify babel configs

npm i -D @babel/plugin-proposal-class-properties@7.13.0 @babel/preset-env@7.13.5 @babel/eslint-parser@7.13.4
  
- instead of using constructors
- "parser": "@babel/eslint-parser": 
tells eslint before you read the cdoe, run it through babel first
- do the above when writing class components

#### Manage state in class component
- if parcel gets in a bad state, do 

rm -rf .cache dist 
- these folders are generated by parcel
- and then rerun server with

npm run dev

#### Interactive Class COmponent
- put in a func called handleindexClick
- pretty much we want to allow a user to clikc on individual pictures (components)
- need to est an event listener and bind to carousel
- if you call outside of a context, it returns undefined
- can do this.handleIndexClic.bind(this)
- can also do it in the constructor
- the best way is through a class property 

### Special Class React Tools

#### Error Boundaries
- a feature only class ocmponent can do
- implement component did catch (useful if you expect errors from within your application)
- "if there's an error somewhere in here, don't crash my app, just catch it"
- aybe put an error boundary at the top
- make a component at the otp level called error boundary 
- useful with apis (incomplete data, 500 error)
- depending on the error, you can have effects like "go here" or do this
- componenDidCatch(error, info): log this to sentry or azure monitor
- so in our example, if th is an error, click this to go back to the homepage
- whatever is passed inside ErrorBoundary is pased into children
- and then at the end export the error boundary
- ErrorBoundary has to exist above an error thrown
- we then have multiple nested higher order components
- we then create a function called DetailsWithRouter which (an errorboundary with details)

#### Redirect on Error
- "show an error message then either click here to go back to the homepage or wait 5 seconds for an automatic redirect"
- uses Redirect form 'react-router-dom'
- create a lifecycle method componentDidUpdate
- if this.state.hasError, then set a timeout
- user hits erro > getderivedstate from props> return has error true > component did catch > call our azure monitor (whatever tracking), cause hasError updated, we call componenet didupdate and that kicks off timer for 5 seconds and then take us back to the homepage
- we'll go to details and create a throw new error
- componentdidupdate cannot be called on the very first time it renders
- don't throw in new errors in hot code paths

#### Context
- head back to hooks 
- context adds indirection: something happened here but it actually occured there
- not somehting you want to use all the time
- say we wanted to implement dark mode on our app and we need to physically move components around for dark mode
- darkmode is a universal global state for your app
- when user logins, you store user information in context because every componenet needs to know something about the user
- only use context when you're in global state and even then not always
import { createContext }from 'react';
- should provide a default value for context
- default value if you give a theme context a default value which you should never do
- we'll use context and hooks together
- by creating an empty function we're doing it for typescript
- the second thing in a hook is always a function
- the second thing in usedstate is always a function
- go to app.js and import ThemeContext from './ThemeContext'
- import {strictMode, useState} from react
- then set a const theme
- usestate gives back theme and set theme
- wrap your app in the themecontext.provider
- our app is wrapped inside a provider, so everything inside of the provider can access the context (dark theme)
- all those ocmponents can see what theme is at the moment
- the converse is passing the same theme to component to component

#### Implement ThemeContext and Q&A
- gonna go into search paramas and be able to change what the theme is
- our theme will be based on button clicks
- we'll use useState, useEffect, and useContext from 'react'
- also import ThemeContext from './ThemeContext' (which we've created)
- under the button, we can set style = { backgroundColor: theme } 
- when you import functions, they'll be whatever form you created: ergo if you created a hook on one file and it's imported on file 2, it'll be a hook as well on file 2
- you can have multiple contexts
- ThemeContexts are hooks and are convenient to use
- now we want ot make both buttons blue at the same itme (where the second button is the individual Luna pet page)
- in our Details.js, we import ThemeContext from './ThemeContext'
- and inside the button 
- functions are components so we have create a new function in our Carousel and take in the theme
- ThemeContext.Consumer
- create a new new function that returns a button that's inside a ThemeContext.COnsumer
- now we want to add a theme selector in our website search bar
- in our SearchParams, we grab setTheme and create another drop down above the utton
- after setting this up, we can change the color of our submit button. After changing the color of our submit button, if we click on 'Luna' (dog pic), her 'Adopt Luna' button changes as well
- this is because her state is in App.js and it lives at the top of the page
- if we go back to our home page after looking at a profile, our filled in search params (dog, city etc) are unfilled because our state dissappears and the app needs to re render

#### Portas, Refs, and Q&A
- modals
- modals are terrible UI experiences
- modals have to be in front of the user
- inside of details, i want to trigger a modal 
- btw the Details page is the page with the details of the pet (description, name, pics) that are picked form the api
- we want ot trigger a modal when we click on 'adopt' on the details page
- where is details? details is inside of div which is inside of app then you go into the details.js. 
- If we try to show modal from details, it'll still be inside the details component
- in other words we want to render something somewhere else in another part of the aplicaiton from within one of the ocmponents
- react then came up with portal
- open up index.html
- above your id="root", inside body, create an div with id = "modal"
- now we can redner outside above route objectively because route is limited to index.html and we can render modal when we want to
- create a new file called modal.js
- import { useEffect, useRef } from 'react';
- const modalRoot = document.getElementByID('modal');
- elref or ref is a container for state tha tyou want to survive past render cycles
- we don't want ot create a new div on every render, we want one div every time
- if elRef hasn't been initialized, we want it to initalize this div and then we want the div to survive past renders unitl we dispose of destroy the modal. until then we just one
- modals aren't cheap?
- some piece of state you want exactly one of, you will use refs
- cause we want it to happen once, we give it an empty aray
- whenever a modal gets created, insert into dom, when done, remove me from dom. This keeps memory leaks at bay
- try not to have multiple modals at the same itme
- not always going to use portals (if portal renders to sidebar, )
- global variables reference the same div
- you want each modal to be totally self contained
- 

#### Implementing Modal
- in our Details.js we import Modal from './Modal'
- in our state, we're going to use Show-MOdal False
- have a toggleModal function
- when user clicks adopt, we wnat to make sure user adopts an animal
- add two methods, first will be called toggle modal ( this.setState showModal )
- toggleModal is the opposite of showMOdal
- add another button for adopt: logic would call the api to let shelter know pet has been adopted
- to our button we'll add an on click that will toggle modal
- under description: if show modal, then render this
- we'll have a button for this.adopt Yes (yes to adoption)
- and to our toggle Modal we'll have a no option
- if showmodal is not true, put ': null'
- if we give react null, don't render anything

### Wrapping Up
- portals are useful for sidebars
- 
