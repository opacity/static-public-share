FROM golang:1.15

WORKDIR $GOPATH/src/github.com/opacity/static-public-share
COPY . .

RUN go get -d -v ./...
RUN go install -v ./...

EXPOSE 3080 80
ENTRYPOINT static-public-share