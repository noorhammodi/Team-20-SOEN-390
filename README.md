# SOEN-390
COVID App for SOEN-390

## Installation

You will need to install `docker` and `docker-compose`

Build the development environment with this command. It works on this directory and on `./backend/` and `./frontend/` if you wanted to run them individually.
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
```

Build the production environment with this command.
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```

Stop the environment with:
```
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
or
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down
```

<details>
  <summary>Extra helpful commands</summary>
  
  Double check that containers are running (`-al` flag can be useful)
  
  ```
  docker ps
  ```

  Enter a container's terminal
  ```
  docker exec -it <container_name> /bin/sh
  ```

  Image pruning
  ```
  docker image prune
  ```

  Volume pruning
  ```
  docker volume prune
  ```
</details>

Then from there you can access

Frontend
```
localhost:3000
```
Backend
```
localhost:3001
```


