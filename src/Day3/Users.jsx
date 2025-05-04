import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import User from './User';
import AddUser from './Adduser';





function Users() {

    //handle local Storage 

    let readData = localStorage.getItem('AllUsers');
    if(readData)
    {
        readData = JSON.parse(readData);
    }
    else 
    {
        readData =[] ;
    }

    const [editFlag, setEditFlag] = useState(false);

    const [editedUser, setEditedUser] = useState({});

    const [allUsers, setAllUsers] = useState(readData);

    const [noramlFlag, setNoramlFlag] = useState(true);

    const [matchedUsers, setMatchedUsers] = useState(readData);

    let searchedInput = document.getElementById('search');


    function deleteUser(id)
    {
        console.log("deleted");
        let parseUsers = structuredClone(allUsers);
        parseUsers = parseUsers.filter((user)=>{return user.id!=id });
        setAllUsers(parseUsers);
        localStorage.setItem("AllUsers",JSON.stringify(parseUsers));
        setNoramlFlag(true);
        searchedInput.value = "" ;
    }

    function addNewUser(userInput)
    {
        console.log(userInput);
        let pasreUsers = structuredClone(allUsers) ;
        pasreUsers.push(userInput);
        pasreUsers[pasreUsers.length-1].id =uuidv4();
        setAllUsers(pasreUsers);
        console.log(pasreUsers) ;
        localStorage.setItem("AllUsers",JSON.stringify(pasreUsers));
        setNoramlFlag(true);
        searchedInput.value = "" ;
    }

    function editUserData(userId)
    {
        console.log("Edited" ,userId);
        setEditFlag(true);
        let editedUserIndex = allUsers.findIndex((user)=>user.id==userId);
        setEditedUser(allUsers[editedUserIndex]);
        console.log(editedUser);
        setNoramlFlag(true);
        searchedInput.value = "" ;

    }

    function cancelEdit()
    {
        setEditFlag(false);
    }

    function acceptUpdate(updatedData)
    {
        setEditFlag(false);
        console.log(updatedData);
        let updatedUserIndex = allUsers.findIndex((user)=>user.id==updatedData.id);
        let parseData = structuredClone(allUsers);
        parseData[updatedUserIndex] = updatedData ;
        console.log(parseData);
        setAllUsers(parseData) ;
        localStorage.setItem("AllUsers",JSON.stringify(parseData));
        setNoramlFlag(true);
        searchedInput.value = "" ;
    }

 

    function seacrhMatchedNames(e)
    {
        setMatchedUsers(allUsers);
        // console.log(matchedUsers);
        console.log(e.target.value);
        if(e.target.value.length===0)
        {
            setNoramlFlag(true);
        }
        else 
        {
            setNoramlFlag(false) ;
            //check for matched names

            let matchedItems = [] ;
            matchedItems = allUsers.filter((user)=>{
                
                return (user.uName.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
               
            });
            
            console.log(matchedItems);
            setMatchedUsers(matchedItems);

        }

    }


    return (
        <>
            <AddUser updateUser={acceptUpdate} addUser={addNewUser} flag={editFlag} cancelFun={cancelEdit} editData={editedUser} />
            <div className=' my-6 w-11/12 mx-auto bg-gray-700 p-8 rounded-3xl'>
            <div className="header-sec flex justify-center items-center  w-3/4 ms-auto px-2 mb-2 focus:outline-0">
                <h1 className='text-center text-3xl font-bold text-white mb-5 bg-amber-600 w-1/2 mx-auto p-3 rounded-2xl'>All Users</h1>
                <input id="search" onInput={seacrhMatchedNames} type="text" placeholder='search by name...' className='bg-white rounded-3xl px-2 py-1 w-1/4 relative bottom-2  outline-0' />
            </div>
            <div className="all-users grid md:grid-cols-2 lg:grid-cols-3 gap-5 grid-cols-1 ">


                {noramlFlag===true?allUsers.map((user)=>
                    (<User item = {user} key={uuidv4()} deletefun={deleteUser} editFun={editUserData} />)     
                ):matchedUsers.map((user)=>
                    (<User item = {user} key={uuidv4()} deletefun={deleteUser} editFun={editUserData} />)     
                ) }
            </div>
            
      
            </div>

        </>
        
    )
}

export default Users
