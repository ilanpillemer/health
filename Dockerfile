FROM golang:alpine
COPY server /
COPY cmd/server/ /
CMD ["/server"]