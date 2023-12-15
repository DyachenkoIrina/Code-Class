import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, Image, Text, ButtonGroup, Button, UnorderedList, ListItem } from '@chakra-ui/react'

type Props = {}

export default function CourseCard({ path }: Props) {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={path.img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{path.name}</Heading>
      <UnorderedList>
        {path.description.map((el) => <ListItem>{el}</ListItem>)}
      </UnorderedList>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}