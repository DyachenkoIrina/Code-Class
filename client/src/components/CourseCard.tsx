import React from 'react';
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
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
