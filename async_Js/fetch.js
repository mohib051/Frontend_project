fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(read => console.log(read))