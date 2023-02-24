/*comment
* Title:Uptime Monitoring Application
*Description:A RestFul API to monitor up or down time of user defined links
*/

// dependencies

const http=require('http');

// app object-- module scaffolding

const app={}

//configuration
app.config={
   port:6000
}

// create server
app.createServer=()=>{
   const server=http.createServer(app.handleRequest)
   server.listen(app.config.port,()=>{
      console.log(`server is running ${app.config.port}`);
   })
}
// handle request

app.handleRequest=(req,res)=>{
   // res handle
   res.end('hello nodejs')
}

// start server
app.createServer()



