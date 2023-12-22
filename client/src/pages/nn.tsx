{/* <></>
  <TabPanel marginLeft="120px" display="flex" gap="30px" flexWrap="wrap">
    {teachers.map((teacher) => (
      <Box maxWidth="500px" key={teacher.id} p={4} borderWidth="1px" borderRadius="20px">
        <Text fontWeight="600">{`Имя: ${teacher.name}`}</Text>
        <Text fontWeight="600">{`Почта: ${teacher.email}`}</Text>
        <Text fontWeight="600">Группы:</Text>
        <ul style={{ minHeight: '100px', listStyleType: 'none' }}>
          {teacher.Groups.map((group, id) => (
            <li key={id}>{group.group}</li>
          ))}
        </ul>

        <Center>
          <Flex gap="30px" alignItems="center" padding="10px 0px 10px 0px">
            <Button
              borderRadius="20px"
              backgroundColor="#D9D0FF"
              _hover={{ backgroundColor: '#c3b8f7' }}
              onClick={() => dispatch(setTeacherToDelete(teacher))}
            >
              Удалить учителя
            </Button>
            <Button
              borderRadius="20px"
              backgroundColor="#D7E8D7"
              _hover={{ backgroundColor: '#b8e3b8' }}
              onClick={() => dispatch(setSelectedTeacher({ teacher, groups }))}
            >
              Редактировать
            </Button>
          </Flex>
        </Center>
      </Box>
    ))}
  </TabPanel> */}