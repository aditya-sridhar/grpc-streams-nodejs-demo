# GRPC Streams in NodeJS
Example showing how to use GRPC streams in NodeJS

# Cloning the Code into local

Clone this code into your local using the following command

```bash
git clone https://github.com/aditya-sridhar/grpc-streams-nodejs-demo.git
```

## Installing the NPM Packages

Once the code is cloned. Get into the project folder and then Install npm packages using the following command

```bash
cd grpc-streams-nodejs-demo
npm install
```

## Running the Server 

In order to run the server code, Open a command prompt and run the following command

```bash
node server.js
```

## Running the Client

We have 2 clients in the code 
* **client_grpc_client_stream.js**: This code has a Client to show GRPC Client Streaming
* **client_grpc_server_stream.js**: This code has a Client to show GRPC Server Streaming

In order to run the client code, Open a separate Command prompt and run the following command

### GRPC Client Streamng

```bash
node client_grpc_client_stream.js
```

### GRPC Server Streaming

```bash
node client_grpc_server_stream.js

```
