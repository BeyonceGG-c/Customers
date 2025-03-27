import id from "date-and-time/locale/id";
import { myCollection2 } from "./Mymongo.js";
import { ObjectId } from "mongodb";



// transactions

let getCustomerAccount = (res, mId) => {
    myCollection2.findOne({ account_id: mId }, {projection:{transactions:1 ,account_id:1}})
        .then(resp => {
            
            let symbolList = []
            resp.transactions.forEach(doc => {
                if (doc.symbol)
                    symbolList.push(doc.symbol)
            })
            let CountSymbols = {}
            symbolList.forEach(item => {
                CountSymbols[item] = (CountSymbols[item] || 0) + 1;
            })
            res.status(200).send(CountSymbols)
            // res.status(200).send(resp)
        })
}



export { getCustomerAccount}

