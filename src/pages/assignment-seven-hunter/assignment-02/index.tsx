import { Fragment, ReactElement, useMemo } from 'react'
import dummyUserService from '@/api/manual/dummy-service/user'
import MainLayout from '@/layouts/main-layout'
import RootLayout from '@/layouts/root-layout'
import { BreadcrumbItem, Breadcrumbs, Card, CardBody } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import useLoadingScreen from '@/hooks/useLoadingScreen'
const ReactJson = dynamic(() => import('react-json-view'), {
  ssr: false
})

type Props = {}

const Assignment2 = (props: Props) => {
  const loadingScreen = useLoadingScreen()
  const { data: userList } = useQuery<TResponseUser>({
    queryKey: ['user'],
    queryFn: () => dummyUserService.get()
  })

  const DepartmentList: DepartmentListType = useMemo(() => {
    loadingScreen.start({ key: 'assignment-1' })
    if (!userList) return {}

    const result: { [department: string]: TDepartment & { maxAge: number; minAge: number } } = {}

    userList.users.forEach(user => {
      const department = user.company?.department ?? 'Unknown'

      if (!result[department]) {
        result[department] = {
          male: 0,
          female: 0,
          maxAge: 0,
          minAge: 0,
          ageRange: '',
          hair: {},
          addressUser: {}
        }
      }

      if (user.gender === 'male') {
        result[department].male += 1
      } else if (user.gender === 'female') {
        result[department].female += 1
      }

      if (user.age) {
        result[department].maxAge = Math.max(result[department].maxAge, user.age)
        result[department].minAge = Math.min(result[department].minAge, user.age)
      }

      if (!result[department].hair) {
        result[department].hair = {}
      }

      const hairColor = user.hair?.color || 'Unknown'
      result[department].hair![hairColor] = (result[department].hair![hairColor] ?? 0) + 1

      if (result[department].addressUser) {
        const fullName = `${user.firstName}${user.lastName}`
        const postalCode = user.address?.postalCode ?? '-'
        result[department].addressUser![fullName] = postalCode
      }
    })

    const cleanedResult: DepartmentListType = {}

    Object.entries(result).forEach(([deptName, dept]) => {
      const { maxAge, minAge, ...rest } = dept
      cleanedResult[deptName] = {
        ...rest,
        ageRange: `${minAge}-${maxAge}`
      }
    })

    loadingScreen.stop({ key: 'assignment-1' })
    return cleanedResult
  }, [userList])

  return (
    <Fragment>
      <Breadcrumbs>
        <BreadcrumbItem>แบบทดสอบ Seven Hunter</BreadcrumbItem>
        <BreadcrumbItem>แบบทดสอบ : Auto Delete Todo List</BreadcrumbItem>
      </Breadcrumbs>

      <h1 className='mt-5 text-2xl font-bold text-default-600'>แบบทดสอบ : Create Date from API</h1>

      <Card className='mt-5 p-4'>
        <CardBody>
          <div className='grid grid-cols-2 gap-5'>
            <div>
              <p className='text- font-semibold'>Before Data</p>
              <div className='mt-2 text-sm'>
                <ReactJson
                  name={false}
                  src={userList?.users || []}
                  theme={'rjv-default'}
                  collapsed={false}
                  displayDataTypes={true}
                  quotesOnKeys={false}
                  iconStyle='triangle'
                />
              </div>
            </div>
            <div>
              <p className='text-lg font-semibold'>After Data</p>
              <div className='mt-2 text-sm'>
                <ReactJson
                  name={false}
                  src={DepartmentList}
                  theme={'rjv-default'}
                  collapsed={false}
                  displayDataTypes={true}
                  quotesOnKeys={false}
                  iconStyle='triangle'
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default Assignment2
Assignment2.auth = false

Assignment2.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <RootLayout>
        <MainLayout>{page}</MainLayout>
      </RootLayout>
    </Fragment>
  )
}
