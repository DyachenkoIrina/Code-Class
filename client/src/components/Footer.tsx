import React from 'react';

import { Stack, Link,  Image, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import codeClassLogo from '../../public/code-class-logo.svg'


    

// function CustomLink({ children, ...props }: LinkProps) {
//     return (
//       <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
//         {children}
//       </Link>
//     );
//   }
//  const links = ['Blog', 'Documentation', 'Careers', 'Sign up', 'Terms of use', 'Privacy policy'];

const accounts = [
  {
    url: 'https://github.com/MA-Ahmad/templateskart',
    label: 'Github Account',
    type: 'gray',
    icon: <FaGithub />
  },
  {
    url: 'https://twitter.com/muhammad_ahmaad',
    label: 'Twitter Account',
    type: 'twitter',
    icon: <FaTwitter />
  },
  {
    url: 'https://linkedin.com/in/muhammad-ahmad20',
    label: 'LinkedIn Account',
    type: 'linkedin',
    icon: <FaLinkedin />
  }
];

function Footer(): JSX.Element {
    
  return (
    <Stack
      maxW="5xl"
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: 'column', md: 'row' }}
    >
      <Link href="https://templateskart.com" isExternal>
        <Image w="100px" src={codeClassLogo} alt="TemplatesKart" />
      </Link>
        {/* <YandexMap/> */}
      
      {/* Desktop Screen */}
      {/* <HStack spacing={4} alignItems="center" d={{ base: 'none', md: 'flex' }}>
        {links.map((link, index) => (
          <CustomLink key={index}>{link}</CustomLink>
        ))}
      </HStack> */}


      {/* Mobile and Tablet Screens */}
      {/* <Stack d={{ base: 'flex', md: 'none' }} alignItems="center">
        <HStack alignItems="center">
          <CustomLink>Sign up</CustomLink>
          <Divider h="1rem" orientation="vertical" />
          <CustomLink>Blog</CustomLink>
          <Divider h="1rem" orientation="vertical" />
          <CustomLink>Career</CustomLink>
        </HStack>
        <HStack alignItems="center">
          <CustomLink>Documentation</CustomLink>
          <Divider h="1rem" orientation="vertical" />
          <CustomLink>Terms of use</CustomLink>
        </HStack>
        <CustomLink>Privacy policy</CustomLink>
      </Stack> */}

      <Stack direction="row" spacing={5} pt={{ base: 4, md: 0 }} alignItems="center">
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            icon={sc.icon}
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
}



export default Footer;