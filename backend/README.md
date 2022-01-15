# Dockerfile Usage

Building the image:
```
docker build -t backend-image .
```

Running the image:
```
docker run -p 3001:3001 -d --name backend-app backend-image
```
