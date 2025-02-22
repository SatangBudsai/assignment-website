import Icon from '@/components/icon'
import React, { Fragment } from 'react'

type Props = {}

const NotFoundPokemon = (props: Props) => {
  return (
    <Fragment>
      <div className='flex w-fit flex-col items-center gap-3'>
        <Icon icon='icon-park-solid:pokeball-one' width='200' height='200' className='text-default-300' />
        <h2 className='text-4xl font-bold text-default-300'>ไม่พบ Pokemon</h2>
      </div>
    </Fragment>
  )
}

export default NotFoundPokemon
