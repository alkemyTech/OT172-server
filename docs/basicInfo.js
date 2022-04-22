module.exports = {
  openapi: '3.0.0', // present supported openapi version
  info: {
    title: 'API de ONG', // short title.
    description: '<h3>Private API</h3><span>In order to test the API at the user level, first go to the auth / login path in your POST method, leave the username and password by default, execute it. <br>For <b>admin</b>, use test@test.com and password is 123456. <br>Copy the token and paste it into the authorization and press the button to authorize. With this you can now see the routes protected at the user level.</span>',
    version: '0.0.0', // version number
    contact: {
      name: 'OT172', // your name
      email: 'unmail@gmail.com', // your email
      url: 'pronto....' // your website
    }
  }
}
