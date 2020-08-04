# fitness-spa

A single-page-application using a JavaScript frontend and a rails API to manage the backend.

## Features 

* Makes fetch requests to API via AJAX 
* Renders HTML and CSS elements using vanilla JavaScript
* Allows users to view, and add, and deleted workotus and exercises 

## Tech Used 

* Ruby [2.6.1]
* Rails [6.0.2] - generated as an API only
* Postgresql - database
* Rack-cors - allow for cross-orgin resource sharing
* Fast_json_api - serializer to manage seeded data in json format

## To Install
### Backend
* Clone this repo to local machin git clone <this-repo>
* cd into project directory and into project-backend and run bundle install to install dependencies
* Make sure Postgres app is running. To install Postgres app, go here* 
* Run rails db:create to create a database
* Run rails db:migrate to create tables
* Run rails db:seed to generate seed data
* Run rails s to run server
### Frontend
* Open another tab in terminal and cd into project-frontend directory.
* Inside project-frontend directory, type open index.html to open index.html in the browser to begin navigating through this application.
