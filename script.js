const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '738d149757mshfa1606fb496a215p1b6e66jsn0ff2c7cd1322',
    'X-RapidAPI-Host': 'indian-railway-irctc.p.rapidapi.com'
  }
};

let response = fetch('https://indian-railway-irctc.p.rapidapi.com/getTrainId?trainno=1205', options)
response.then((value1)=>{
    return value1.json()
}).then((contests)=>{
    console.log(contests)
  ihtml= ""
    for(item in contests)
      {
        console.log(contests[item])
        ihtml+=`
            <div class="card mx-2 my-2" style="width: 18rem;">
        <img src="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/programming%20evolution.jpg?itok=WTj9-yNz" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].id}</h5>
          <p class="card-text">Status is ${contests[item].display}</p>
          <p>Starts at: ${contests[item].source_code}</p>
          <p>Starts at: ${contests[item].source_name}</p>
          <a href="${contests[item].destination_name_hi}" class="btn btn-primary">Go to Contest</a>
        </div>
      </div>
        `
      }
   cardcontainer.innerHTML = ihtml
})
