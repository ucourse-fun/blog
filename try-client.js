const axios = require('axios')

//axios.put('http://localhost:3000/v1/mailing_list', {
//axios.put('http://api.ucourse.fun/v1/mailing_list', {
axios.put('https://dry-brook-40609.herokuapp.com/v1/mailing_list', {
    source: 'ucourse.fun',
    email: 'drybook@gmail.com'
})
.then(resp => {
    console.log(resp.data)
})
.catch(err => {
    console.log(err)
})

