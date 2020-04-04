export default () => {
  if (process.browser) {
    fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        test: 'Hi !'
      })
    })
  }
  return ('ZOOM');
}