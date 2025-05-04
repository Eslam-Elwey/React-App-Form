
import { useEffect, useState } from 'react';

function AddUser(props) {
    let {addUser,flag,cancelFun,editData,updateUser} = props ;

    const [userInput, setUserInput] = useState({uName:"",age:"",gender:""});

    const [showFlag, setShowFlag] = useState(true)


    let nameInput = document.getElementById('uName');
    let ageInput = document.getElementById('uAge');
    let maleInput = document.getElementById('male');
    let femaleInput = document.getElementById('female');

    const [editedUser, setEditedUser] = useState({uName:"",age:"",gender:"",id:""});

    useEffect(()=>{
        if(showFlag)
        {
            setEditedUser(editData);
        }
    })

    function handleChanges(e)
    {
        setUserInput({...userInput,[e.target.name]:e.target.value});
    }

    function resetForm()
    {
        nameInput.value = "" ;
        ageInput.value = "" ;
        maleInput.checked = false ;
        femaleInput.checked = false ;
    }


    function handleSubmit(e)
    {
        e.preventDefault();
        let copyUserInput = {...userInput};
        copyUserInput ={...copyUserInput,uName:userInput.uName.trim()};
        addUser(copyUserInput);
        resetForm() ;
    }

    function cancelEdit()
    {
        cancelFun() ;
        resetForm() ;
        setShowFlag(true);
    }

    function handleChangesEdit(e)
    {
        console.log(e.target.value);
        setEditedUser({...editedUser,[e.target.name]:e.target.value});
        console.log(editedUser);
        setShowFlag(false);
    }

    function confirmUpdate(e)
    {
        e.preventDefault();
        resetForm();
        setShowFlag(true);
        updateUser(editedUser);
    }

//edit change first
    return (
        <div className="lg:w-1/2 w-3/4 my-7 p-4 mx-auto">
            
           
            <form method="post" className="flex flex-col bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-2xl text-white ">
                <h2 className="text-center text-2xl my-2 ">User Form</h2>
                { (flag && showFlag)?<>
                <input value={editedUser.uName} id="uName" required onChange={handleChangesEdit} type="text" name="uName" placeholder = "user name" className="text-lg font-normal placholder:gray outline-1 outline-black rounded-2xl p-2 w-3/4 mx-auto my-3 bg-gray-800" />
                <input value={editedUser.age} id="uAge" required onChange={handleChangesEdit} type="number" name="age" placeholder = "user age" className="text-lg font-normal placholder:gray outline-1 outline-black rounded-2xl p-2 w-3/4 mx-auto my-3 bg-gray-800" />
                <div className="text-2xl gender-sec my-3 flex flex-col flex-wrap lg:flex-row w-1/2 lg:justify-between lg:items-center mx-auto font-normal">
                    <p className=" text-white">Gender</p>
                    <div className="gen flex gap-x-2 ">
                        {editedUser.gender==="male"?<input checked id="male" required onChange={handleChangesEdit} type="radio"  name="gender"  className="accent-pink-600"   value="male"/>:<input id="male" required onChange={handleChangesEdit} type="radio"  name="gender"  className="accent-pink-600"   value="male"/>}
                        
                        <label htmlFor="male" >male</label>
                    </div> 
                    <div className="gen flex gap-x-2 ">
                    {editedUser.gender==="female"?<input checked id="female" required onChange={handleChangesEdit} type="radio"  name="gender"  className="accent-pink-600"   value="female"/>:<input id="female" required onChange={handleChangesEdit} type="radio"  name="gender"  className="accent-pink-600"   value="female"/>}
                        <label htmlFor="female" >female</label>
                    </div> 
                </div>
                 </>: (flag&&!showFlag)?<>
                <input id="uName" required onChange={handleChangesEdit} type="text" name="uName" placeholder = "user name" className="text-lg font-normal placholder:gray outline-1 outline-black rounded-2xl p-2 w-3/4 mx-auto my-3 bg-gray-800" />
                <input id="uAge" required onChange={handleChangesEdit} type="number" name="age" placeholder = "user age" className="text-lg font-normal placholder:gray outline-1 outline-black rounded-2xl p-2 w-3/4 mx-auto my-3 bg-gray-800" />
                <div className="text-2xl gender-sec my-3 flex flex-col flex-wrap lg:flex-row w-1/2 justify-between items-center mx-auto font-normal">
                    <p className=" text-white">Gender</p>
                    <div className="gen flex gap-x-2 ">
                        {editedUser.gender==="male"?<input checked id="male" required onChange={handleChangesEdit} type="radio"  name="gender"  className="accent-pink-600"   value="male"/>:<input id="male" required onChange={handleChangesEdit} type="radio"  name="gender"  className="accent-pink-600"   value="male"/>}
                        
                        <label htmlFor="male" >male</label>
                    </div> 
                    <div className="gen flex gap-x-2 ">
                    {editedUser.gender==="female"?<input checked id="female" required onChange={handleChangesEdit} type="radio"  name="gender"  className="accent-pink-600"   value="female"/>:<input id="female" required onChange={handleChangesEdit} type="radio"  name="gender"  className="accent-pink-600"   value="female"/>}
                        <label htmlFor="female" >female</label>
                    </div> 
                </div>
                 </>:
                
                <>
                    <input id="uName" required onChange={handleChanges} type="text" name="uName" placeholder = "user name" className="text-lg font-normal placholder:gray outline-1 outline-black rounded-2xl p-2 w-3/4 mx-auto my-3 bg-gray-800" />
                    <input  id="uAge" required onChange={handleChanges} type="number" name="age" placeholder = "user age" className="text-lg font-normal placholder:gray outline-1 outline-black rounded-2xl p-2 w-3/4 mx-auto my-3 bg-gray-800" />
                    <div className="text-2xl gender-sec my-3 flex flex-col flex-wrap lg:flex-row w-1/2 justify-between items-center mx-auto font-normal">
                        <p className=" text-white">Gender</p>
                        <div className="gen flex gap-x-2 ">
                            <input id="male" required onChange={handleChanges} type="radio"  name="gender"  className="accent-pink-600"   value="male"/>
                            <label htmlFor="male" >male</label>
                        </div> 
                        <div className="gen flex gap-x-2 ">
                            <input id="female" required onChange={handleChanges} type="radio" name="gender" className="accent-pink-600"   value="female"/>
                            <label htmlFor="female" >female</label>
                        </div> 
                    </div>
                
                </>
}

                { flag ?<div className="btn-sec w-1/2 mx-auto my-3 flex gap-x-3">
                    <button onClick={confirmUpdate} className="px-4 py-2 cursor-pointer bg-emerald-800 rounded-2xl w-1/2">Edit User</button>
                    <button onClick={cancelEdit} className="px-4 py-2 cursor-pointer   rounded-2xl w-1/2 bg-red-600">Cancel Edit</button>
                </div> :<div className="btn-sec w-1/2 mx-auto my-3">
                    <button onClick={handleSubmit} className="px-4 py-2 cursor-pointer bg-green-900 rounded-2xl w-full">Add User</button>
                </div>}

                

            </form>
        </div>
    )
}

export default AddUser

