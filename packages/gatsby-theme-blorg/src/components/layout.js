import React, { useContext } from 'react'
import Header from './header'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { ThemeContext } from 'gatsby-plugin-themes'
import { useSiteMetadata } from '../hooks'
import { FaAdjust } from 'react-icons/fa'
import { likeButton, tinted } from '../utils/styles'
import 'prism-themes/themes/prism-dracula.css'

export default ({ children, ...props }) => {

  const { theme, next } = useContext(ThemeContext)

  const { title } = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
      <Global styles={theme => ({
        body: {
          color: theme.color.text,
          background: theme.color.background,
        },
        a: {
          color: theme.color.primary,
          textDecoration: 'none',
          '&:hover': {
            color: theme.color.secondary,
            textDecoration: 'none',
          },
        },
        'tt,code,pre': {
          backgroundColor: `rgba(40, 41, 54, 1)`,
        }
      })}/>
      <Header title={title} {...props}>
        <button
          css={likeButton}
          onClick={() => next() }>
          <FaAdjust/>
        </button>
      </Header>
      <main css={theme => ({
        maxWidth: theme.maxWidth,
        margin: '0 auto',
        padding: '0 1.5em 2em',
      })}>
        { children }
      </main>
    </ThemeProvider>
  )
}
