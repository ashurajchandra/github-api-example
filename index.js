

// console.log("hello world")



// function add(a,b){
//     const c = 50;

//     function sum(){
//         return a+b+c
//     }
//     return sum;
// }


//   const result = add(5,6);

//   console.log("result", result())
 //hello, end, 0, 1,2

// console.log("hello")

// setTimeout(function (){
//     console.log("print after 1 sec")
// },1000)

// setTimeout(function (){
//     console.log("print after 0 sec")
// },0)

// setTimeout(function (){
//     console.log("print after 2 sec")
// },2000)

// //PROMISE      sttate of a promise: pending, fulfilled, rejected  

// const promise = new Promise((resolve, reject)=>{
//     resolve("success")
// })
// console.log("promise", promise)


// console.log("end")



//hello,promise, end,  ,0, 1,2

//

//
// const response = fetch('https://api.github.com/users/ashurajchandra')
//  console.log('response',response)
// response.then((data)=>data.json())
// .then((jsonData)=> console.log("jsonData",jsonData))
// .catch(error=>console.log("error occured", error))



//avoid using await at global level


// const newPromise  = new Promise((resolve,reject)=>{
//     resolve("success message")
// })

// console.log("newPromise",newPromise)

//const promise2 = await fetch('https://api.github.com/users/ashurajchandra')


 async function fetchUserData(){
    const users = ["ashu", "pappu", "parvez"]
    const response = await fetch(`https://api.github.com/users/${user}`);
     const jsonResponse = await  response.json()

   
     renderUserInfo(jsonResponse)

}

fetchUserData()



async function fetchUserData1(){
    const response = await fetch('https://api.github.com/users/ashurajchandra');
     const jsonResponse1 = await  response.json()

   
     renderUserInfo(jsonResponse1)

}
fetchUserData1()
//<div cardDiv>
//<img/>
//<div infoDiv>
//<h></h4>
//<p></p>
//</div>

//</div>

`
<div>

<img src=""/>
<div>
<h4></h4>
<p></p>
</div>
</div>

`
//DRY DON'T REPEAT YOURSELF

function renderUserInfo(userInfo){
    console.log("userInfo",userInfo)


    const cardDiv = document.createElement('div');
    const userImage = document.createElement('img')
    userImage.src= userInfo.avatar_url;
    
 const infoDiv = document.createElement('div');

 const title = document.createElement('h4');
 title.innerHTML = userInfo.company;
 const name = document.createElement('p');
 const bio = document.createElement('p');
 bio.innerHTML = userInfo.bio 

 name.innerHTML= userInfo.name;
 
 infoDiv.appendChild(title)
 infoDiv.appendChild(name)
 infoDiv.appendChild(bio)

 cardDiv.appendChild(userImage);
 cardDiv.appendChild(infoDiv)

console.log("cardDiv", cardDiv)
document.body.appendChild(cardDiv)

}


