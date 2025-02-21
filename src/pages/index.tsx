import MainLayout from '@/layouts/main-layout'
import RootLayout from '@/layouts/root-layout'
import { BreadcrumbItem, Breadcrumbs, Button, Card, CardBody } from '@heroui/react'
import { useRouter } from 'next/router'
import { Fragment, ReactElement } from 'react'

type Props = {}

const Home = (props: Props) => {
  const router = useRouter()

  return (
    <Fragment>
      <Breadcrumbs>
        <BreadcrumbItem>หน้าหลัก</BreadcrumbItem>
      </Breadcrumbs>

      <h1 className='mt-5 text-2xl font-bold text-default-600'>แบบทดสอบ Seven Hunter</h1>

      <Card className='mt-5 p-2'>
        <CardBody>
          <div className='flex gap-5'>
            <Button
              variant='ghost'
              color='default'
              className='min-h-36 px-10'
              onPress={() => {
                router.push('/assignment-01')
              }}>
              <div className='flex flex-col items-center'>
                <p className='text-xl font-semibold'>แบบทดสอบ 1</p>
                <p className='text-xl'>Auto delete todo list</p>
              </div>
            </Button>
            <Button
              variant='ghost'
              color='default'
              className='min-h-36 px-10'
              onPress={() => {
                router.push('/assignment-02')
              }}>
              <div className='flex flex-col items-center'>
                <p className='text-xl font-semibold'>แบบทดสอบ 2</p>
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
      <RootLayout>
        <MainLayout>{page}</MainLayout>
      </RootLayout>
    </Fragment>
  )
}
