require('dotenv').config();

const express = require('express');
const port = 3000;
const app = express();

const { User, Role } = require('./model');


app.get('/', async(req, res) => {
  res.send({
    status: 200,
    message: 'Hello there...',
  })  
})


app.get('/user/create', async (req, res) => {
  try {
    //-----------------------------------------------------------------
    // TODO: Will need to do within transaction for production readiness
    //-----------------------------------------------------------------
    let { dataValues: record } = await User.create({
      username: 'ikramzidane',
      email: 'ikram.zidane@gmail.com'
    });

    await Role.create({
      UserId: record.id,
      role: 'GOD',
    });

    res.send({
      status: 201,
      message: 'Created',
    })
  } catch(error) {
    console.log(error);
    res.status(500).send({
      status: 500,
      message: 'Error in creating user',
    })
  }
})


app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});




