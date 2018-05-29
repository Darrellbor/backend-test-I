## Back-end Developer Test

### Devcenter Backend Developer Test I

The purpose of this test is not only to quickly gauge an applicant's abilities with writing codes, but also their approach to development.

Applicants may use whatever language they want to achieve the outcome.

## Task

Build a bot that extracts the following from people’s Twitter bio (on public/open accounts), into a Google spreadsheet:

* Twitter profile name 
* Number of followers

Target accounts using these criteria:
* Based on hashtags used
* Based on number of followers; Between 1,000 - 50,000

The bot is suppose to maintain a session and continously listen to the predefined hashtag

## How to complete the task

1. Fork this repository into your own public repo.

2. Complete the project and commit your work. Make a screencast of how it works with the googlespread sheet and progam side-by-side. Please watch this sample video to see what your screencast should look like https://youtu.be/mwBqUUtBtlE

3. Send the URL of your own repository and the screencast to @kolawole.balogun on the Slack here bit.ly/dcs-slack.

## Development language
* javascript
* node js (version 7.8.0)

## Getting started
* You need to run the following correctly to get started.

## Twitter Account
1. Create a twitter account in case you dont have one at https://twitter.com/signup
2. next you would have to create a application with twitter and to do this go to https://apps.twitter.com
3. fill out the details of the form correctly 
4. Generate the access keys i.e the access token and access token secret
5. Take note of your access keys as well as your consumer key and consumer secret
6. Then click on the create application button 
7. Replace the keys in the .env file

## Google spreadsheet
1. Go to google app console at https://console.developers.google.com
2. Create a new project
3. Click Enable Api, search for and enable the google drive Api
4. Also search for and enable google sheets Api
5. Create credentials for a service account to access Application data
6. Obtain an OAuth2 credentials from the google application console for spreadsheets and drive Apis
7. Save the file as client_secret.json in the root directory of the application
8. start a blank google spreadsheet from  google docs
<small>For more information on creating client_secret.json file visit https://developers.google.com/sheets/api/quickstart/nodejs#step_3_set_up_the_sample</small>

## App setup
1. Make sure you have nodejs installed on your system and if you don't visit https://nodejs.org
2. Open up your terminal for mac and linux users and your command prompt for windows users
3. Navigate to the root of your application
4. run npm install, to install all the dependencies for the project
5. run the program by using node app.js
