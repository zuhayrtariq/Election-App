const sql = require("mssql");
const dbConfig =
  "Server=PKKHIDEV02;Database=Contracts_mgmt;User Id=Contracts_user;Password=Contracts;Encrypt=false";
const getQueryResult = async (query) => {
  try {
    await sql.connect(dbConfig);
    const { recordset: result } = await sql.query(query);
    return result;
  } catch (e) {
    console.log("Error in getting query result. Query: ", query);
    console.log("Error Message : ", e.message);
    return;
  }
};

const getSingleQueryResult = async (query) => {
  try {
    await sql.connect(dbConfig);
    const { recordset: result } = await sql.query(query);
    if (result[0]) return result[0];
    else {
      return undefined;
    }
  } catch (e) {
    console.log("Error in getting query single result. Query: ", query);
    console.log("Error Message : ", e.message);
    return;
  }
};

const insertRecordQuery = async (query) => {
  try {
    await sql.connect(dbConfig);
    const { rowsAffected } = await sql.query(query);
    return rowsAffected[0];
  } catch (e) {
    console.log("Error in insert query. Query: ", query);
    console.log("Error Message : ", e.message);
    return e.message;
  }
};

const getEmployeeDetails = async (id) => {
  const query = `SELECT * FROM VotersT WHERE id = '${id}'`;
  return await getSingleQueryResult(query);
};
const getVoteCasted = async (id) => {
  const query = `Select COUNT(*) as totalVotes from VotesT Where voterId = '${id}'`;

  return await getSingleQueryResult(query);
};

const candidateVotes = async (candidateId) => {
  const query = `SELECT T0.candidateId, T0.name, Count(T1.VoterId) 'totalVotes'
FROM CandidatesT T0
LEFT JOIN VotesT T1 ON T1.candidateId = T0.candidateId
Where T0.Id = '${candidateId}'
GROUP BY T0.Id, T0.Name
    `;
  return await getSingleQueryResult(query);
};

const votesSummary = async (positionId) => {
  let query = "";
  if (positionId)
    query = `SELECT T2.position, T1.candidateId, T1.name,T1.designation,T1.imgUrl, COUNT(T0.VoterId) 'totalVotes'
FROM CandidatesT T1 
Left join VotesT T0 ON T1.candidateId = T0.candidateId
LEFT JOIN PositionsT T2 ON T2.id = T1.positionId
Where T2.id = ${positionId}
Group By T1.name, T1.candidateId, T2.position, T0.candidateId,T2.id,T1.designation,T1.imgUrl
Order by T2.id ASC, COUNT(T0.VoterId) DESC`;
  else
    query = `SELECT T2.position, T1.candidateId, T1.name,T1.designation,T1.imgUrl, COUNT(T0.VoterId) 'totalVotes'
FROM CandidatesT T1 
Left join VotesT T0 ON T1.candidateId = T0.candidateId
LEFT JOIN PositionsT T2 ON T2.id = T1.positionId
Group By T1.name, T1.candidateId, T2.position, T0.candidateId,T2.id,T1.designation,T1.imgUrl
Order by T2.id ASC, COUNT(T0.VoterId) DESC`;
  const result = await getQueryResult(query);
  return result;
};

const totalVoteCasted = async () => {
  const query = `SELECT COUNT(DISTINCT VoterId) as votesCasted FROM VotesT`;
  const result = await getSingleQueryResult(query);
  return result;
};

const VotersVoteCasted = async () => {
  const query = `SELECT DISTINCT T0.voterId, (SELECT name from VotersT Where id = T0.voterId ) 'name', 
Convert(varchar,(SELECT Top 1 addedOn from VotesT T1 Where T1.voterId = T0.voterId),100) 'addedOn',
(SELECT Top 1 addedOn from VotesT T1 Where T1.voterId = T0.voterId) 'voteTime', 
(SELECT designation from VotersT Where id = T0.voterId ) 'designation'
FROM VotesT T0 ORDER BY voteTime ASC
`;
  const result = await getQueryResult(query);
  return result;
};

const VotersVoteRemaining = async () => {
  const query = `SELECT T0.id, T0.name, T0.designation From VotersT T0 LEFT JOIN VotesT T1 ON T1.voterId = T0.id Where T1.voterId is null`;
  const result = await getQueryResult(query);
  return result;
};

const insertVote = async (voterId, candidateId) => {
  const query = `INSERT INTO VotesT(voterId,candidateId) VALUES ('${voterId}','${candidateId}')`;
  return await insertRecordQuery(query);
};

module.exports = {
  getEmployeeDetails,
  insertVote,
  getVoteCasted,
  candidateVotes,
  votesSummary,VotersVoteCasted,
  totalVoteCasted,
  VotersVoteRemaining
};
