FROM golang:alpine
RUN apk update && apk upgrade && apk add --no-cache bash git openssh
RUN go get -u github.com/vugu/vgrun && vgrun -install-tools
COPY server /
COPY cmd/server/ /
CMD ["/server"]