FROM scratch
COPY cmd/site/ /site/
WORKDIR /site/
CMD ["/site/server"]