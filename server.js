import express, { json } from 'express'

const PORT=8080;
const app=express()
app.use(express.json())

const users = [
    { username: "alice", age: 25, email: "alice@example.com" },
    { username: "bob", age: 30, email: "bob@example.com" },
    { username: "charlie", age: 28, email: "charlie@example.com" },
    
    
]    

app.listen(PORT, ()=>{
    console.log(`server is runing at port ${PORT}`)
})
app.get('/',(req,res)=>{
    return res.status(400).json({message:"User found",})
})

app.get('/user/:username',  async(req,res)=>{
    try {
        const username=req.params
        console.log(username)
        if(!username){
            return res.status(500).json({message:"enter the name "})
        }
        if (users.includes(username)){
            return res.status(400).json({message:"User found",})
        }
        else{
            return res.status(404).json({message:"User Not found"})
        }
        
        
    } catch (error) {
        console.log(error.message)
        
    }
} )