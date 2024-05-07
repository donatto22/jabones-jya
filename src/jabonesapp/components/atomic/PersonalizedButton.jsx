import { Button } from "@chakra-ui/react"
import { IoIosArrowDroprightCircle } from "react-icons/io"

export const PersonalizedButton = ({ text, shadow }) => {
  return (
      <Button cursor='pointer' gap='6px' transition='all .2s'
          border='0' boxShadow={shadow && '0 0 2px var(--dark-brown)'} padding='.8em 1.4em' borderRadius='30px' bgColor='var(--soap)'
          sx={{
              '&:hover': {
                  bgColor: 'var(--brown)',
                  color: 'var(--white)'
              }
          }}>
          { text }
          <IoIosArrowDroprightCircle size='20px' />
      </Button>
  )
}
