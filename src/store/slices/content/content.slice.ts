export type IContentSlice = {
  content: {
    title: string
  }
}

export const initialContentState = {
  title: 'NextJs + Joy UI + Zustand Boilerplate',
}

export const createContentSlice = (): IContentSlice => ({
  content: { ...initialContentState },
})
