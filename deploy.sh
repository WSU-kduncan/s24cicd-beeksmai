#!/bin/bash

# Variables
IMAGE_NAME="beeksmai/project4"
CONTAINER_NAME="mywebsite"

#Pull the latest image from DockerHub
docker pull $IMAGE_NAME

#Stop running container
docker stop $CONTAINER_NAME

#remove the existing container
docker rm $CONTAINER_NAME

#Run a new container using the latest image
docker run -d -p 8080:80 --name $CONTAINER_NAME $IMAGE_NAME