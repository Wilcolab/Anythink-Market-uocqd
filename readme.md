# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_

Steps to follow:
1) You have to install Docker from here https://docs.docker.com/get-docker/
2) Now you can verify the installation of the software by just running these commands in you terminal.
    -docker -v
3) Now go to the root directory of the folder where you have cloned the repo.
4) copy the path of the folder.
5) In terminal, enter "cd + paste the path you have copied".
6) now run docker-compose -v.
7) Now to check is Docker running correctly, and the backend should be running and able to connect to your local database.
    -go to this url "http://localhost:3000/api/ping"
8) Similarly check for front-end part also, go to this URL "http://localhost:3001/register"
    (If everything is working properly, you'll able to create a new user. So create your profile).
9) Congratulations, Now you are done with the setup. ENJOY!