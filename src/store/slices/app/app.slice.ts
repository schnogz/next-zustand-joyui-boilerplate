export type IAppSlice = {
  app: {
    sidebarIsOpen: boolean
  }
}

export const initialAppState = {
  sidebarIsOpen: true,
}

export const createAppSlice = (): IAppSlice => ({
  app: { ...initialAppState },
})
