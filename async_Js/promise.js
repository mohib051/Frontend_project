function dataFetcher(url) {
  const parchi = new Promise(function (resolve, reject) {
    fetch(url)
      .then((raw) => raw.json())
      .then((result) => {
        resolve(result);
      });
  });
  return parchi;
}
dataFetcher("https://randomuser.me/api/")
.then(function (result) {
  console.log(result);
});

// const parchi = new Promise(function (resolve, reject) {
//     fetch("https://randomuser.me/api/")
//      .then((response) => response.json())
//      .then((data) =>{
//         if(data.results[0].gender === 'male')
//             resolve();
//         else
//         reject();
//      })
//     });
//     parchi .then(function(){
//                 console.log("Male User Found");
//             })
//             .catch(function(){
//                 console.log("Female User Found");
//             });