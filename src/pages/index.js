import React from "react"
import axios from "axios"

const IndexPage = (catalogs) => {

  var config = {
      method: 'get',
      url: 'https://product.gelatoapis.com/v3/catalogs',
      headers: {
        'X-API-KEY': process.env.GATSBY_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        // 'Access-Control-Allow-Origin': '*',
        // 'X-Requested-With': 'XMLHttpRequest'
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

  // const res = axios.get('https://product.gelatoapis.com/v3/catalogs', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'X-API-KEY': process.env.API_KEY,
  //   }
  // })


  // const url = 'https://product.gelatoapis.com/v3/catalogs'

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-API-KEY': process.env.API_KEY,
  //   }
  // }

  // fetch(url, options)
  // .then((response) => response.json())
  // .then((data) => {
  //     console.log(data)
  // });

  return (
    <div>
        <h1>Home Page</h1>
        {catalogs.catalogUid}
        {catalogs.title}
    </div>
  )
}

export default IndexPage