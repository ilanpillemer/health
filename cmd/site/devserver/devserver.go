// +build ignore

package main

import (
	"log"
	"net/http"

	"github.com/vugu/vugu/devutil"
)

func main() {
	l := ":8844"
	log.Printf("Starting HTTP Server at %q", l)

	wc := devutil.NewWasmCompiler().SetDir(".")

	// using and index.html for now served by file server, in the future move to full html root.vugu
	// until then using sed in travis to remove any dev only lines in the index.html when deploying
	mux := devutil.NewMux()
	mux.Exact("/main.wasm", devutil.NewMainWasmHandler(wc))
	mux.Exact("/wasm_exec.js", devutil.NewWasmExecJSHandler(wc))
	mux.Default(devutil.NewFileServer().SetDir("."))

	log.Fatal(http.ListenAndServe(l, mux))
}
