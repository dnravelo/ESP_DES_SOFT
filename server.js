import ex from 'express';
import dir from 'path'

const app = ex()
const dir_front = dir.resolve()
app.use(ex.static("frontend/build"))
app.use(ex.json())
app.use(ex.urlencoded({}))

app.listen('8000', function(){
    console.log("Server started")
})

app.get('/', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.get('/home', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.get('/timerecord_view', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.get('/searchrecordtime_view', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.get('/createtask_view', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.get('/searchtask_view', function(req, res){
    res.sendFile(dir_front + "/frontend/build/index.html")
})

app.post("/create_task", (req, res) => {
    let {tittle,startdate, enddate, description,totaltime} = req.body
    console.log(tittle)
    console.log(startdate)
    res.redirect("/")
})