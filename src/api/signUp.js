export default (  function signUp(values) {
  fetch('http://localhost:8080/api/signUp')
  .then((response)=> {
   response.json().then(function(data) {
    return data.signUp;
    
  }); 
  })
  return true;

});


