const axios = require('axios')

axios.put('http://localhost:3000/mailing_list', {
    host: 'ucourse.fun',
    email: 'chiren.hwang@gmail.com'
})
.then(resp => {
    console.log(resp.data)
})
.catch(err => {
    console.log(err)
})

