const express=require('express')
const PORT=5000
const app = express()
var cors=require('cors')

app.use(cors())
app.use(express.json())


app.use('/user',require('./routes/forhomepage'))
app.use('/card',require('./routes/foraddingcards'))
app.use('/projects',require('./routes/projects'))

app.listen(PORT,()=>{
    

})