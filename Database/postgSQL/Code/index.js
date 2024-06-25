import express from "express";
import pg from "pg";


const db = new pg.Client({
  port: 5432,
  host: "localhost",
  database: "userDB",
  user: "postgres",
  password: "12345",
});
db.connect();


const result = await db.query("SELECT * FROM indian_states");
let noSuchState = false;
let userresult;
let newState;
let state;
let isDeletedUserData;
let noSuchUserState = false;


const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));



app.get("/", async (req, res) => {
  userresult = await db.query("SELECT u_stateid FROM user_states");
  const user_states = [];
  for (let state of userresult.rows) {
    user_states.push(state.u_stateid);
  }
  res.render("travel_tracker", {
    user_states,
    noSuchState,
    newState,
    noSuchUserState,
    isDeletedUserData,
  });
  newState = undefined;
  noSuchState = false;
  noSuchUserState = false;
  isDeletedUserData = undefined;
});



app.post("/add", async (req, res) => {
  const input = req.body.state.trim();
  state = result.rows.find(
    (st) => st["i_state"].toLowerCase() == input.toLowerCase()
  );
  if (state) {
    await db.query("INSERT INTO user_states(u_stateid) VALUES($1)", [state.id]);
    newState = state["i_state"];
  } else noSuchState = true;

  res.redirect("/");
});



app.post("/remove", async (req, res) => {
  state = result.rows.find(
    (st) => st["i_state"].toLowerCase() == req.body.state.trim().toLowerCase()
  );
  if (state) {
    let stateId = state.id;
    userresult = await db.query(
      "SELECT u_stateid FROM user_states WHERE u_stateid=$1",
      [stateId]
    );
    if (userresult.rows.length != 0) {
      await db.query("DELETE FROM user_states WHERE u_stateid=$1", [stateId]);
      isDeletedUserData = true;
    } else noSuchUserState = true;
  } else noSuchUserState = true;
  res.redirect("/");
});



app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
