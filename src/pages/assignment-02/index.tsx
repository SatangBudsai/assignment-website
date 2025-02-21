import MainLayout from '@/layouts/main-layout'
import { Button, Card, CardBody } from '@heroui/react'
import { Fragment, ReactElement } from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <Fragment>
      <h1 className='text-2xl font-bold'>แบบทดสอบ 02: Create Date from API</h1>
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
