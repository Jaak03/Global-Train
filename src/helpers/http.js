function generateRequest(body, window) {
  // Setup request options
  return { 
    method: 'POST', 
    body: JSON.stringify(body),
    headers: new Headers({
      'X-Api-Key': window.$store.state.api.API_KEY,
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token'),
    })
  };
}

module.exports = {
  generateRequest,
};