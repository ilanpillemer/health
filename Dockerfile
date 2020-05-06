FROM scratch
COPY server /app/
COPY cmd/server/ /app/
WORKDIR /app/
CMD ["/app/server"]