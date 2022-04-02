import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {


    fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((users) => setMonsters(users))

  }, [])


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  useEffect(() => {
 const    newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])


  return (
    <div className="App">
      <h1 className='app-title'>Monster's Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} className='search-box' placeholder="Search Monsters" />

      <CardList monsters={filteredMonsters} />
    </div>
  )

}





//     return (

//     );
//   }
// }

export default App;
