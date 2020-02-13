let testURL = "https://reqres.in/api/users"

function get(url, callback){
  let xhr = new XMLHttpRequest()
  console.log(xhr)
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.response)
    }
    if (xhr.status == 404){
        console.log("404: Resource not found.")
    }
}
  xhr.open('GET', url)
  xhr.send()
}


function getLog(url){
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.response)
    }
    if (xhr.status == 404){
        console.log("404: Resource not found.")
    }
}
  xhr.open('GET', url)
  xhr.send()
}

function handler(response){
  let json = JSON.parse(response)
  console.log(json)
}

get(testURL, handler)