# Project 3 - E-connect

Author: Chun-Wei Tseng, Kuan-Tsa Chen

Link to Class: https://johnguerra.co/classes/webDevelopment_fall_2022/

Link to Home Page:

Design Document: https://docs.google.com/document/d/1UC7R8Ar2xmEfruLl-PssaVnoV53z7722ZwxZbKujE9c/edit#

Video Demonstration:

A web application allowing users to build professional connections.

### Background

This is a full stack web app utilizing the MERN stack. The backend runs a Express server, which talks to a remote mongoDB Atlas server. The frontend runs a React.js server which communicates with the backend Express server via routes (routes folder) as the entry point. User will be able to create multiple business cards for different occurrence, and choose one to be set as public so that other users can connect to them. They can add others’ business cards too as long as they also set their card to public. They can edit their own cards and manage their card collections.

### User Stories

- Bob is a freelance designer. He designed posters and web page for people. He is constantly looking for potential clients; however, he just graduated from college and doesn’t know that many people in the industry. He is looking for a web platform that allows him to build connections with people from different industries. He found the E-connect web page one day and decide to give it a try.
- Andy is a sales at manufacturing company. He is trying to connect to people from start ups and look for potential customers. When he sent messages to other companies, no one ever respond to his email. Therefore, he started to look for different ways to build professional connections. That’s how he ended up with E-connect. He found it really useful.

### Installation

To **download** the project, simply git clone, or download the .zip file from github.
Once downloaded to your local machine:

To spin up backend/frontend server, go into the backend/frontend folder, and do the following:

1. Download all dependencies:

```
npm install
```

2. Then start server, using:

```
npm start
```

For security purposes, we will not provide mongoDB connection URL, so you will need to either create a local database, or remote one.
The recipes.csv data file will be provided in the repo for you to import to the database.

To import the .csv file into local mongoDB database:

1. Download mongo database tools, with this link [MONGO DATABASE TOOLS](https://www.mongodb.com/try/download/database-tools)
2. Then import csv to database via:

```
mongoimport -d [Database name] -c [Collections name] --type csv --file [locations of csv file] --headerline
```

### Functionality

This website that provides functionality:

- Login/ create account - Users can register and login
- After login, user can create their own business cards, but only one will be able to set as public and allow other users to add it into their collection.
- Users can decide if he/she wants to set his card as public or private. By default, the card will be set to public. If a card is public, all users will ---be able to see the card on the discovery page and add others’ cards into their collection.
- Users can update information on their card.
- Users can delete cards from their collection.

### Deploy Architecture
<<<<<<< HEAD

We used AWS as our cloud service provider, and used EC2 instances as our servers for both backend and frontend. We also set up load balancers for autoscaling, which will spin up more servers if CPU capacity is more than 75%.
For more complete information about the service architecture and instructions, please refer to this [google-doc](https://docs.google.com/document/d/14JMFLfPNHAKBt3-jvD2Vnw_3QoCJuXeDr8CZL8AVm4c/edit?usp=sharing)

### Screen Shots:
=======
We used AWS as our cloud service provider.    


### Screen Shots:   

<img width="1440" alt="Screen Shot 2022-11-22 at 11 11 39 AM" src="https://user-images.githubusercontent.com/63666127/203412584-c0ad9473-e7b2-42eb-91bc-c6fccf424d3d.png">

![Screen Shot 2022-11-28 at 12 40 58 AM](https://user-images.githubusercontent.com/63666127/204233900-91c0f154-e652-4a31-aafa-e77812561431.png)

![Screen Shot 2022-11-28 at 12 41 24 AM](https://user-images.githubusercontent.com/63666127/204234030-03b46957-7198-4d1e-9e7e-07aa40a496a2.png)

![317122557_3272361193015299_187325729753169284_n](https://user-images.githubusercontent.com/63666127/204234069-1e4500f6-67c2-405b-b606-99ff685adf5f.jpg)






>>>>>>> 8b37fcb62aac8ad090b37b6ea1eda0c7f60cb2fb

https://github.com/JasonKTChen/E-connect<img width="1440" alt="Screen Shot 2022-11-22 at 11 11 39 AM" src="https://user-images.githubusercontent.com/63666127/203412584-c0ad9473-e7b2-42eb-91bc-c6fccf424d3d.png">
