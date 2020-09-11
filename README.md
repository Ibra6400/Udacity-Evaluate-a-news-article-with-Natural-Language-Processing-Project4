# Udacity: Evaluate a news article with Natural Language Processing

This app allow allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites by using meaningCloud API to get the information. This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.


## Getting started

Fork, clone, or download this repo and begin your project setup.

After you clone, you have to install packages to run the app:

**Step 1: Signup for an API key**
You will need to go [here](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/examples)  to get meaningCloudcredentials Key and to create file name .env in the root of the project and type the API key like this:
API_ID=**************************

**Step 2:  Install the Packages**


- cd into your new folder and run in prod mode
- npm install

**Step 2:  Run the Project**
to run the project there are two modes development mode and production mode. to test the functions of the project there is test mode. the steps below shows how to run each mode. using production mode to load the the project style 

**development mode**

To run the webpack dev server at port 8080
- npm run build-dev

**production mode**
- npm run build-prod to generate a dist folder for prod
- npm run start to run the server on port 8094

**test mode**

-npm run test

## Dependencies

- HTML
- CSS
- Sass
- JavaScript
- Webpack
- Express
- Babel
