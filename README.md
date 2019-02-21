# inTouch Front-End

* [Description](#description)
* [Setup](#Setup)
* [How to use InTouch](#How to use InTouch)
* [User Interactions](#User Interactions)
	* [Registration](#Registration)
  * [Login](#Login)
  * [Home](#Home)
  * [Add New Contact](#Add New Contact)
  * [All Contacts](#All Contacts)
* [Tech Stack](#Tech Stack)
* [Core Contributors](#Core Contributors)
* [How to Contribute](#How to Contribute)

## Description

If you're like most people, it's getting harder and harder to create and nurture deep, meaningful relationships as we transfer our social lives to digital media. If you're like most people, you want to do something about it.

**InTouch** is a minimalist app designed to help you stay connected with people you care about. It's not a social media network or an automated communications system. You don't set it and forget it. It's more like a friend who reminds you to reach out to your loved ones now and then in meaningful ways.

This is the **official Frontend application for InTouch.**

Checkout the InTouch Backend application
* [Deployed API on Heroku](https://in-touch-dev.herokuapp.com/api/v1/data/)
* [Deployed API on AWS](http://intouch-be-dev.us-west-2.elasticbeanstalk.com/api/v1/data/)
* [API Repo](https://github.com/ryan-mcneil/inTouch-BE)

## Setup
1. Clone this repo: `git clone git@github.com:Dhanciles/inTouch-FE.git <name of your choice>`
1. Change into the directory
1. Install Dependencies: `npm install`
1. To see the app in action locally: `npm run dev`
1. To run the test suite: `npm run test`

## How to use InTouch
User can create an account. Once the user is logged in they will be able to store a contacts, specify how frequent they would like to stay in touch with that contact, and choose an prioroty level for that contact. The user will be sent reminders based on the specified frequency. The user is also able to edit the contact and store special occasions along with additional reminder notes for the contact.

## User Interactions

* ### Registration

  ![](images/Screen%20Shot%202019-02-21%20at%2012.35.49%20PM.png)
  
* ### Login

  ![](images/Screen%20Shot%202019-02-21%20at%2012.35.29%20PM.png)
  
* ### Home 

  ![](images/Screen%20Shot%202019-02-21%20at%2012.36.28%20PM.png)
  
* ### Add New Contact

  ![](images/Screen%20Shot%202019-02-21%20at%2012.36.49%20PM.png)
  
* ### All Contacts

  ![](images/Screen%20Shot%202019-02-21%20at%2012.36.10%20PM.png)

## Tech Stack
* [Electron](https://electronjs.org/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* [Jest](https://jestjs.io/)
* [Enzyme](https://airbnb.io/enzyme/)
* [CircleCI](https://circleci.com/)

## Core Contributors
* [Derek](https://github.com/Dhanciles)
* [Rajaa](https://github.com/RajaaBoulassouak)

## How to Contribute
To contribute, see the setup instructions.
* Please describe all changes in the Pull Request (to `Master`)
* Please use the Pull Request Template as the baseline for communication - feel free to add more!
* Please update the `README` if anything is affected.
