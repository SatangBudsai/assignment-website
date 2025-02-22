import MainLayout from '@/layouts/main-layout'
import RootLayout from '@/layouts/root-layout'
import { BreadcrumbItem, Breadcrumbs, Button, Card, CardBody } from '@heroui/react'
import { useRouter } from 'next/router'
import { Fragment, ReactElement } from 'react'

type Props = {}

const Home = (props: Props) => {
  const router = useRouter()

  const assignmentList = [
    {
      header: 'แบบทดสอบ Seven Hunter',
      assignments: [
        { title: 'แบบทดสอบ 1', name: 'Auto delete todo list', href: '/assignment-seven-hunter/assignment-01' },
        { title: 'แบบทดสอบ 2', name: 'Create data from API', href: '/assignment-seven-hunter/assignment-02' }
      ]
    },
    {
      header: 'แบบทดสอบ Future Makers',
      assignments: [
        { title: 'แบบทดสอบ 3', name: 'Search Pokemon GraphQL', href: '/assignment-future-makers/assignment-03' }
      ]
    }
  ]

  return (
    <Fragment>
      <Breadcrumbs>
        <BreadcrumbItem>หน้าหลัก</BreadcrumbItem>
      </Breadcrumbs>

      {assignmentList.map((item, index) => (
        <Fragment key={index}>
          <h1 className='mt-5 text-2xl font-bold text-default-600'>{item.header}</h1>
          <Card className='mt-5 p-2'>
            <CardBody>
              <div className='flex gap-5'>
                {item.assignments.map((ass, indexAss) => (
                  <Button
                    key={indexAss}
                    variant='ghost'
                    color='default'
                    className='min-h-36 px-10'
                    onPress={() => {
                      router.push(`${ass.href}`)
                    }}>
                    <div className='flex flex-col items-center'>
                      <p className='text-xl font-semibold'>{ass.title}</p>
                      <p className='text-xl'>{ass.name}</p>
                    </div>
                  </Button>
                ))}
              </div>
            </CardBody>
          </Card>
        </Fragment>
      ))}
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
