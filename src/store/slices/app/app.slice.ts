export type IAppSlice = {
  sidebarIsOpen: boolean
}

export const initialAppState = {
  sidebarIsOpen: true,
}

export const createAppSlice = (): { app: IAppSlice } => ({
  app: { ...initialAppState },
})
