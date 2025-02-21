import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { itemType } from '.'
import { Button, Chip } from '@heroui/react'
import { useTimer } from 'react-timer-hook'

type Props = {
  item: itemType
  items: itemType[]
  setItems: Dispatch<SetStateAction<itemType[]>>
  mainList: itemType[]
  setMainList: Dispatch<SetStateAction<itemType[]>>
}

const DisplayItem = ({ item, items, setItems, mainList, setMainList }: Props) => {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 5)

  const { seconds } = useTimer({
    expiryTimestamp: time,
    autoStart: true,
    onExpire: () => onMoveItem()
  })

  const onMoveItem = () => {
    const newItemsList = items.filter(t => t.name !== item.name)

    setItems(newItemsList)
    setMainList([...mainList, item])
  }

  return (
    <Button variant='ghost' radius='md' size='lg' key={item.name} onPress={onMoveItem}>
      <p>{item.name} </p>
      <Chip size='sm' variant='solid' color='warning'>
        {seconds}s
      </Chip>
    </Button>
  )
}

export default DisplayItem
