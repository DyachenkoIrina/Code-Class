import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import CourseCard from './CourseCard'




export default function CourseOptions({}: Props) {

    const learningPaths = [
        {
          img: "https://static.tildacdn.com/tild3437-6464-4461-a664-636635356432/photo.png",
          name: "Junior",
          description: [
            "получит базовые навыки работы с компьютером",
            "познакомится с основами программирования: алгоритмами, переменными, циклами, напишет свой первый код на языке Lua",
            "разовьет логику, алгоритмическое и пространственное мышление",
            "научится создавать анимации, многоуровневые 2D — и 3D-игры",
            "научится работать с игровыми движками Stencyl и Roblox Studio"
          ]
        },
        {
          img: "https://static.tildacdn.com/tild3832-6537-4565-b863-303066623165/photo.png",
          name: "Middle",
          description: [
            "познакомится с основами программирования: алгоритмами, циклами, функциями, переменными и др.",
            "начнет изучать языки: JavaScript, C#, Python, Lua",
            "разовьет логику, алгоритмическое и пространственное мышление",
            "научится работать с движками: Stencyl, Roblox Studio, Thunkable, Unity",
            "научится создавать многоуровневые 2D- и 3D-игры",
            "попробует себя в роли веб-разработчика или 3D моделлера и разработчика игр"
          ]
        },
        {
          img: "https://static.tildacdn.com/tild6537-6435-4338-b663-646634326566/photo.png",
          name: "High",
          description: [
            "познакомится с основами программирования: алгоритмами, циклами, функциями, переменными и др.",
            "начнет изучать языки: Lua, JavaScript, C#, Python, Java",
            "разовьет логику, алгоритмическое и пространственное мышление",
            "научится работать с движками: Stencyl, Thunkable, Unity, Unreal Engine",
            "научится создавать многоуровневые 2D- и 3D-игры",
            "попробует себя в роли веб-разработчика или 3D моделлера и разработчика игр"
          ]
        }
      ];
      
      
  return (
    <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>Junior</Tab>
    <Tab>Middle</Tab>
    <Tab>High</Tab>
  </TabList>
  <TabPanels align="center">
    {learningPaths.map((path) => (
        <TabPanel>
        <CourseCard path={path}/>
    </TabPanel>
    ))}
    
  </TabPanels>
</Tabs>
  )
}