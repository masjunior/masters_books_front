/* eslint-disable react-hooks/rules-of-hooks */
// export const myRequest = (url) => {
//     const myUrl = `http://localhost:8080/mastersofbooks/${url}`
//     const teste = 
//     useEffect(() => {
//         fetch(myUrl)
//           .then(res => {
//             console.log(`res: ${res.json}`);
//             return res.json();
//           })
//           .then(data => {
//             console.log(`data: ${data}`);
//             console.log("DATA: " + data);
//             return data;
//           });
//     }, [myUrl])
//     console.log(teste)
//     console.log('myUrl: ' + myUrl)
//     return teste;
// }
// ;


export async function myRequest(url) {
    // fetch list of available slugs from a database
    const myUrl = `http://localhost:8080/mastersofbooks/${url}`
    const res = await fetch(myUrl)
    const data = await res.json()

    return data
  }