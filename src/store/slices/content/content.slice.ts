export type IContentSlice = {
  title: string
}

export const initialContentState = {
  title: 'NextJs + MUI Joy + Zustand Boilerplate',
}

export const createContentSlice = (): { content: IContentSlice } => ({
  content: { ...initialContentState },
})
