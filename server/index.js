const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const sql = require("mssql");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const ActiveDirectory = require("activedirectory");

//IPS THAT ARE ALLOWED TO SEND REQUEST TO THE SERVER
const allowedIps = ['10.159.98.133','10.159.98.134','10.159.98.135','10.159.98.136','10.159.104.153','10.159.98.132'];

const {
  getEmployeeDetails,
  insertVote,
  getVoteCasted,
  candidateVotes,
  votesSummary,
  totalVoteCasted,
  VotersVoteCasted,
  VotersVoteRemaining,
} = require("./queries");
const { userAuth, adminAuth } = require("./auth");
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
      "http://10.159.98.132:5174",
      "http://10.159.98.132:5175",
    ],
    credentials: true,
  })
);

const authConfig = {
  url: "ldap://prime.net",
  baseDN: "DisOU=PrimeUsers,DC=Prime,DC=net",
};

app.post("/login", async (req, res) => {
  let { username, password } = req.body;
  console.log("Client IP: ", req.ip);
  const clientIp = req.ip;
  if (!allowedIps.includes(clientIp)) {
    res.status(200).json("99");
    return;
  }
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
      if (voteCasted.totalVotes > 0) {
        console.log("Vote Already Casted " + username);
        res.status(200).json("111");
        return;
      } else {
        const result = await getEmployeeDetails(username);
        if (!result) {
          res.status(200).json("422");
          return;
        }
        const token = jwt.sign({ username: result.id }, SECRET_KEY);
        return res
          .cookie("username", token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
          })
          .status(200)
          .json(result);
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
  username = username.toUpperCase();
  console.log("Client IP: ", req.ip);
  const clientIp = req.ip;
  if (!allowedIps.includes(clientIp)) {
    res.status(200).json("99");
    return;
  }
  const proxyForUsernames = [
    "PN000067",
    "PN000090",
    "PN001122",
    "PN000850",
    "PN001235",
    "PN000576",
    "PN000093",
    "PN001273",
    'PN000466',
    'PN000110',
    'PN001244',
    'PN001256',
    'PN001222'
    
  ];
  const nominatedProxyUsernames = [
    "PN000918",
    "PN000114",
    "PN000470",
    "PN000554",
    "PN001237",
    "PN001144",
    "PN001116",
    "PN001091",
    'PN000846',
    'PN000675',
    'PN000795',
    'PN000556',
    'PN001225'
  ];
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
      let proxyFoundFlag = false
      for (let i = 0; i < proxyForUsernames.length; i++) {
        console.log("Proxy : ", proxyForUsernames[i])
        console.log("Username : ", nominatedProxyUsernames[i])
        if (username == nominatedProxyUsernames[i]) {
          proxyFoundFlag = true;
          const proxyVoteCasted = await getVoteCasted(proxyForUsernames[i]);
          if (proxyVoteCasted.totalVotes > 0) {
            console.log("Proxy Vote Already Casted " + username);

            res.status(200).json("111");
            return;
          } else {
            const result = await getEmployeeDetails(proxyForUsernames[i]);
            const token = jwt.sign({ username: result.id }, SECRET_KEY);
            return res
              .cookie("username", token, {
                httpOnly: true,
                // secure: process.env.NODE_ENV === "production",
              })
              .status(200)
              .json(result);
          }
        }
      }


      if (!proxyFoundFlag)
        res.status(200).json("500");
      return;
    } else {
      console.log("Authentication failed!");

      res.status(200).json("422");
      return;
    }
  });
});

app.post("/test-login", async (req, res) => {
  let { username, password } = req.body;
  const result = await getEmployeeDetails("test");
  const token = jwt.sign({ username: result.id }, SECRET_KEY);
  return res
    .cookie("username", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json(result);
});

app.post("/admin-login", async (req, res) => {
  let { username, password } = req.body;
  const adminUserNames = ["PN001255", "PN001268", "PN001228"];
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

      const result = await getEmployeeDetails(username);
      console.log(username.toUpperCase());
      if (!result) {
        res.status(200).json("422");
        return;
      }
      if (!adminUserNames.includes(username.toUpperCase())) {
        res.status(200).json("533");
        return;
      }
      const token = jwt.sign({ username: result.id }, SECRET_KEY);
      return res
        .cookie("adminUsername", token, {
          httpOnly: true,
          // secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json(result);
    } else {
      console.log("Authentication failed!");

      res.status(200).json("422");
      return;
    }
  });
});

app.post("/vote", userAuth, async (req, res) => {
  const { votes, username } = req.body;
  for (let i = 0; i < votes.length; i++) {
    await insertVote(req.userId, votes[i]);
  }
});

app.post("/logout", (req, res) => {
  return res.clearCookie("username").status(200).json({ message: "Done" });
});

app.get("/total-votes", adminAuth, async (req, res) => {
  const result = await totalVoteCasted();
  res.json(result);
});

app.get("/votes-data", adminAuth, async (req, res) => {
  const { positionId } = req.query;
  const result = await votesSummary(positionId);
  res.json(result);
});

app.get("/user-vote", adminAuth, async (req, res) => {
  const { candidateId } = req.query;
  const result = await candidateVotes(candidateId);

  res.json(result);
});

app.get("/winners", adminAuth, async (req, res) => {
  const { positionId } = req.query;
  const result = await votesSummary(positionId);
  res.json(result);
});

app.get("/candidates-vote-casted", adminAuth, async (req, res) => {
  const result = await VotersVoteCasted();
  res.json(result);
});

app.get("/candidates-vote-remaining", adminAuth, async (req, res) => {
  const result = await VotersVoteRemaining();
  res.json(result);
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
