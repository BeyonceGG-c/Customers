import { PORT } from './config.js';
import express from 'express'
import { TwentyCustomers } from './customers.js';
import { getCustomerAccount } from './transactions.js';

const app = express()
app.listen(PORT, () => {
    console.log(`Web server has taken control of port ${PORT}`)
})


app.get("/customers", (req, res) => {
    let page = {}
    TwentyCustomers(res, 0)
})


app.get("/customers/:page", (req, res) => {
    TwentyCustomers(res, Number(req.params.page))
})


app.get("/transactions/find/:mId", (req, res) => {
    let mId=Number(req.params.mId)
    getCustomerAccount(res, mId)
})
