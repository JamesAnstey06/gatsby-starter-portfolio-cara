/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`

  return (
    <Box as="footer" variant="footer" color="black">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3, color: "black" }}
        onClick={() => {
          const next = isDark ? `light` : `dark`
          setColorMode(next)
          document.documentElement.classList.value = `theme-ui-${next}`
        }}
        type="button"
        data-testid="color-mode-toggle"
        aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `black`,
          fontWeight: `semibold`,
          a: { color: `black` },
        }}
      >
        {isDark ? (
          <img width="30" height="30" src="https://th.bing.com/th/id/OIP.ReFH0NCT8zrXtuz_2-ByowAAAA?w=145&h=150&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="LekoArts Logo" />
        ) : (
          <img width="30" height="30" src="https://th.bing.com/th/id/OIP.ReFH0NCT8zrXtuz_2-ByowAAAA?w=145&h=150&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="LekoArts Logo" />
        )}
        {` `}
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://www.queenelizabeths.com/"
        >
         Theme   
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.queenelizabeths.com/"
        >
          James Anstey 
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
