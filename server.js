const { res } = require("express");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;


const articlesInfo ={
    "learn-react":{
        comments:[],
    },
    "learn-node":{
        comments:[],
    },
    "my-thoughts-on-learning-react":{
        comments:[],
    },
};

//Initialize built-in middelware
//Function of express which parses incoming JSON payload
app.use(express.json({extended:false}));

//Test routes
app.get("/",(req, res)=> res.send("Hello World"));
app.post("/", (req, res) => res.send(`Hello ${req.body.name}`));
app.get("/hello/:name", (req, res)=> res.send(`Hello ${req.params.name}`))

//Blog routes
app.post('/api/articles/:name/add-comments', (req, res)=>{
    const {username, text} = req.body;
    const articleName = req.params.name;
    articlesInfo[articleName].comments.push({username, text});
    res.status(200).send(articlesInfo[articleName]);
  

})

app.listen(8000, ()=>console.log(`Server started at port ${PORT}`))

