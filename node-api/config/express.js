import express from "express";
import cors from 'cors'
/**
 * Criando servidor express
 */
const app = express();

/**
 * Configurações do Express
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req,res,next){
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Header"
    )

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", "true")
    next()
})
app.use(cors())
export default app;
