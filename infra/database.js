import { Client } from "pg";

const query = async (queryObject) => {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();

  const res = await client.query(queryObject);
  console.log(res.rows);
  await client.end();
  return res;
};

export default {
  query,
};
