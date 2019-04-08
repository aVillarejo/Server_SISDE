import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

//Creaccion de la aplicacion de express
const app = express();

// const cors = require('cors');
// app.use(cors());

//Creaccion del servidor de apollo, requiere defs y resolvers
const server = new ApolloServer({ typeDefs, resolvers });

//Coneccion entre Apollo y express
server.applyMiddleware({ app });

//Ejecucion del Servidor
//const port = 4000;rs
//app.listen({ port }, () => console.log(`El servidor esta corriendo - http://localhost:${port}${server.graphqlPath}`));

const port = process.env.PORT || 4000 

app.listen({ port }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});


//test
// app.get('*',(re,res)=>{
//   res.sendFile(path.resilve(__dirname,'public','index.html'));
// })