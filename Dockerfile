FROM scratch
COPY server /
COPY cmd/server/ /
WORKDIR /
CMD ["/server"]