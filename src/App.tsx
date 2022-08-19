import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/fetch.utils';
export type Monster = {
  id: string;
  name: String;
  email: string;
}

const App = () => {

  const [searchField, setSearchField] = useState<string>('')
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
   
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      setMonsters(users)
    }

fetchUsers()
  }, [])


  const onSearchChange = (event: ChangeEvent<HTMLInputElement>):void => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  }

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
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


export default App;
