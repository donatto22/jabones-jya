import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const NavDrawer = ({ isOpen, onClose }) => {

    return (
        <Drawer isOpen={isOpen} onclose={onClose}>
            <DrawerOverlay/>

            <DrawerContent>
                <DrawerCloseButton />

                <DrawerHeader>
                    Jabones J&A
                </DrawerHeader>

                <DrawerBody>
                    <Stack>
                        <Box>
                            <Link>Inicio</Link>
                        </Box>

                        <Box>
                            <Link>Inicio</Link>
                        </Box>

                        <Box>
                            <Link>Inicio</Link>
                        </Box>

                        <Box>
                            <Link>Inicio</Link>
                        </Box>
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
