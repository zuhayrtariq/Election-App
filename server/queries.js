const sql = require("mssql");
const dbConfig = 'Server=PKKHIDEV02;Database=Contracts_mgmt;User Id=Contracts_user;Password=Contracts;Encrypt=false'
const getQueryResult = async (query) => {
    try{
     await sql.connect(dbConfig);
    const { recordset: result } = await sql.query(query);
    return result;
    }catch(e)
    {
      console.log("Error in getting query result. Query: ",query);
      console.log("Error Message : ",e.message);
      return;
    }
  };

  const getSingleQueryResult = async (query) => {
    try{
      await sql.connect(dbConfig);
      const { recordset: result } = await sql.query(query);
      if(result[0])
      return result[0];
      else
      {
        return undefined;
      }
      }catch(e)
      {
        console.log("Error in getting query single result. Query: ",query);
        console.log("Error Message : ",e.message);
        return;
      }
  };

  const insertRecordQuery = async (query) => {
    try{ 
    await sql.connect(dbConfig);
    const {rowsAffected} = await sql.query(query);
    return rowsAffected[0];
    }catch(e)
    {
      console.log("Error in insert query. Query: ",query);
      console.log("Error Message : ",e.message);
      return e.message;
    }
  };

const getEmployeeDetails  = async(id) => {
    const query = `SELECT * FROM Voters WHERE id = '${id}'`;
    return await getSingleQueryResult(query);
}
const getVoteCasted = async(id) =>{
    const query = `Select COUNT(*) as totalVotes from VotesCount Where voterId = '${id}'`
    
    return await getSingleQueryResult(query);
}


const totalVotes = async() =>{
    const query = `Select COUNT(*) as totalVotes from VotesCount`;
    return await getSingleQueryResult(query);
}
const candidateVotes = async(candidateId) =>{
    const query = `Select *, COUNT(*) as totalVotes from VotesCount WHERE candidateId = '${candidateId}'
    GROUP BY *
    `;
    return await getSingleQueryResult(query);
}

const votesSummary = async(positionId) =>{
  let query = '';
  if(positionId)
  query = `SELECT T2.Description, T1.id, T1.Name, CoUNT(T0.VoterId) 'Votes'
FROM Candidates T1 
Left join VotesCount T0 ON T1.id = T0.candidateId
LEFT JOIN Positions T2 ON T2.Id = T1.Position
Where T2.id = ${positionId}
Group By T1.Name, T1.id, T2.Description, T0.CandidateId,T2.id
Order by T2.id ASC, COUNT(T0.VoterId) DESC`
else 
query = `SELECT T2.Description, T1.id, T1.Name, CoUNT(T0.VoterId) 'Votes'
FROM Candidates T1 
Left join VotesCount T0 ON T1.id = T0.candidateId
LEFT JOIN Positions T2 ON T2.Id = T1.Position
Group By T1.Name, T1.id, T2.Description, T0.CandidateId,T2.id
Order by T2.id ASC, COUNT(T0.VoterId) DESC`
  const result = await getQueryResult(query);
  return result

}

const insertVote = async(voterId,candidateId) =>{
    const query = `INSERT INTO VotesCount(voterId,candidateId) VALUES ('${voterId}','${candidateId}')`
    return await insertRecordQuery(query)
}



module.exports = {
    getEmployeeDetails,insertVote,getVoteCasted,totalVotes,candidateVotes ,votesSummary 
}