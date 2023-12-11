# Starting step

1. Pull image from Docker hub.
command: docker pull montheankulk/simple-noteapp
2. Run container.
command: docker run -d --name simple-noteapp -p 3000:3000 montheankulk/simple-noteapp
3. Change MongoDB configuration in .env file.
command: 1. docker exec -it simple-noteapp bin/bash
         2. echo MONGODB_USERNAME = your MongoDB username > .env
            echo MONGODB_PASSWORD = your MongoDB password >> .env
            echo MONGODB_CLUSTER_NAME = your MongoDB cluster name >> .env
         3. exit
