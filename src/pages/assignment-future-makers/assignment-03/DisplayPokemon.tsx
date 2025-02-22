import { PokemonQuery } from '@/graphql/generated'
import React, { Fragment } from 'react'
import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  BreadcrumbItem,
  Breadcrumbs,
  Chip,
  Select,
  SelectItem,
  Image,
  Divider,
  Spacer
} from '@heroui/react'

type Props = {
  pokemon?: PokemonQuery['pokemon'] | undefined | null
}

const DisplayPokemon = ({ pokemon }: Props) => {
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

  return (
    <Fragment>
      <div className='flex gap-5'>
        <Image
          src={pokemon?.image || ''}
          alt={`image pokemon ${pokemon?.name}` || ''}
          width={170}
          height={170}
          radius='lg'
          className='object-contain p-1'
        />
        <section className='flex flex-col'>
          <p className='text-sm font-semibold'>No: {pokemon?.number}</p>
          <section className='flex items-center gap-1'>
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
          </section>

          <p className='mt-2 text-medium font-semibold'>Resistant</p>
          <section className='flex items-center gap-2'>
            {pokemon?.resistant?.map((type, index) => (
              <Chip
                key={index}
                radius='sm'
                className='text-white'
                style={{ backgroundColor: type ? colorPokemonType[type.toLowerCase()] : '#fff' }}>
                {type}
              </Chip>
            ))}
          </section>

          <p className='mt-2 text-medium font-semibold'>Weaknesses</p>
          <section className='flex items-center gap-2'>
            {pokemon?.weaknesses?.map((type, index) => (
              <Chip
                key={index}
                radius='sm'
                className='text-white'
                style={{ backgroundColor: type ? colorPokemonType[type.toLowerCase()] : '#fff' }}>
                {type}
              </Chip>
            ))}
          </section>
        </section>
      </div>
      <div className='mt-5 flex gap-5'>
        <section className='flex flex-1 flex-col overflow-hidden rounded-lg border'>
          <p className='bg-default-100 px-6 py-2 text-lg font-bold text-default-700'>Fast Skill</p>
          <div className='flex flex-col gap-1 px-6 py-2'>
            {pokemon?.attacks?.fast?.map((skill, index) => (
              <div key={index} className='grid grid-cols-3 gap-2'>
                {skill?.name}
                <Chip
                  key={index}
                  radius='sm'
                  className='text-white'
                  style={{ backgroundColor: skill?.type ? colorPokemonType[skill?.type.toLowerCase()] : '#fff' }}>
                  {skill?.type}
                </Chip>
                {skill?.damage || '-'}
              </div>
            ))}
          </div>
        </section>
        <section className='flex flex-1 flex-col overflow-hidden rounded-lg border'>
          <p className='bg-default-100 px-6 py-2 text-lg font-bold text-default-700'>Special Skill</p>
          <div className='flex flex-col gap-1 px-6 py-2'>
            {pokemon?.attacks?.special?.map((skill, index) => (
              <div key={index} className='grid grid-cols-3 gap-2'>
                {skill?.name}
                <Chip
                  key={index}
                  radius='sm'
                  className='w-ful text-white'
                  style={{ backgroundColor: skill?.type ? colorPokemonType[skill?.type.toLowerCase()] : '#fff' }}>
                  {skill?.type}
                </Chip>
                {skill?.damage}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className='mt-5'>
        <p className='text-lg font-semibold'>Evolution</p>
      </section>
    </Fragment>
  )
}

export default DisplayPokemon
