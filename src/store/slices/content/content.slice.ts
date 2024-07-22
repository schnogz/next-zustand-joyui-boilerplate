export type IContentSlice = {
  title: string
}

export const initialContentState = {
  title: 'NextJs + Joy UI + Zustand Boilerplate',
}

export const createContentSlice = (): { content: IContentSlice } => ({
  content: { ...initialContentState },
})
