// routes/users.js
import { createUser, getUserById } from "../models/usersModel";


// get all users
router.post("/users", async (req, res) => {

    try {
        const user = await createUser(req.body);
        res.json(user);

    } catch (err) {
        res.status(500).json({
             error: err.message 
            });
    }


    
});


// get 
router.post("/users/friends", async (req, res) => {
  const { friends } = req.body;

  try {

    const user = await createUser(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});







