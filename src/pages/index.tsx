import MainLayout from '@/layouts/main-layout'
import { Button, Card, CardBody } from '@heroui/react'
import { useRouter } from 'next/router'
import { Fragment, ReactElement } from 'react'

type Props = {}

const Home = (props: Props) => {
  const router = useRouter()

  return (
    <Fragment>
      <h1 className='text-2xl font-bold text-primary'>แบบทดสอบ Seven Hunter</h1>

      <Card className='mt-5 p-2'>
        <CardBody>
          <div className='flex gap-5'>
            <Button
              variant='ghost'
              color='default'
              className='h-28'
              onPress={() => {
                router.push('/assignment-01')
              }}>
              <div className='flex flex-col items-center'>
                <p className='text-xl font-semibold'>แบบทดสอบ 01</p>
                <p className='text-xl'>Auto delete todo list</p>
              </div>
            </Button>
            <Button
              variant='ghost'
              color='default'
              className='h-28'
              onPress={() => {
                router.push('/assignment-02')
              }}>
              <div className='flex flex-col items-center'>
                <p className='text-xl font-semibold'>แบบทดสอบ 02</p>
                <p className='text-xl'>ACreate data from API</p>
              </div>
            </Button>
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
