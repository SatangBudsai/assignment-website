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
            title: '01: Auto delete todo list'
          },
          {
            key: 'assignment-seven-hunter-02',
            href: '/assignment-seven-hunter/assignment-02',
            title: '02: Create data from API'
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
            title: '03: Search Pokemon GraphQL'
          }
        ]
      }
    ]
    return items
  }

  return { data }
}

export default useSectionItems
