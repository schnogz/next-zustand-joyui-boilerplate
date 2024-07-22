import { Button } from '@mui/joy'

import { toggleSidebarIsOpen } from '@/store/slices/app/app.mutations'
import { useContentState, useAppState } from '@/store/useStore'

export default function Index() {
  const { title } = useContentState()
  const { sidebarIsOpen } = useAppState()
  return (
    <>
      <h1>{title}</h1>
      <h2>isOpen: {sidebarIsOpen}</h2>
      <Button onClick={toggleSidebarIsOpen}>Update</Button>
    </>
  )
}
