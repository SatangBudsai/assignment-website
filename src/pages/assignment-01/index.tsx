import MainLayout from '@/layouts/main-layout'
import { Button, Card, CardBody } from '@heroui/react'
import { Fragment, ReactElement, useState } from 'react'
import dataAutoDeleteTodoList from '@/assets/assignment/data-auto-delete-todo-list.json'
import DisplayWithType from './DisplayWithType'

export type itemType = {
  name: string
  type: string
}

const Home = () => {
  const [mainList, setMainList] = useState<itemType[]>(dataAutoDeleteTodoList || [])
  const [fruit, setFruit] = useState<itemType[]>([])
  const [vegetable, setVegetable] = useState<itemType[]>([])

  const onClickItem = (item: itemType) => {
    const newMainList = mainList.filter(t => t.name !== item.name)
    setMainList(newMainList)

    switch (item.type) {
      case 'Fruit':
        setFruit([...fruit, item])
        break

      case 'Vegetable':
        setVegetable([...vegetable, item])
        break
    }
  }

  return (
    <Fragment>
      <h1 className='text-2xl font-bold'>แบบทดสอบ 01: Auto Delete Todo List</h1>
      <Card className='mt-5 p-4'>
        <CardBody>
          <div className=' grid grid-cols-3 gap-5'>
            <section className='flex flex-col gap-3'>
              {mainList.map((item: itemType) => (
                <Button
                  variant='ghost'
                  radius='md'
                  size='lg'
                  key={item.name}
                  onPress={() => {
                    onClickItem(item)
                  }}>
                  {item.name}
                </Button>
              ))}
            </section>

            <DisplayWithType
              typeName='Fruit'
              items={fruit}
              setItems={setFruit}
              mainList={mainList}
              setMainList={setMainList}
            />
            <DisplayWithType
              typeName='Vegetable'
              items={vegetable}
              setItems={setVegetable}
              mainList={mainList}
              setMainList={setMainList}
            />
          </div>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default Home
Home.auth = false

Home.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}
