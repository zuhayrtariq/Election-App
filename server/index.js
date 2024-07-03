const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const sql = require("mssql");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const ActiveDirectory = require("activedirectory");
const { getEmployeeDetails, insertVote, getVoteCasted, candidateVotes, votesSummary } = require("./queries");
const port = 4000;
const SECRET_KEY = "JWTSecret";
require("dotenv").config();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL,
      "http://localhost:5173",
      "http://10.159.102.58:5173",
      'http://10.159.97.2:5173'
    ],
    credentials: true,
  })
);

const authConfig = {
  url: "ldap://prime.net",
  baseDN: "DisOU=PrimeUsers,DC=Prime,DC=net",
};
const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

app.post("/login", async (req, res) => {
  let { username, password } = req.body;
  console.log(username);
  var ad = new ActiveDirectory(authConfig);
  const authUsername = "PINET\\" + username;
  // Authenticate
  await ad.authenticate(authUsername, password, async function (err, auth) {
    if (err) {
      console.log("ERROR: " + JSON.stringify(err));
      res.status(200).json("422");
      return;
    }
    if (auth) {
      console.log("Authenticated!");
      const voteCasted = await getVoteCasted(username);
      console.log(voteCasted);
      if (voteCasted.totalVotes > 0) {
        console.log("Vote Already Casted " + username);
        res.status(200).json("111");
        return;
      } else {
        const result = await getEmployeeDetails(username);
        if(!result)
          {
            res.status(200).json("422");
            return;
          }
        res.status(200).json(result)
        return
      }
    } else {
      console.log("Authentication failed!");

      res.status(200).json("422");
      return;
    }
  });
});

app.post("/proxy-login", async (req, res) => {
  let { username, password } = req.body;
  username = username.toUpperCase()
  var ad = new ActiveDirectory(authConfig);
  const authUsername = "PINET\\" + username;
  // Authenticate
  await ad.authenticate(authUsername, password, async function (err, auth) {
    if (err) {
      console.log("ERROR: " + JSON.stringify(err));
      res.status(200).json("422");
      return;
    }
    if (auth) {
      console.log("Authenticated!");
        if(username == 'PN001255')
        {
          const proxyVoteCasted = await getVoteCasted('PN001268');
          if(proxyVoteCasted.totalVotes > 0)
            {
              console.log("Proxy Vote Already Casted " + username);

              res.status(200).json("111");
              return;
            }
            else{
              const result = await getEmployeeDetails('PN001268');
              res.status(200).json(result)
              return;
            }
        }
        else  if(username == 'PN000103' || username == 'pn000103'  )
          {
            const proxyVoteCasted = await getVoteCasted('PN000650');
            if(proxyVoteCasted.totalVotes > 0)
              {
                console.log("Proxy Vote Already Casted " + username);
  
                res.status(200).json("111");
                return;
              }
              else{
                const result = await getEmployeeDetails('PN000650');
                res.status(200).json(result)
                return;
              }
          }

          else  if(username == 'PN001268')
            {
              const proxyVoteCasted = await getVoteCasted('PN000093');
              if(proxyVoteCasted.totalVotes > 0)
                {
                  console.log("Proxy Vote Already Casted " + username);
    
                  res.status(200).json("111");
                  return;
                }
                else{
                  const result = await getEmployeeDetails('PN000093');
                  res.status(200).json(result)
                  return;
                }
            }
        res.status(200).json("500");
        return;
      
    } else {
      console.log("Authentication failed!");

      res.status(200).json("422");
      return;
    }
  });
});

app.post("/logout", async (req, res) => {
  res.cookie("token", " ", { maxAge: 0, overwrite: true }).json(true);
});

app.post("/vote", async (req, res) => {
  const { votes, username } = req.body;
  console.log("Votes : ",votes)
  for (let i = 0; i < votes.length; i++) {
    await insertVote(username, votes[i]);
  }
});
app.get("/total-votes", async (req, res) => {
const {candidateId} = req.query;
const result = await candidateVotes(candidateId);

res.json(result)
});

app.get("/votes-data", async (req, res) => {
  const {positionId} = req.query;
  const result = await votesSummary(positionId)
  res.json(result)
});
app.get("/winners", async (req, res) => {
  const {positionId} = req.query;
  const result = await votesSummary(positionId)
  res.json(result)
});


/* Error handler middleware */
app.use((err, req, res, next) => {
  console.log("There is an error");
  const statusCode = err.statusCode || 500;
  console.error(err.message);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
