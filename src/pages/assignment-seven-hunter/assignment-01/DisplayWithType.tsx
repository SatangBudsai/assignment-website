import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { itemType } from '.'
import { Button } from '@heroui/react'
import DisplayItem from './DisplayItem'

type Props = {
  typeName: itemType['type']
  items: itemType[]
  setItems: Dispatch<SetStateAction<itemType[]>>
  mainList: itemType[]
  setMainList: Dispatch<SetStateAction<itemType[]>>
}

const DisplayWithType = ({ items, setItems, typeName, mainList, setMainList }: Props) => {
  return (
    <section className='overflow-hidden rounded-xl border-2'>
      <p className='bg-content2 p-2 text-center text-xl font-semibold'>{typeName}</p>
      <section className='flex flex-col gap-3 p-4'>
        {items.map(item => (
          <DisplayItem
            items={items}
            setItems={setItems}
            item={item}
            mainList={mainList}
            setMainList={setMainList}
            key={item.name}
          />
        ))}
      </section>
    </section>
  )
}

export default DisplayWithType
