async function fetchPar(newuserUid) {
    let  url = "http://localhost:3000/api/SampleTransaction";
     
    const filter = JSON.stringify({
      where: {
        and: [
          {
            newuserUid:newuserUid
          }
    
        ]
      }
    });
    url = `${url}?filter=${filter}`;
  
    result = await fetch(url, {
      method: "GET",
      headers: {
        "CONTENT-TYPE": "application/json"
      }
    })
      .then(resp => {
        if (!(200 <= resp.status < 300)) {
          console.warn("Network 오류");
        }
        return resp.json();
      })
      .catch(err => console.log(err));
  
    return result;
  }
  
  async function postPar(newlender) {
    const className = "com.betweak.carauction.SampleTransaction";
    url = "http://localhost:3000/api/SampleTransaction";
  
    const body = JSON.stringify({
      $class: className,
      newuserUid:userUid
    });
  
    result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: body
    }).then(resp => {
      if (!(200 <= resp.status < 300)) {
        console.error("Request실패");
        return resp.status;
      } else {
        return resp.json();
      }
    });
    return result;
  }
  
  export { fetchPar, postPar };