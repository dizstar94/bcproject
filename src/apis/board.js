const baseUrl = 'http://localhost:3000/api'

async function fetchBoard(){
  const url = `${baseUrl}/Board`;

  const resp = await fetch(baseUrl, {
    headers: {
      'CONTENT-TYPE': 'application/json'
    }
  });

  console.log(resp.json())
}


// async function fetchUser(created) {
//     let url = "http://localhost:3000/api/Board";

//     const filter = JSON.stringify({
//       where: {
//         and: [ 
//           {
//             created:created
//           }
          
//         ]
//       }
//     });
//     url = `${url}?filter=${filter}`;
  
//     result = await fetch(url, {
//       method: "GET",
//       headers: {
//         "CONTENT-TYPE": "application/json"
//       }
//     })
//       .then(resp => {
//         if (!(200 <= resp.status < 300)) {
//           console.warn("Network 오류");
//         }
//         return resp.json();
//       })
//       .catch(err => console.log(err));
  
//     return result;
//   }
  
// /,


//   async function postUser(created, hostUid, userUid,date) {
    
//     const className = "com.betweak.carauction.Board";
//     url = "http://52.78.89.146:3000/api/Board";
  
//     const body = JSON.stringify({
//     $class: className,
//       created:created ,
//       hostUid: hostUid,
//       userUid:newuserUid,
//       date:date,
      
      
//     });
  
//     result = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: body
//     }).then(resp => {
//       if (!(200 <= resp.status < 300)) {
//         console.error("Request실패");
//         return resp.status;
//       } else {
//         return resp.json();
//       }
//     });
//     return result;
//   }
  
//   export { fetchUser, postUser };
