import { useState} from "react";   
import { Button,Form } from 'react-bootstrap';

const Create = () => {
    const [ClientList,SetClientList]= useState([{
        firstName:'',lastName:'',description:'',age:null,date:'',mail:'',tel:'',speciality:''
    }]);
    
    const [FirstName,setFirstName]= useState('');
    const [LastName,setLastName]= useState('');
    const [Description,setDescription]= useState('');
    const [Age,setAge]= useState('');
    const [Date,setDate]= useState('');
    const [Speciality,setSpeciality]= useState('');
    const [Tel,setTel]= useState('');
    const [Mail,setMail]= useState('');
 
    const addClient = ()=>{
        const List = [{firstName:FirstName,lastName:LastName,description:Description,age:Age,date:Date,mail:Mail,tel:Tel,speciality:Speciality}];
        SetClientList(List);
        alert("Client added successfuly !");
    }
    return ( 
        <div >
            <div className="create"><h1>New Client</h1>
            <br />
            <form onSubmit={addClient}>
            <Form.Label>FirstName:</Form.Label>
                <input type="text" placeholder="Enter FirstName" required value={FirstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <Form.Label> LastName:</Form.Label>
                <input type="text" required value={LastName} placeholder="Enter LastName" onChange={(e)=>setLastName(e.target.value)}/>
                <Form.Label> Age:</Form.Label>
                <input type="number" required value={Age} placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/>
                <Form.Label> Date:</Form.Label>
                <input type="date" required value={Date}  onChange={(e)=>setDate(e.target.value)}/>
                <Form.Label> Phone Number:</Form.Label>
                <input type="telephone" required value={Tel}placeholder="+216" onChange={(e)=>setTel(e.target.value)}/>

                <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required value={Mail} onChange={(e)=>setMail(e.target.value)}/>
                
                
                <Form.Label >Speciality:</Form.Label>
                <select required value={Speciality} onChange={(e)=>setSpeciality(e.target.value)}>
                    <option value="Engineering and technology">Engineering And Technology</option>
                    <option value="Design">Design</option>
                    <option value="Management">Management</option>
                </select>
                <Form.Label> Description:</Form.Label>
                <textarea required value={Description} placeholder="Write Description" onChange={(e)=>setDescription(e.target.value)}></textarea>
                <Button variant="primary" type="submit">Add Client</Button>
            </form></div>
            <div className="home">
        {ClientList.map(client => (
    <div className="client-preview" >
      <nav>
      <h2>{ client.lastName } { client.firstName }</h2>
        <h5>Age: </h5><label >{ client.age }</label>
      <h5>Date: </h5>{ client.date }
      <h5>Mail Adress: </h5>{ client.mail }
      <h5>Tel: </h5>+216 { client.tel }
      <h5>Speciality: </h5>{ client.speciality }
      </nav>
      <p>
          <br/>
        {client.description}
      </p>
    </div>
  ))}
    </div>
        </div>
     );
}
 
export default Create;
