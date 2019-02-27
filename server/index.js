const express = require('express')
const Mock = require('mockjs')
const app = express()
const router = express.Router()

router.get('/mockjs', (req,res) => {
    var data = Mock.mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    })
    res.json(200,data)
})

app.listen(3000,()=> console.log('Example app listening on port 3000!'))