FROM golang:alpine
RUN go get -u github.com/vugu/vgrun && vgrun -install-tools
COPY server /
COPY cmd/server/ /
CMD ["/server"]