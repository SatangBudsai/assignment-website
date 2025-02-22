import MainLayout from '@/layouts/main-layout'
import RootLayout from '@/layouts/root-layout'
import {
  Autocomplete,
  AutocompleteItem,
  BreadcrumbItem,
  Breadcrumbs,
  Image,
  Card,
  CardBody,
  Skeleton
} from '@heroui/react'
import React, { Fragment, Key, ReactElement, useCallback, useEffect, useState } from 'react'
import { useGetPokemonAllQuery, usePokemonQuery } from '@/graphql/generated'
import { useRouter } from 'next/router'
import { useDebounce } from 'use-debounce'
import DisplayPokemon from './DisplayPokemon'
import NotFoundPokemon from './NotFoundPokemon'

const Assignment3 = () => {
  const router = useRouter()
  const [selectedKey, setSelectedKey] = useState<Key | null>(null)
  const [value, setValue] = useState<string>('')
  const [debouncedValue] = useDebounce(value, 1000)
  const [debouncedLoading, setDebouncedLoading] = useState<boolean>(false)

  const pokemons = useGetPokemonAllQuery({
    variables: { first: 1000 }
  })

  const pokemon = usePokemonQuery({
    variables: { name: debouncedValue }
  })

  const onSelectionChange = (id: Key | null) => {
    setSelectedKey(id)
  }

  const onInputChange = (newValue: string) => {
    setDebouncedLoading(true)
    setValue(newValue)
  }
  console.log('zxccc', debouncedLoading)

  useEffect(() => {
    if (debouncedValue) {
      router.replace(
        {
          pathname: router.pathname,
          query: { ...router.query, search: debouncedValue }
        },
        undefined,
        { shallow: true }
      )
    }
    setDebouncedLoading(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  useEffect(() => {
    setValue((router.query.search as string) || '')
    setDebouncedLoading(false)
  }, [router.query.search])

  if (pokemons.loading) {
    return <></>
  }

  return (
    <Fragment>
      <Breadcrumbs>
        <BreadcrumbItem>แบบทดสอบ Future Makers</BreadcrumbItem>
        <BreadcrumbItem>แบบทดสอบ : Search Pokemon GraphQL</BreadcrumbItem>
      </Breadcrumbs>

      <h1 className='mt-5 text-2xl font-bold text-default-600'>แบบทดสอบ : Search Pokemon GraphQL</h1>
      <div className='mt-5'>
        <Autocomplete
          className='max-w-sm'
          defaultItems={(pokemons.data?.pokemons || []).flatMap(item => (item ? [item] : []))}
          label='ค้นหารายชื่อโปเกมอน'
          labelPlacement='inside'
          placeholder='กรุณากรอกชื่อโปเกมอน'
          variant='bordered'
          allowsCustomValue
          scrollShadowProps={{
            isEnabled: false
          }}
          inputValue={value}
          onInputChange={onInputChange}
          onSelectionChange={onSelectionChange}>
          {item => (
            <AutocompleteItem
              key={item?.id}
              textValue={item?.name || ''}
              startContent={
                <Image
                  src={item?.image || ''}
                  alt={item?.name || ''}
                  width={25}
                  height={25}
                  radius='sm'
                  className='object-contain'
                />
              }>
              {item?.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </div>

      <div className='mt-5'>
        {!!debouncedValue || debouncedLoading ? (
          pokemon.loading || debouncedLoading ? (
            <Skeleton className='h-[35rem] w-full rounded-2xl' />
          ) : !!pokemon.data?.pokemon ? (
            <Card className='p-5'>
              <CardBody>
                <section className='mt-5'>
                  <DisplayPokemon pokemon={pokemon.data?.pokemon} />
                </section>
              </CardBody>
            </Card>
          ) : (
            <NotFoundPokemon />
          )
        ) : (
          <NotFoundPokemon />
        )}
      </div>
    </Fragment>
  )
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
