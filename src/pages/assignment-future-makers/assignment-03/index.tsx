import MainLayout from '@/layouts/main-layout'
import RootLayout from '@/layouts/root-layout'
import React, { Fragment, ReactElement } from 'react'

type Props = {}

const Assignment3 = (props: Props) => {
  return <div>index</div>
}

export default Assignment3

Assignment3.auth = false

Assignment3.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <RootLayout>
        <MainLayout>{page}</MainLayout>
      </RootLayout>
    </Fragment>
  )
}
