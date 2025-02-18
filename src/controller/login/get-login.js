import fs from 'fs'
export const getLogin =  (req, res) => {
    const { userName, Password } = req.body; 
    const rawUserdata = fs.readFileSync('src/db/login.json')
    const users = JSON.parse(rawUserdata)
/*     const checkIndexPassword = users.findIndex(u => u.Password === Password)
    const userPassword = users.find(u => u.Password === Password); */

 

    const checkUserNameIndex = users.findIndex(u => u.userName === userName)
    const userPasswordCheck = users[checkUserNameIndex].Password.includes(Password)

    
    if (userPasswordCheck) {
        return res.send(`Thanks for logging in!`);
    } else {
        return res.send('Invalid username or password');
    }
};