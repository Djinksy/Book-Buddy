const db = require('../config/connection');
const { User, Books } = require('../models');
const userSeeds = require('./userSeeds.json');
const bookSeeds = require('./bookSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Books.deleteMany({});

    await User.create(userSeeds);

    // for (let i = 0; i < bookSeeds.length; i++) {
    //   const { _id, bookAuthor } = await Books.create(bookSeeds[i]);
    //   // const user = await User.findOneAndUpdate(
    //   //   { username:   },
    //   //   {
    //   //     $addToSet: {
    //   //       books: _id,
    //   //     },
    //   //   }
    //   // );
    // }
  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
