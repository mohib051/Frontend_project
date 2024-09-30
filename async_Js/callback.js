// function abcd(a,b){
//     b();
// }
// abcd(1 , function(){console.log("callback hua")})


// getData("https://randomuser.me/api/", function(ans){
//     console.log(ans.results[0].gender, ans.results[0].email , ans.results[0].name.first)
// })
// function getData(url, callback){
//     fetch(url)
//     .then(raw=>raw.json())
//     .then(result => {
//          callback(result)
//     })
// }
// getdata function jab call hua tab usme humne url bheja and ek function bheja ,,or fhir jab tak url ka hume  result  naa aa jaye , tak tak wait karo ,aur jaise hi result aa jaye , fhir tab humhara callback function me result pass kar do , aur vo result hamahara function (ans) me receive hoga. 

// function getvalue(url, cb) {
//     fetch(url)
//        .then(response => response.json())
//        .then(data => {
//             cb(data);
//         })
//        .catch(err => console.error('Fetch Error:', err));

// }
// getvalue(`https://randomuser.me/api/`,function(result){
//         console.log(result.results[0].gender, result.results[0].email, result.results[0].name.first);
//     });


