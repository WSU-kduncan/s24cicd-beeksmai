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
- Whenever the container restart script is run, it removes the current image of the container from Docker, and automatically downloads the most recent version and runs it.
  - ADD IMAGE
- My container restart script is in the home folder for the default user.
  - It is also in my repository at UPLOAD REDEPLOY.SH
  - ADD IMAGE
 

### Setting up a Webhook
- To install [adnanh's webhook](https://github.com/adnanh/webhook), all you need to do is run `sudo apt-get install webhook`

### Webhook Task Definition File
- The Webhook Task Definition File tells the webhook what it needs do to when it gets a request.
  - In my case, whenever the webhook gets a request, it should automatically run my container restart script
- Where it should be on the instance
  - On my instance, it is in the home directory of the default user.
    - On GitHub, it's located at UPLOAD HOOKS.JSON
  
### How to start the Webhook
- To start the webhook, all you need to do is type this command `sudo /usr/bin/webhook -hooks hooks.json --verbose`
- After starting, the webhook began listening at this url: `http://44.195.160.165:9000/hooks/redeploy-webhook`

### How to modify / create a webhook service file such that your webhook listener is listening as soon as the system is booted
- To modify the webhook.service file, You need to navigate to `/lib/systemd/system`, and then you need to do `sudo vim webhook.service` in order to make changes to the webhook.service file.
  - To make it so my webhook listener is listening as soon as the system is booted, I changed the `ExecStart` line to have the path to my hooks.json file.
  - ADD IMAGE

### configure github or dockerhub to message the listener

### proof of CI/CD workflow


