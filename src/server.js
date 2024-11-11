const app = require('./app');

const swaggerUi = require ("swagger-ui-express")
const swaggerJsDoc = require ("swagger-jsdoc")

const swaggerOptions = {
    swaggerDefinition: {
        орепарі: "3.0.0",
        info: {
         title: "API de Tarefas",
         version: "1.0.0",
         description: "API CRUD para gerencier tarefas",
     },
     servers: [{ url: "http://Localhost:3003" }],
    },
    apis: [`${__dirname}/routes/*.js`], // caminho para as rotas
};


const port = process.env.PORT || 1903
const taskRouter = require('./routes/taskRouter');
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup (swaggerDocs))
app.use('/api', taskRouter)

app.listen(port, () => console.log(`Run on port ${port}!`));