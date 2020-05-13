[![Build Status](https://travis-ci.org/ilanpillemer/health.svg?branch=master)](https://travis-ci.org/ilanpillemer/health)

# Health

Health is a web application to support achieving health according to the WHO definition

> A state of complete physical, mental and social well-being, and not
> merely the absence of disease or infirmity.

The application uses the the _*in5 model*_ ]model [pdf](https://dl.acm.org/doi/pdf/10.1145/3290607.3312977) as described [here](https://dl.acm.org/doi/10.1145/3290607.3312977) and in a number of papers and articles that can be found
in the MARCH-APRIL edition of the _ACM_ publication [_Interactions_](https://interactions.acm.org/archive/toc/march-april-2020).


# Website

+ https://health.chevrutah.com/

# Technology used

+ [d3.js](https://d3js.org)
+ [Go](https://golang.org)
+ [Kubernetes](https://kubernetes.io)
+ [Docker](https://www.docker.com)
+ [Dockerhub](https://hub.docker.com)
+ [flux](https://fluxcd.io)
+ [travis ci](https://travis-ci.org)
+ [materialize](https://materializecss.com/)
+ [Web Assembly](https://webassembly.org/)
+ [Vugu](https://vugu.org/)



# Resources

+ https://github.com/golang/go/wiki/WebAssembly
+ https://github.com/johanbrandhorst/wasm-experiments/
+ https://www.youtube.com/watch?v=Dxs4LGjmEL4
+ https://www.vugu.org/doc/start
+ https://www.vugu.org/doc/build-and-dist
+ https://github.com/vugu/vugu-site
+ https://pkg.go.dev/github.com/vugu/vugu?tab=doc
+ http://datawanderings.com/2019/04/14/drawing-radial-shapes-in-d3-js/
+ https://www.vugu.org/doc/files/markup#vg-js-populate
+ https://www.visualcinnamon.com/2015/09/placing-text-on-arcs.html
+ https://developers.google.com/identity/sign-in/web/sign-in
+ https://developers.google.com/identity/sign-in/web/reference#gapisignin2renderid_options
+ https://pkg.go.dev/golang.org/x/net/html?tab=doc
+ https://pkg.go.dev/go/format?tab=doc

# misc

it’s not easy to call a Go function directly from JS by name, but it is easy to call from JS to a Go function that you have a reference to using js.FuncOf

so the idea would be (pseudocode):

in Go:

js.Global().Get(“window”).Set(“myCallbackThingy”, js.FuncOf(func(this js.Value, args …js.Value) interface {} { /* the function body */)

that gets run early, like at Go application startup

and then in your onSuccess you just call window.myCallbackThingy(whatever,args,here)