// +build !wasm

package main

import (
	"flag"
	"log"
	"net/http"

	"github.com/vugu/vugu/devutil"
)

func main() {

	dir := flag.String("dir", ".", "Project directory")
	httpl := flag.String("http", ":8877", "Listen for HTTP on this host:port")
	flag.Parse()
	log.Printf("Starting HTTP Server at %q", *httpl)
	h := devutil.NewFileServer().SetDir(*dir)

	log.Fatal(http.ListenAndServe(*httpl, h))
}
