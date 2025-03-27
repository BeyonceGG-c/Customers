import { myCollection } from "./Mymongo.js";
import date from 'date-and-time'


//20 Customers

let TwentyCustomers = (res, page=0) => {
    myCollection.find({}, { limit: 20, skip:(page-1)*20, sort: { username: 1 } }).project({ _id: 0, tier_and_details: 0 }).toArray()
        .then(resp => {
            // console.log(resp)
            if (!resp)
                return res.status(200).json({ "message": "Fool, Wrong Question" })
            resp.forEach(doc => {
                doc.birthdate = date.format(doc.birthdate, 'MMM DD YY')
            })
            return res.status(200).json(resp)
        })
        .catch(err => {
            return { "error": err }
        })

}




export { TwentyCustomers}