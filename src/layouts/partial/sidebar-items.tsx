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
        key: 'assignment',
        title: 'แบบทดสอบ Seven Hunter',
        items: [
          {
            key: 'assignment-01',
            href: '/assignment-01',
            title: '01: Auto delete todo list'
          },
          {
            key: 'assignment-02',
            href: '/assignment-02',
            title: '02: Create data from API'
          }
        ]
      }
    ]
    return items
  }

  return { data }
}

export default useSectionItems
