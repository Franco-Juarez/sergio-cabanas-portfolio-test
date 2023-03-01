import { Menu, 
    MenuButton, 
    MenuList, 
    MenuItem,
    IconButton, 
    Divider,
    useBreakpointValue,
    UnorderedList,
    ListItem,
    Link
  } from "@chakra-ui/react";

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

const MenuResponsive = () => {

  const breakpoint = useBreakpointValue(
    {
      base: 'base',
      md: 'solid',
    },
    {
      fallback: 'md',
    },
  )

  if (breakpoint == "base") {
      return (
          <Menu>
            { ( {isOpen} ) => (
            <>
              <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={ isOpen ? <CloseIcon color={"purple.300"}  bg={"transparent"} /> : <HamburgerIcon color={"purple.300"} w={8} h={8} /> }
              bg={"transparent"}
              _hover={{bg:"transparent"}}
              _active={{bg:"transparent"}}
              border={"none"}
              color={"white"}
              />
              <MenuList zIndex={100}>
                <MenuItem fontWeight={"bold"}>
                  <Link href="#about">
                    ABOUT ME
                  </Link>
                </MenuItem>
                <Divider/>
                <MenuItem fontWeight={"bold"}>
                  <Link href="#workSection">
                    MY WORK
                  </Link>
                </MenuItem>
                <Divider/>
                <MenuItem fontWeight={"bold"}>
                  <Link href="#faqs">
                    FAQS
                  </Link>
                </MenuItem>
                <Divider/>
                <MenuItem fontWeight={"bold"}>
                  <Link href="#contact">
                    GET IN TOUCH
                  </Link>
                </MenuItem>
              </MenuList>
            </>
            )}
          </Menu>
    )
  } return (
      <UnorderedList fontWeight={"semibold"} color={"white"} display={"flex"} justifyContent="center" alignItems={"center"} >
        <ListItem pl={4} listStyleType={"none"} ><Link className="hover-underline-animation" _hover={{textDecoration:"none"}} fontSize={{base:"sm", lg: "lg"}} href="#about">ABOUT ME</Link></ListItem>
        <ListItem pl={4} listStyleType={"none"} ><Link className="hover-underline-animation" _hover={{textDecoration:"none"}} ml={6} fontSize={{base:"sm", lg: "lg"}} href="#workSection">MY WORK</Link></ListItem>
        <ListItem pl={4} listStyleType={"none"} ><Link className="hover-underline-animation" _hover={{textDecoration:"none"}} ml={6} fontSize={{base:"sm", lg: "lg"}} href="#faqs">FAQS</Link></ListItem>
        <ListItem pl={4} listStyleType={"none"} ><Link className="hover-underline-animation" _hover={{textDecoration:"none"}} ml={6} fontSize={{base:"sm", lg: "lg"}} href="#contact">GET IN TOUCH</Link></ListItem>
      </UnorderedList>
    )
  }

export default MenuResponsive;