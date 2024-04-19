# Project 5

## Overview
- We are continuing our CI/CD project by implementing semantic versioning for images using `git tag` metadata in Actions, as well as using `webhooks` to keep production up to date.

## Part 1 - Semantic Versioning

### Creating/generating tags
- First, you need to create a tag using the `git tag` command, followed by the tag name. Doing this will create a local tag with the current state of the branch you are on.
- Next, all you need to do is push the tags to the remote repo. The command to do this is: `git push origin` and then your tag name.

### GitHub Workflow
- GitHub Workflows are automated processes that will run one or more jobs. How they are triggered is defined by you in a YAML file. They can be made to trigger in response to something, triggered manually, or on a defined schedule.

### DockerHub Repository
- [My DockerHub Repo](https://hub.docker.com/r/beeksmai/project4/tags)

## Part 2 - Deployment

### How to install Docker on EC2 instance
-Installing Docker on my EC2 instance was a bit more difficult than when I set it up on my personal laptop.
- This is the process that I followed: [Link](https://docs.docker.com/engine/install/ubuntu/)
- After that, I had to ensure that the user on the EC2 instance had permissions to run docker, to do this I had to run the command: `sudo usermod -aG docker ubuntu` and then reboot the instance.

### Container Restart Script
- what it does
- where it should be on the instance

### Setting up a Webhook
- how to install webhook

### Webhook Task Definition File
- What it does
- Where it should be on the instance

### How to start the Webhook

### How to modify / create a webhook service file such that your webhook listener is listening as soon as the system is booted

### configure github or dockerhub to message the listener

### proof of CI/CD workflow


