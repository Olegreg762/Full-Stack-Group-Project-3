
const db = require('../config/connection');
const { Book, Library, User} = require('../models');
// const Book = require('../models/Book')
const cleanDB = require('./cleanDB');
const bookData = require('./bookData.json')
const libraryData= require('./libraryData.json')
const userData = require('./userData.json')
const bcrypt = require('bcrypt');

async function createLibraryStart() {
    try {
        const teacherUsers = await User.find({ isteacher: true});
        
        const teachers = teacherUsers.map(async (teacher) => { 
            const libraryname = `${teacher.username}'s Library`;
            const library = new Library({
                libraryname: libraryname,
                libraryowner: teacher._id
            });

        await library.save();
        });
    } catch (error) {
        console.log(error)
    }
}
const hashPasswords = async () => {
     for (let i =0; i < userData.length; i++) {
        const saltRounds = 10;
        userData[i].password = await bcrypt.hash(userData[i].password, saltRounds)
       } 
       return userData
} 



db.once('open', async () => {
    await cleanDB("Book", 'books');
    await cleanDB("User", 'users');
    await cleanDB("Library",'libraries')
    // await User.create(userSeeds);
    const hashedUserData= await hashPasswords()
    await User.insertMany(hashedUserData)
    // await Library.insertMany(libraryData)
    createLibraryStart();
    await Book.insertMany(bookData)
    console.log("seeded")
    process.exit(0)
})


db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
