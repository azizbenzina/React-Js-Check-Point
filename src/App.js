import Create from './Create';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <div className='image'>
             <img />
           </div>
           <Navbar/>

<div className='content'>
 {/*Routes:
 use Routes to switch between routes 
   Route:
   use route for single page */}
    <Create/>
 </div>

</div>
  );
}

export default App;
