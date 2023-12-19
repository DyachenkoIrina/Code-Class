import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Image,
  Text,
  ButtonGroup,
  Button,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

type Props = {};

export default function CourseCard({ path }: Props) {
  return (
    <Card border="2px solid" maxWidth="600px">
      <CardBody>
        <Image src={path.img} alt="Green double couch with wooden legs" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{path.name}</Heading>
          <UnorderedList>
            {path.description.map((el) => (
              <ListItem>{el}</ListItem>
            ))}
          </UnorderedList>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
}
