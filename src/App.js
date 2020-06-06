import React, {useState, useEffect} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

function App() {
const [monsters, setMonsters] = useState({
  monst: [],
});
const [searchField, setSearchField] =useState("")


useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( users => setMonsters({monst:users}))
}, [setMonsters]);
 
const handleChange = (e) =>{
  const value = e.target.value
  setSearchField(value)
};
 let {monst} = monsters;

 const filteredMonters = monst.filter(monster => {
   return monster.name.toLowerCase().includes(searchField.toLowerCase())
 });

  return (
    <div className="App">
      <h1>Monster's Rolodex</h1>
     <SearchBox handleChange={handleChange} placeholder="search monsters" />
      <CardList monsters={filteredMonters}/> 
    </div>
  );
}

export default App;
