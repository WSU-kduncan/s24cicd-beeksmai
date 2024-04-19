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
- (PUT LINK HERE)
