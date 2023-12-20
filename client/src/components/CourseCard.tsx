import React from 'react';
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

type Props = {
  path: PathType;
};
type PathType = {
  img: string;
  name: string;
  description: string[];
};

export default function CourseCard({ path }: Props): JSX.Element {
  return (
    <Card border="10px solid #D9D0FF" borderRadius="20px" maxWidth="600px">
      <CardBody>
        <Image src={path.img} alt="Green double couch with wooden legs" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading textAlign="center" paddingLeft="50px" size="lg">{path.name}</Heading>
          <UnorderedList>
            {path.description.map((el) => (
              <ListItem>{el}</ListItem>
            ))}
          </UnorderedList>
        </Stack>
      </CardBody>
    </Card>
  );
}
