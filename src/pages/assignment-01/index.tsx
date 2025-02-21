import MainLayout from '@/layouts/main-layout'
import { BreadcrumbItem, Breadcrumbs, Button, Card, CardBody } from '@heroui/react'
import { Fragment, ReactElement, useState } from 'react'
import dataAutoDeleteTodoList from '@/assets/assignment/data-auto-delete-todo-list.json'
import DisplayWithType from './DisplayWithType'
import RootLayout from '@/layouts/root-layout'

export type itemType = {
  name: string
  type: string
}

const Assignment1 = () => {
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
      <Breadcrumbs>
        <BreadcrumbItem>แบบทดสอบ Seven Hunter</BreadcrumbItem>
        <BreadcrumbItem>แบบทดสอบที่ 1 : Auto Delete Todo List</BreadcrumbItem>
      </Breadcrumbs>

      <h1 className='mt-5 text-2xl font-bold text-default-600'>แบบทดสอบที่ 1 : Auto Delete Todo List</h1>
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

export default Assignment1
Assignment1.auth = false

Assignment1.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <RootLayout>
        <MainLayout>{page}</MainLayout>
      </RootLayout>
    </Fragment>
  )
}
