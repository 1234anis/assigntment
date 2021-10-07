import React,{useEffect,useState} from 'react';
import './App.css';


const App = () => {
  const[users,setUsers]=useState([]);

    useEffect(()=>{
        getUser();
        
    },[]);
    const getUser= async()=>{
        const url=`https://jsonplaceholder.typicode.com/users`;
        fetch(url).then((res)=>res.json()).then((data)=>{
        setUsers(data);
        console.log(data);
        }).catch((error)=>{
            console.log(error);
        })
        
    }

  
  return (<>
  
  <main>
     
  
      

        { users.map((currentElements)=>{ return (
          <div>
          
      

 <section className="section1">
 <h1>Section2</h1>
 <div className="content">
   <div className="left">
 <div className="card">
 <div id="div1" className="pie-chart"> </div> 
</div>
   </div>
   <div className="right">
     <div className="card"> 13.5 %</div>
   
   <div className="card">         <div key={currentElements.id} className="div2">
         
         <p>Name:{currentElements.name}</p>
         <p>UserName:{currentElements.username}</p>
         <p>email.Id :{currentElements.email}:</p>
         <img src="https://picsum.phs/320/160.jpg" alt="default-image"/>
         </div></div>
  </div>
   
 </div>
  </section>
<div className="div4" >
<table>
  <tr>
    <th>S.NO  </th>
    <th>name</th>
    <th>username</th>
    <th>city</th>
    <th>pincode</th>
    <th>company name</th>
  </tr>
  <tr>
    <td>{currentElements.id}</td>
    <td>{currentElements.name}</td>
    <td>{currentElements.username}</td>
    <td>{currentElements.address.city}</td>
    <td>{currentElements.address.zipcode}</td>
    <td>{currentElements.company.name}</td>
  </tr>
</table>

</div>

          </div>
        )

        })}
  
    
    
  </main>
  {/* <section className="section1">
 <h1>Section2</h1>
 <div className="content">
   <div className="left">
 <div className="card">card1
</div>
   </div>
   <div className="right">
     <div className="card"> card2</div>
   
   <div className="card"> card3</div>
  </div>
   
 </div>
  </section> */}
      
  </>
  )
}

export default App;
