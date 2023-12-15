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
          name: "User 1",
          email: "Email 1",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 1,
        },
        {
          name: "User 2",
          email: "Email 2",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 1,
        },
        {
          name: "User 3",
          email: "3@3",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 1,
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          title: "title-1",
          questions: "Напишите программу на JavaScript, которая выводит на экран фразу 'Hello, World!'.",
          answer: "console.log('Hello, World!');",
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

    await queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "Topic 1",
          description: "javascript",
          complexity: "Easy",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
          taskId: 1,
        },
        {
          title: "Topic 1",
          description: "python",
          complexity: "Easy",
          img: "https://i.morioh.com/210209/e6e21880.webp",
          taskId: 1,
        },
        {
          title: "Topic 1",
          description: "Swift",
          complexity: "Easy",
          img: "https://www.technotification.com/wp-content/uploads/2016/06/New-Programming-Languages-Swift.jpg",
          taskId: 1,
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
