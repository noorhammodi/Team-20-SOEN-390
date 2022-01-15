# COVID19-APP Backend API information

## Info 

  PORT = 3001

## Docker

Instructions to run the server using Docker

<details>
  <summary>Using the Docker-Compose files (recommended)</summary>

  In this section, you will find the commands for using the Docker-compose files.

  ### Building the image: 

  Make sure to build when switching from prod to dev.
  
  Just omit the `--build` if you just want to run it
  
  Development image
  ```
  docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
  ```
  Production image
  ```
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
  ```

  ### Take down the container:
  The `-v` flag erases the container storage
  ```
  docker-compose down -v
  ```

  ### Access container terminal:
  First run `docker ps` to view the name of the container
  ```
  docker exec -it <nameofcontainer> /bin/sh
  
  ```
</details>
<details>
  <summary> Using the Dockerfile directly </summary>
  In this section, you will find commands for the Dockerfile.

  ### Building the image:
  ```
  docker build -t backend-image .
  ```

  ### Running a container from image:
  ```
  docker run -v /app/node_modules -v $(pwd):/app -p 3001:3001 -d --name backend-app backend-image
  ```

  ### Killing the container:
  ```
  docker rm backend-app -f
  ```
  Killing the container and prune (`docker volume prune`) associated volumes:
  ```
  docker rm backend-app -fv
  ```


  ### Accessing the container's terminal:
  ```
  docker exec -it backend-app /bin/sh 
  ```

  ### Accessing the container's logs:
  ```
  docker logs backend-app
  ```
</details>