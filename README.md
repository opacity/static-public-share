# Opacity public share server

Serves an HTML template for publicly shared files

## Docker usage

To build the image locally: `docker build -t static-public-share .`

Run the image using `docker run --publish 3080:3080 --name static-public-share-test --rm static-public-share`

    The --publish flag tells docker to publish the container's port 8080 on the external port 6060.
    The --name flag gives our container a predictable name to make it easier to work with.
    The --rm flag tells docker to remove the container image when the outyet server exits.

## Deploy

Before pushing code to main branch, make sure you run `npm run dist:prod` inside `front` directory

`go build`

`nohup ./static-public-share &`
