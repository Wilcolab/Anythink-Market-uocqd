# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## First Setup
1. For setting up oour local environment, 
    we would need Docker to be installed,
    [For windows installation](https://docs.docker.com/desktop/install/windows-install/)
    [For Mac installation](https://docs.docker.com/desktop/install/mac-install/)
    Check out the system-requirements for installing Docker

2. Make sure you have windows 10 or higher installed

3. Make sure you have Hyper-V enabled ( just open Task Manager and click on CPU, in the lower-right corner of the box you may see than virtualization is enabled, for windows this is generally enabled and if you have manually disabled it, revert it back )

4. Make sure you have 64-bit processor and 4GB ram along with BIOS-level hardware

5. Now download and install Docker from the link provided in the URL

6. After the file has been downloaded, click on the file and install Docker

7. Installation process is quite easy, you just have to go through a general installation rules ( click on a couple of buttons )

8. Here after installation, you might be prompted to close to dialog box and log out of your computer, essentially just to restart it, kinda
Do as it is said and you will be fine
After Docker Desktop has been downloaded and installed, open the Command Prompt

9. Type in : docker -v and docker-compose -v ( this commands tell you the version if Docker installed in your system )

10. In your command prompt terminal, navigate to your cloned repository

11. Type in : docker-compose up , ( this will load up the backend and frontend of Anythink )

12. Now docker will take a couple of minutes of load up

13. After it has loaded up, navigate to this website : http://localhost:3000/api/ping to test if the backend is running and it should be able to connect to your database

14. After checking the backend, it is time to check the frontend.

15. Go to this website and create a new user : http://localhost:3001/register You should be able to clear view the webpage and you may create a new user with any username and password
CONGRATS, you have successfully set up you environment

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## How to run locally?
1. [Install Docker](https://docs.docker.com/get-docker/)
2. [Install Docker Compose](https://docs.docker.com/compose/install/)
3. Run `docker-compose up`. 
