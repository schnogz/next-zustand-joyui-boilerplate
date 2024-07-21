import createCache from '@emotion/cache'
import CssBaseline from '@mui/joy/CssBaseline'
import { CssVarsProvider, getInitColorSchemeScript } from '@mui/joy/styles'
import { useServerInsertedHTML } from 'next/navigation'
import { ReactNode, useState } from 'react'

interface ThemeRegistryProps {
  children: ReactNode
  options: Parameters<typeof createCache>[0]
}
export default function ThemeRegistry(props: ThemeRegistryProps) {
  const { children, options } = props

  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options)
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: string[] = []
    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) {
      return null
    }
    let styles = ''
    for (const name of names) {
      styles += cache.inserted[name]
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    )
  })

  return (
    <CssVarsProvider defaultMode='dark'>
      <CssBaseline />
      {getInitColorSchemeScript({ defaultMode: 'system' })}
      {children}
    </CssVarsProvider>
  )
}
