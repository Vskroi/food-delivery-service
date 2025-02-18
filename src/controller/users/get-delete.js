import fs from 'fs'
export const deleteUsers = (req, res) => {
    const { firstName, secondName} = req.body;
    const rawUserdata = fs.readFileSync("src/db/users.json")
    const users = JSON.parse(rawUserdata)
    

    const deleteFirstNameIndex = users.findIndex(user => user.firstName === firstName);

    // const deleteSecondName = users.findIndex(user => user.secondName === secondName);
// console.log(deleteFirstName)
users.splice(deleteFirstNameIndex , 1)
    fs.writeFileSync("src/db/users.json", JSON.stringify(users));

res.send(users)
  }