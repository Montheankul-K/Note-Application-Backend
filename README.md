# Starting step

## Step 1. Pull image from Docker hub

command:
docker pull montheankulk/simple-noteapp

## Step 2. Run container

command:
docker run -d --name simple-noteapp -p 3000:3000 montheankulk/simple-noteapp

## Step 3. Change MongoDB configuration in .env file

### Step 3.1 Get into container

command:
docker exec -it simple-noteapp bin/bash

### Step 3.2 Change config in .env file

command:

1. echo MONGODB_USERNAME = your MongoDB username > .env

2. echo MONGODB_PASSWORD = your MongoDB password >> .env

3. echo MONGODB_CLUSTER_NAME = your MongoDB cluster name >> .env

### Step 3.3 Exit container

command:
exit
or you can Ctrl + d to exit container.
