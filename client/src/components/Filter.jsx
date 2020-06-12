import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

const Filter = ({setFilter, filterBy, searchField, setSearchField})=> (
      <Menu secondary>
        <Menu.Item
          active={filterBy === 'all'}
          onClick={setFilter.bind(this, 'all')}
        >все</Menu.Item>
        <Menu.Item
          active={filterBy === 'krovlya'}
          onClick={setFilter.bind(this, 'krovlya')}
        >кровля</Menu.Item>
        <Menu.Item
          active={filterBy === 'vodostok'}
          onClick={setFilter.bind(this, 'vodostok')}
        >водосточная система</Menu.Item>
        <Menu.Item>
          <Input placeholder="поиск..." onChange={e => setSearchField(e.target.value)} value={searchField} icon="search"></Input>
        </Menu.Item>
      </Menu>
    )

export default Filter