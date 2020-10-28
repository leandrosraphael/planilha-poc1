const { GoogleSpreadsheet }  = require ('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1BlJJwKzq6mrguy7H0JMZvaC9XehH4hRyWHJZMus_G_w')

const run = async() => {
   try {

await doc.useServiceAccountAuth(credentials)
await doc.loadInfo()
console.log(doc.title)

} catch (err){
  console.log(err)
}
}
run()