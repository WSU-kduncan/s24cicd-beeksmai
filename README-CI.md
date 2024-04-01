# Project 4
## Project Overview
- In this project I am learning how to containerize applications using Docker, as well as automating the project pipeline.
## Run Project Locally
### How to install Docker
- I decided to run Docker from my own WSL2 instance, as it's easier for me that way (no timer, unlike EC2)
- First I had WSL2 installed from when I first started this class, to do that you must download it from the Microsoft Store on a Windows PC.
- Next I had to install Docker onto my system. I decided to install the Docker desktop app, as I heard it makes it easier to use Docker in WSL2 compared to just installing it in WSL2 without the desktop app.
- After that, all I needed to do was restart my computer and everything was set up.
### How to build and image from a Dockerfile
- A Dockerfile is kind of similar to a .yml file for CloudFormation on AWS. It is a text file that contains 'instructions' to Docker on how a container should be built.
- Since I was already on my local system, I could just move over the files I wanted to use for my website into the WSL2 home directory, and then create a Dockerfile in that file.
- My Dockerfile (located at `s24cicd-beeksmai/website/Dockerfile`) was pretty simple, use the latest nginx build to run the server, copy my website files into the nginx directory in the Docker container, and then lists the port to open when the container is to be run.
- After my Dockerfile was created, I could run `docker build -t mywebsite .` which built a container named 'mywebsite' from the files in the current directory.
### How to run the container
- To run the container I just created, all I had to do is run the command: `docker run -d -p 8080:80 --name mywebsite_container mywebsite`. -d runs the container in detached mode, -p 8080:80 maps port 8080 on my machine to port 80 in the container, and --name mywebsite_container names the container.
### How to view the project running in the container
- After the container is run, to view it all you need to do is open any browser and type `http://localhost:8080`, and your webpage should load up.
