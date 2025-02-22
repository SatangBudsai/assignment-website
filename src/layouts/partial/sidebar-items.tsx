import { type SidebarItem } from './sidebar-menu'
import TeamAvatar from './team-avatar'
import { Chip } from '@heroui/react'

const useSectionItems = () => {
  const data = () => {
    const items: SidebarItem[] = [
      {
        key: 'main-menu',
        title: '',
        items: [
          {
            key: 'home',
            href: '/',
            icon: 'solar:home-2-linear',
            title: 'หน้าหลัก'
          }
        ]
      },
      {
        key: 'assignment-seven-hunter',
        title: 'แบบทดสอบ seven hunter',
        items: [
          {
            key: 'assignment-seven-hunter-01',
            href: '/assignment-seven-hunter/assignment-01',
            icon: 'pepicons-pencil:circle',
            title: 'Auto delete todo list'
          },
          {
            key: 'assignment-seven-hunter-02',
            href: '/assignment-seven-hunter/assignment-02',
            icon: 'pepicons-pencil:circle',
            title: 'Create data from API'
          }
        ]
      },
      {
        key: 'assignment-future-makers',
        title: 'แบบทดสอบ Future Makers',
        items: [
          {
            key: 'assignment-future-makers-03',
            href: '/assignment-future-makers/assignment-03',
            icon: 'pepicons-pencil:circle',
            title: 'Search Pokemon GraphQL'
          }
        ]
      }
    ]
    return items
  }

  return { data }
}

export default useSectionItems
