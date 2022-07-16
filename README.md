[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)


[![madewithreact](https://img.shields.io/badge/madewith-react-green.svg)](https://reactjs.org/) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Golden Line Courses

Golden Line Courses is an online e-commerce website for selling courses online , with the ablity to review customers reviews choose the
best course that fit your needs and improve your skills



![N|Solid](https://i.ibb.co/j8LWM8S/2022-07-16-214847.png)


### Viewing Categories

![N|Solid](https://i.ibb.co/pZPqXd8/2022-07-16-214912.png)


## Prerequisites

You need to have [Node.js](https://nodejs.org/) installed on your computer to run this app locally.

## Getting Started

### Clone This Repository

```
git clone https://github.com/NotSyrRegDev/GoldenLine-Courses.git
```

### Install Required Packages

```
npm install 
```

### Open [Firebase Console](https://console.firebase.google.com/) and create new project with the following

- Enable Authentication Phone Provider
- Enable firestore and create the collections { categories , products , rating , users } 

### Add The Necessary Enviroment Variables To Use Firebase

```
REACT_APP_FIREBASE_API_KEY = 'your_firebase_api_key'
REACT_APP_FIREBASE_AUTH_DOMAIN = 'your_firebase_auth_domain'
REACT_APP_FIREBASE_PROJECT_ID = 'your_firebase_proejct_id'
REACT_APP_FIREBASE_STOARGE_BUCKET = 'your_firebase_stoarge_bucket'
REACT_APP_FIREBASE_MESSAGE_SENDER_ID = 'your_firebase_message_sender_id'
REACT_APP_FIREBASE_APP_ID = 'your_firebase_app_id'
REACT_APP_FIREBASE_MEASURE_ID = 'your_firebase_measure_id'
```

### Run The Application

```sh
# run the application
~/ npm start

```

## How It Works 
- Using [Firebase](https://console.firebase.google.com/) for data stoarge and phone authentication
- [React Router DOM Package Version 5](https://v5.reactrouter.com/web/guides/quick-start)
- [Axios](https://www.npmjs.com/package/axios) for sending api requests
- [React Slick](https://react-slick.neostack.com/) for sliding



