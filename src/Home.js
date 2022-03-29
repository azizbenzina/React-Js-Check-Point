const Home = ({clients}) => {

    return (  

<div className="home">
        {clients.map(client => (
    <div className="blog-preview" >
      <nav>
      <h2>{ client.lastName } { client.firstName }</h2>
        <h4>Age: </h4><label >{ client.age }</label>
      <h4>Date: </h4>{ client.date }
      <h4>Mail Adress: </h4>{ client.mail }
      <h4>Tel: </h4>+216 { client.tel }
      <h4>Speciality: </h4>{ client.speciality }
      </nav>
      <p>
          <br/>
        {client.description}
      </p>
    </div>
  ))}
    </div>
     
    );
}
 
export default Home ;
