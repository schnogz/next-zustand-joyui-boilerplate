import { produce } from 'immer'

import type { IAppSlice } from '@/store/slices/app/app.slice'
import { Store, useStore } from '@/store/useStore'

export const toggleSidebarIsOpen = () => {
  useStore.setState(
    produce<Store>((state: IAppSlice) => {
      state.app.sidebarIsOpen = !state.app.sidebarIsOpen
    }),
    false,
    'toggleSidebarIsOpen',
  )
}
