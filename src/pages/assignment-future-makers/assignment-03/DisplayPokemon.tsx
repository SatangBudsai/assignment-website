import { PokemonQuery } from '@/graphql/generated'
import React, { Fragment } from 'react'
import { Chip, Image, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@heroui/react'
import Icon from '@/components/icon'
import { useRouter } from 'next/router'

type Props = {
  pokemon?: PokemonQuery['pokemon'] | undefined | null
}

const DisplayPokemon = ({ pokemon }: Props) => {
  const router = useRouter()
  const colorPokemonType: { [key: string]: string } = {
    fighting: '#C03028',
    psychic: '#F85888',
    poison: '#A040A0',
    dragon: '#7038F8',
    ghost: '#705898',
    dark: '#705848',
    ground: '#E0C068',
    fire: '#ED0B2F',
    fairy: '#EE99AC',
    water: '#0C78ED',
    flying: '#A890F0',
    normal: '#A8A878',
    rock: '#B8A038',
    electric: '#F7B10A',
    bug: '#A8B820',
    grass: '#11B523',
    ice: '#16F2E9',
    steel: '#8F9493'
  }

  const handleClickEvo = (name?: string | null) => {
    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, search: name }
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <Fragment>
      <section className='flex gap-5'>
        <Image
          src={pokemon?.image || ''}
          alt={`image pokemon ${pokemon?.name}` || ''}
          width={175}
          height={175}
          className='object-contain'
        />
        <div className='flex flex-col'>
          <p className='text-sm font-semibold'>No: {pokemon?.number}</p>
          <div className='flex items-center gap-1'>
            <p className='text-xl font-semibold'>{pokemon?.name}</p>
            {pokemon?.types?.map((type, index) => (
              <Chip
                key={index}
                radius='sm'
                className='text-white'
                style={{ backgroundColor: type ? colorPokemonType[type.toLowerCase()] : '#fff' }}>
                {type}
              </Chip>
            ))}
          </div>

          <p className='mt-2 text-medium font-semibold'>Resistant</p>
          <div className='flex items-center gap-2'>
            {pokemon?.resistant?.map((type, index) => (
              <Chip
                key={index}
                radius='sm'
                className='text-white'
                style={{ backgroundColor: type ? colorPokemonType[type.toLowerCase()] : '#fff' }}>
                {type}
              </Chip>
            ))}
          </div>

          <p className='mt-2 text-medium font-semibold'>Weaknesses</p>
          <div className='flex items-center gap-2'>
            {pokemon?.weaknesses?.map((type, index) => (
              <Chip
                key={index}
                radius='sm'
                className='text-white'
                style={{ backgroundColor: type ? colorPokemonType[type.toLowerCase()] : '#fff' }}>
                {type}
              </Chip>
            ))}
          </div>
        </div>
      </section>

      <p className='mt-5 font-semibold'>Move Skill</p>
      <section className='mt-2 flex gap-5'>
        <Table aria-label='Fast move pokemon table' removeWrapper>
          <TableHeader>
            <TableColumn>Fast move</TableColumn>
            <TableColumn>Type</TableColumn>
            <TableColumn>Damage</TableColumn>
          </TableHeader>
          <TableBody>
            {(pokemon?.attacks?.fast || [])?.map((skill, index) => (
              <TableRow key={index}>
                <TableCell>{skill?.name}</TableCell>
                <TableCell>
                  <Chip
                    key={index}
                    radius='sm'
                    className='text-white'
                    style={{ backgroundColor: skill?.type ? colorPokemonType[skill?.type.toLowerCase()] : '#fff' }}>
                    {skill?.type}
                  </Chip>
                </TableCell>
                <TableCell> {skill?.damage || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table aria-label='Special move pokemon table' removeWrapper>
          <TableHeader>
            <TableColumn>Special move</TableColumn>
            <TableColumn>Type</TableColumn>
            <TableColumn>Damage</TableColumn>
          </TableHeader>
          <TableBody>
            {(pokemon?.attacks?.special || [])?.map((skill, index) => (
              <TableRow key={index}>
                <TableCell>{skill?.name}</TableCell>
                <TableCell>
                  <Chip
                    key={index}
                    radius='sm'
                    className='text-white'
                    style={{ backgroundColor: skill?.type ? colorPokemonType[skill?.type.toLowerCase()] : '#fff' }}>
                    {skill?.type}
                  </Chip>
                </TableCell>
                <TableCell> {skill?.damage || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <p className='text-lg font-semibold'>Evolution</p>
      <section className='mt-5 flex'>
        {(pokemon?.evolutions || []).length > 0 ? (
          <>
            {(pokemon?.evolutions || []).map((item, index) => (
              <div key={index} className='flex items-center justify-center'>
                <div
                  className='flex cursor-pointer flex-col items-center justify-center'
                  onClick={() => handleClickEvo(item?.name)}>
                  <Image
                    src={item?.image || ''}
                    alt={`image pokemon ${item?.name}` || ''}
                    width={120}
                    height={120}
                    className='object-contain'
                  />
                  {item?.name}
                </div>
                {index + 1 !== (pokemon?.evolutions || []).length && (
                  <Icon icon='solar:alt-arrow-right-line-duotone' width='24' height='24' className='mx-6' />
                )}
              </div>
            ))}
          </>
        ) : (
          'ไม่มีร่างวิวัฒนาการ'
        )}
      </section>
    </Fragment>
  )
}

export default DisplayPokemon
