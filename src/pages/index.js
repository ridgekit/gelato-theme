import React from "react"
import axios from "axios"

const IndexPage = (catalogs) => {

  var config = {
      method: 'get',
      url: 'https://product.gelatoapis.com/v3/catalogs',
      headers: {
        'X-API-KEY': process.env.API_KEY,
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest'
      },
      data: {
        ...catalogs
      }
  }
  console.log ("CONFIG " + JSON.stringify(config))
  axios(config)
  .then(function (response){
    console.log(JSON.stringify(response.data))
    let data = response.data
    return data
  })
  .catch(function (error) {
    console.log(error)
  });

  return (
    <div>
        <h1>Home Page</h1>
        {catalogs.catalogUid}
        {catalogs.title}
    </div>
  )
}

export default IndexPage