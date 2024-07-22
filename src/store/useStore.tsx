import { create, StoreApi } from 'zustand'
import { devtools } from 'zustand/middleware'
import { useShallow } from 'zustand/react/shallow'

import { createAppSlice, IAppSlice } from '@/store/slices/app/app.slice'
import { createContentSlice, IContentSlice } from '@/store/slices/content/content.slice'

export const useStore = create(
  devtools(
    () => ({
      ...createAppSlice(),
      ...createContentSlice(),
    }),
    {
      enabled: true,
      name: 'store',
    },
  ),
)

export type Store = ReturnType<StoreApi<IAppSlice & IContentSlice>>

// entire state selector (avoid usage if possible)
export const useStoreState = () => useStore(useShallow((state: Store) => state))

// app state selector
export const useAppState = () => useStore(useShallow((state: Store) => state.app))

// content state selector
export const useContentState = () => useStore(useShallow((state: Store) => state.content))
