import database from "../../../infra/database.js";

const status = async (req, res) => {
  const result = await database.query("SELECT 1 + 1;");
  console.log("RESULT", result.rows);

  res.status(200).json({ mensagem: "Que coisa top aprender! Yéaaaaah!" });
};

export default status;
