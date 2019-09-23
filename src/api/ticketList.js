export default (  function fligts(values) {
 
  fetch('http://localhost:8080/api//tickets')
   .then((response)=> {
    response.json().then(function(res) {
    
      localStorage.setItem('flights',JSON.stringify(res.data))
      return res.data;
    });
   
   })
   return [];
 
 });