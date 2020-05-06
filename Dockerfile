FROM scratch
COPY cmd/server/ /app/
WORKDIR /app/
CMD ["/app/server"]