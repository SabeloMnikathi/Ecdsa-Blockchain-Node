# ECDSA Node

Welcome to ECDSA Node, a project aimed at exploring the fundamentals of blockchain technology through the implementation of a simple client-server architecture. In this project, I delve into the concepts of digital signatures and public key cryptography to secure transactions between accounts.

## Overview

ECDSA Node consists of a React front-end communicating with a centralized server. The primary goal is to implement Elliptic Curve Digital Signature Algorithm (ECDSA) to ensure that only authorized users can initiate transactions.

## Features

- **Digital Signatures**: Utilizing ECDSA to provide cryptographic security, ensuring that only the owner of an account can authorize transactions.
  
- **Public Key Cryptography**: Incorporating public key infrastructure to verify the authenticity of transactions, preventing unauthorized transfers.

## Tech Stack

- **Front-end**: React
- **Back-end**: Node.js
- **Cryptography**: Elliptic Curve Digital Signature Algorithm (ECDSA)

## How It Works

1. **Client Interaction**: Users interact with the React front-end to initiate transactions between accounts.

2. **Server Validation**: The server validates the transaction request by verifying the digital signature against the sender's public key.

3. **Secure Transfers**: Only transactions with valid signatures are processed, ensuring the integrity and security of the transfer.

## Security Considerations

Throughout the development process, careful consideration is given to security implications. By implementing ECDSA and public key cryptography, we mitigate risks such as unauthorized transactions and replay attacks.

## Next Steps

- **Enhanced Security**: Continuously evaluate and improve security measures to safeguard against potential vulnerabilities.
  
- **Scalability**: Explore ways to scale the system while maintaining security and decentralization.

## Conclusion

ECDSA Node serves as a foundational project for understanding blockchain technology, emphasizing the importance of cryptographic techniques in ensuring the integrity and security of transactions. By exploring concepts such as digital signatures and public key cryptography, we lay the groundwork for more advanced blockchain development.
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
