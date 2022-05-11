const express = require("express");

const app = express();

const authRouter = require('./routes/authRouter')

require("dotenv").config();

const { auth, requiresAuth } = require("express-openid-connect");
app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
    // routes: {
    //     // Override the default login route to use your own login route as shown below
    //     login: false,
    //     // Pass a custom path to redirect users to a different
    //     // path after logout.
    //     postLogoutRedirect: '/custom-logout',
    //   },
  })
);


app.use('/', authRouter);
// app.get("/", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Logged In" : "Logged Off");
// });
const port = process.env.PORT || 3000;

// app.get('/profile', requiresAuth(), (req, res) => {
//     res.send(JSON.stringify(req.oidc.user));
//   });

app.get('/', (req, res) => {
    res.send('<a href="/admin">Admin Section</a>');
  });
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
