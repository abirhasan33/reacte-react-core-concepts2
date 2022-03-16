import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// function App() {
//   const products = [
//     {name: 'laptop', price: '75000'},
//     {name: 'phone', price: '50000'},
//     {name: 'Wacth', price: '5000'},
//     {name: 'Tep', price: '35000'},
//   ]
//   return (
//     <div className="App">
//       {
//         products.map(products => <Product name={products.name} price={products.price}></Product>)
//       }
//       {/* <Product name="Leptop" price="47000"></Product>
//       <Product name="Phone" price="75000"></Product>
//       <Product name="Watch" price="5000"></Product> */}
//     </div>
//   );
// }

// function Product(props){
//   return(
//     <div className='product'>
//       <h3>Name: {props.name}</h3>
//       <p>Peice: {props.price}</p>
//     </div>
//   )
// }



function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser () {
  const [users, setUsers] = useState([]);
  // useEffect( () => {},[])
  useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email} phone={user.phone}></User>)
      }
    </div>
  )
}

function User (props){
  return(
    <div style={{padding: '15px', background: 'lightpink', border: '1px solid maroon', margin: '15px', borderRadius: '20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

// function Counter(){
//   const [count, setCount] = useState(55);

//   const incteaseCount = () => setCount(count + 1);
//   const decteaseCount = () => setCount(count - 1);
  // const incteaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };

//   return(
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={incteaseCount}>Increase</button>
//         <button onClick={decteaseCount}>Decrease</button>
//       </div>
//   )
// }

export default App;
