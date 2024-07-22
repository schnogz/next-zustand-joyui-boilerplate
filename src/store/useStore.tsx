import { create } from 'zustand'
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
export type Store = ReturnType<typeof useStore.getState>

// entire state selector (avoid usage if possible)
export const useStoreState = () => useStore(useShallow((state) => state))

// app state selector
export const useAppState = () => useStore(useShallow((state) => state.app as IAppSlice))

// content state selector
export const useContentState = () => useStore(useShallow((state) => state.content as IContentSlice))
