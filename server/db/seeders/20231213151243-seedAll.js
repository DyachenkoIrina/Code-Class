/** @type {import('sequelize-cli').Migration} */
const { hashSync } = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Schools",
      [
        {
          name: "School 1",
          address: "Address 1",
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Groups",
      [
        {
          group: "Group 1",
          teacher: "Teacher 1",
        },
        {
          group: "Group 2",
          teacher: "Teacher 2",
        },
        {
          group: "Group 3",
          teacher: "Teacher 3",
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Lalo",
          lastName: "Salamanca",
          profileImage:
            "https://i.pinimg.com/564x/73/dc/57/73dc578749ff3241fe1ae0d65e8dacb9.jpg",
          email: "1@1",
          hashpass: hashSync("1", 10),
          role: "Admin",
        },
        {
          name: "hector",
          lastName: "salamanca",
          profileImage:
            "https://i.pinimg.com/originals/9f/af/4d/9faf4df0c80864a9cb80e53e3199d434.jpg",
          email: "Email@2",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 2,
        },
        {
          name: "KIM",
          lastName: "WEXLER",
          profileImage:
            "https://i.pinimg.com/564x/60/9b/b7/609bb7c7031458d08d5e7bceac199bc7.jpg",
          email: "2@2",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 2,
        },
        {
          name: "Nacho",
          lastName: "Varga",
          profileImage:
            "https://i.pinimg.com/564x/e9/09/22/e90922c3d831bb36d4f0c7114106de3f.jpg",
          email: "3@3",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 3,
        },
        {
          name: "Макс",
          lastName: "Петров",
          profileImage: "image.png",
          email: "4@4",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 2,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Teachers",
      [
        {
          name: "Max Verstappen",
          avatar:
            "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.640.medium.jpg/1701270073824.jpg",
          email: "max@",
          hashpass: hashSync("1", 10),
          role: "Teacher",
        },
        {
          name: "Checo Perez",
          avatar:
            "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1536.high.jpg",
          email: "checo@",
          hashpass: hashSync("1", 10),
          role: "Teacher",
        },
        {
          name: "Lando Norris",
          avatar:
            "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/norris.jpg.img.1536.high.jpg",
          email: "lando@",
          hashpass: hashSync("1", 10),
          role: "Teacher",
        },
        {
          name: "Oscar Piastri",
          avatar:
            "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/piastri.jpg.img.1536.high.jpg",
          email: "oscar@",
          hashpass: hashSync("1", 10),
          role: "Teacher",
        },
        {
          name: "Lewis Hamilton",
          avatar:
            "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1536.high.jpg",
          email: "ham@",
          hashpass: hashSync("1", 10),
          role: "Teacher",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "TeacherGroups",
      [
        {
          teacherId: 1,
          groupId: 1,
        },
        {
          teacherId: 1,
          groupId: 2,
        },
        {
          teacherId: 1,
          groupId: 3,
        },
        {
          teacherId: 2,
          groupId: 1,
        },
        {
          teacherId: 2,
          groupId: 2,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "Topic 1",
          description: "javascript",
          complexity: "Easy",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          title: "Topic 1",
          description: "python",
          complexity: "Easy",
          img: "https://i.morioh.com/210209/e6e21880.webp",
        },
        {
          title: "Topic 1",
          description: "Swift",
          complexity: "Easy",
          img: "https://www.technotification.com/wp-content/uploads/2016/06/New-Programming-Languages-Swift.jpg",
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          title: "JavaScript Task",
          questions:
            "Напишите программу на JavaScript, которая выводит на экран фразу 'Hello, World!'.",
          answer: "console.log('Hello, World!');",
          topicId: 1,
        },
        {
          title: "title-2",
          questions:
            "Напишите программу на Python, которая принимает число от пользователя и выводит его квадрат.",
          answer:
            "number = int(input('Введите число: '))\nprint(f'Квадрат числа: {number ** 2}')",
          topicId: 2,
        },
        {
          title: "title-3",
          questions:
            "Напишите программу на Java, которая проверяет, является ли введенное число четным.",
          answer:
            "import java.util.Scanner;\npublic class CheckEven {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print('Введите число: ');\n    int number = scanner.nextInt();\n    if (number % 2 == 0) {\n      System.out.println('Число четное');\n    } else {\n      System.out.println('Число нечетное');\n    }\n  }\n}",
          topicId: 3,
        },
        {
          title: "JavaScript Task",
          questions: "Write a JavaScript function that reverses a string.",
          answer:
            "function reverseString(str) {\n  return str.split('').reverse().join('');\n}\n\nconst originalString = 'Hello, World!';\nconst reversedString = reverseString(originalString);\nconsole.log(reversedString); // Output: '!dlroW ,olleH'",
          topicId: 1,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Homeworks",
      [
        {
          userId: 1,
          tsakId: 1,
          status: "Pending",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
