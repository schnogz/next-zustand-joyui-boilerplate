import { produce } from 'immer'

import { Store, useStore } from '@/store/useStore'

export const toggleSidebarIsOpen = () => {
  useStore.setState(
    produce<Store>((state: Store) => {
      state.app.sidebarIsOpen = !state.app.sidebarIsOpen
    }),
    false,
    'toggleSidebarIsOpen',
  )
}
