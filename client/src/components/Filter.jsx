import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

const Filter = ({setFilter, filterBy, searchField, setSearchField})=> (
      <Menu secondary>
        <Menu.Item
          active={filterBy === 'all'}
          onClick={setFilter.bind(this, 'all')}
        >Все</Menu.Item>
        <Menu.Item
          active={filterBy === 'proflist'}
          onClick={setFilter.bind(this, 'proflist')}
        >Кровля</Menu.Item>
        <Menu.Item
          active={filterBy === 'vodostok'}
          onClick={setFilter.bind(this, 'vodostok')}
        >Водосточная система</Menu.Item>
       
      </Menu>
    )

export default Filter
/*<Menu.Item>
<Input placeholder="поиск..." 
onChange={e => setSearchField(e.target.value)} 
value={searchField} icon="search"></Input>
</Menu.Item>*/