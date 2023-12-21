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
          confirmCode: "4343",
          hashpass: hashSync("1", 10),
          role: "Admin",
        },
        {
          name: "hector",
          lastName: "salamanca",
          profileImage:
            "https://i.pinimg.com/originals/9f/af/4d/9faf4df0c80864a9cb80e53e3199d434.jpg",
          email: "Email@2",
          confirmCode: "4143",
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
          confirmCode: "4147",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 2,
        },
        {
          name: "Lando Norris",
          profileImage:
            "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/norris.jpg.img.1536.high.jpg",
          email: "lando@",
          confirmCode: "4143",
          hashpass: hashSync("1", 10),
          role: "Teacher",
        },
        {
          name: "Nacho",
          lastName: "Varga",
          profileImage:
            "https://i.pinimg.com/564x/e9/09/22/e90922c3d831bb36d4f0c7114106de3f.jpg",
          email: "3@3",
          confirmCode: "4443",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 3,
        },
        {
          name: "Макс",
          lastName: "Петров",
          profileImage: "image.png",
          email: "4@4",
          confirmCode: "4743",
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
          profileImage:
            "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.640.medium.jpg/1701270073824.jpg",
          email: "max@",
          hashpass: hashSync("1", 10),
          role: "Teacher",
        },
        {
          name: "Checo Perez",
          profileImage:
            "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1536.high.jpg",
          email: "checo@",
          hashpass: hashSync("1", 10),
          role: "Teacher",
        },
        {
          name: "Lando Norris",
          profileImage:
            "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/norris.jpg.img.1536.high.jpg",
          email: "lando@",
          hashpass: hashSync("1", 10),
          role: "Teacher",
        },
        {
          name: "Oscar Piastri",
          profileImage:
            "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/piastri.jpg.img.1536.high.jpg",
          email: "oscar@",
          hashpass: hashSync("1", 10),
          role: "Teacher",
        },
        {
          name: "Lewis Hamilton",
          profileImage:
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
          description: "Topic 1",
          title: "javascript",
          complexity: "Easy",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
        },
        {
          description: "Topic 2",
          title: "python",
          complexity: "Easy",
          img: "https://i.morioh.com/210209/e6e21880.webp",
        },
        {
          description: "Topic 3",
          title: "Swift",
          complexity: "Easy",
          img: "https://www.technotification.com/wp-content/uploads/2016/06/New-Programming-Languages-Swift.jpg",
        },
        {
          description: "Topic 4",
          title: "Основы программирования",
          complexity: "Easy",
          img: "https://i.pinimg.com/564x/21/5b/f2/215bf2ad433690a0cd4d3dd9e42c92d8.jpg",
        },
        {
          description: "Topic 5",
          title: "Структуры данных",
          complexity: "Medium",
          img: "https://i.pinimg.com/564x/43/77/79/43777972aa8e8099895ae32ceaf87ba6.jpg",
        },
        {
          description: "Topic 6",
          title: "Алгоритмы",
          complexity: "Hard",
          img: "https://i.pinimg.com/564x/11/66/a0/1166a0200d1b5a3fe558160d7d205327.jpg",
        },
        {
          description: "Topic 7",
          title: "Объектно-ориентированное программирование (ООП)",
          complexity: "Hard",
          img: "https://i.pinimg.com/474x/b2/34/4e/b2344eb9fc661f35ce30858428e3571d.jpg",
        },
        {
          description: "Topic 8",
          title: "Работа с файлами и ввод/вывод данных",
          complexity: "Medium",
          img: "https://i.pinimg.com/564x/64/d0/fb/64d0fbc6e0967e57aa30695b28dde06e.jpg",
        },
        {
          description: "Topic 9",
          title: "Сетевое программирование",
          complexity: "Hard",
          img: "https://i.pinimg.com/564x/3a/39/1e/3a391e27fd358e4eb49001c27d39d845.jpg",
        },
        {
          description: "Topic 10",
          title: "Безопасность программирования",
          complexity: "Hard",
          img: "https://i.pinimg.com/564x/61/aa/16/61aa162740bf0ca51734d5b83eec3d02.jpg",
        },
        {
          description: "Topic 11",
          title: "Разработка веб-приложений",
          complexity: "Hard",
          img: "https://i.pinimg.com/564x/5e/2e/ea/5e2eea4c011bfe2ab68793001400b6c7.jpg",
        },
        {
          description: "Topic 12",
          title: "Асинхронное программирование в JavaScript",
          complexity: "Medium",
          img: "https://i.pinimg.com/564x/12/af/ce/12afcebaf06f08c2b475e78a00d83263.jpg",
        },
        {
          description: "Topic 13",
          title: "Работа с AJAX и Fetch API",
          complexity: "Medium",
          img: "https://i.pinimg.com/736x/66/9a/b9/669ab90dfd28b32c45430d27eea0882f.jpg",
        },
        {
          description: "Topic 14",
          title: "Тестирование в JavaScript",
          complexity: "Easy",
          img: "https://i.pinimg.com/564x/02/ac/bf/02acbfd5978fc628f168d84ba3a3f554.jpg",
        },
        {
          description: "Topic 15",
          title: "HTML и Веб-разработка",
          complexity: "Easy",
          img: "https://i.pinimg.com/564x/36/ab/26/36ab267d60087319ce20ef6b0cf1868a.jpg",
        },
        {
          description: "Topic 16",
          title: "Визуальное оформление с CSS: Стили и Разметка",
          complexity: "Easy",
          img: "https://i.pinimg.com/564x/99/0a/ff/990aff347709e48af64ad9e435b9a106.jpg",
        },
        {
          description: "Topic 17",
          title: "Введение в JavaScript и Взаимодействие с DOM",
          complexity: "Easy",
          img: "https://i.pinimg.com/564x/ed/8d/de/ed8ddef3db46d4ffb459366b9d29d6f7.jpg",
        },
        {
          description: "Topic 18",
          title: "Реактивный Фронт-енд: Введение в React",
          complexity: "Hard",
          img: "https://i.pinimg.com/564x/fa/57/8a/fa578a33c4170e61221c4ea259c239d5.jpg",
        },
        {
          description: "Topic 19",
          title: "Создание Веб-Компонентов и Их Интеграция",
          complexity: "Hard",
          img: "https://i.pinimg.com/564x/f1/c0/8e/f1c08e8abff73d04664af7b07abe2b5b.jpg",
        },
        {
          description: "Topic 20",
          title: "Введение в TypeScript для Фронт-енд Разработки",
          complexity: "Hard",
          img: "https://i.pinimg.com/564x/cb/1b/28/cb1b28b615147971ab740e6c48402148.jpg",
        },
        {
          description: "Topic 21",
          title: "Адаптивный Дизайн и Медиазапросы",
          complexity: "Medium",
          img: "https://i.pinimg.com/564x/ee/c8/01/eec8013ea59bfcdb92f3d247d5a52f46.jpg",
        },
        {
          description: "Topic 22",
          title: "Основы React и Компоненты",
          complexity: "Medium",
          img: "https://i.pinimg.com/736x/6e/22/35/6e223587652d2ce0df0f8b7b70aef4b4.jpg",
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          title: "JavaScript Task-1",
          questions:
            "Напишите программу на JavaScript, которая выводит на экран фразу 'Hello, World!'.",
          answer: "console.log('Hello, World!');",
          topicId: 1,
        },
        {
          title: "JavaScript Task-2",
          questions: "Write a JavaScript function that reverses a string.",
          answer:
            "function reverseString(str) {\n  return str.split('').reverse().join('');\n}\n\nconst originalString = 'Hello, World!';\nconst reversedString = reverseString(originalString);\nconsole.log(reversedString); // Output: '!dlroW ,olleH'",
          topicId: 1,
        },
        {
          title: "python Task-1",
          questions:
            "Напишите программу на Python, которая принимает число от пользователя и выводит его квадрат.",
          answer:
            "number = int(input('Введите число: '))\nprint(f'Квадрат числа: {number ** 2}')",
          topicId: 2,
        },
        {
          title: "python Task-2",
          questions:
            "Напишите программу на Python, которая запрашивает у пользователя его имя и затем выводит приветственное сообщение с использованием этого имени.",
          answer:
            "name = input('Введите ваше имя: ')\nprint('Привет, ' + name + '!'))",
          topicId: 2,
        },
        {
          title: "python Task-3",
          questions:
            "Напишите программу, которая запрашивает два числа у пользователя, затем складывает их и выводит результат.",
          answer:
            "num1 = float(input('Введите первое число: '))\nnum2 = float(input('Введите второе число: '))\nresult = num1 + num2\n print('Сумма чисел:', result)",
          topicId: 2,
        },
        {
          title: "python Task-4",
          questions:
            "Напишите программу, которая проверяет, является ли введенное пользователем число четным или нечетным.",
          answer:
            "number = int(input('Введите число: '))\nif number % 2 == 0:\nprint('Число четное.')\nelse:print('Число нечетное.')",
          topicId: 2,
        },
        {
          title: "Swift Task-3",
          questions:
            "Напишите программу на Java, которая проверяет, является ли введенное число четным.",
          answer:
            "import java.util.Scanner;\npublic class CheckEven {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print('Введите число: ');\n    int number = scanner.nextInt();\n    if (number % 2 == 0) {\n      System.out.println('Число четное');\n    } else {\n      System.out.println('Число нечетное');\n    }\n  }\n}",
          topicId: 3,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Homework",
      [
        {
          userId: 1,
          // taskId: 1,
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
