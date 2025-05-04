import male from "../assets/male.png" ;
import female from "../assets/female.png" ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';



function User(props) {
    let {id,uName,age,gender} = props.item ;
    let deletefun = props.deletefun;
    let editFun = props.editFun ;
    function deleteUser()
    {
        deletefun(id);
    }

    function editUser()
    {
        editFun(id);
    }


    return (
        <div className="bg-blue-400 text-center p-4 text-white rounded-2xl hover:bg-green-400 duration-100">
            <h3 className="text-lg mb-4">ID : {id}</h3>
            <h3 className="text-xl font-bold mb-4">Name : {uName}</h3>
            <h3 className="text-lg font-semibold mb-4">Age : {age}</h3>
            <div className="container w-3/12 mx-auto">
                <img src={gender==="male"?male:female} alt="Gender image" className="w-full rounded-2xl" />
            </div>
            <div className="button-sec flex w-8/12 mx-auto justify-between my-3">
            <button onClick={deleteUser}><FontAwesomeIcon  icon={faTrash} className="text-xl text-red-600 cursor-pointer" /></button>
                
                <FontAwesomeIcon onClick={editUser} icon={faPen} className="text-xl text-emerald-700 cursor-pointer" /> 
            </div>
        </div>
    )
}

export default User
