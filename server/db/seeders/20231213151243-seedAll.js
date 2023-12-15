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
          name: "Василий1 Васильевич1",
          email: "0@0",
          hashpass: hashSync("1", 10),
          role: "Teacher",
          groupId: 1,
        },
        {
          name: "Боб",
          email: "Email 1",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 1,
        },
        {
          name: "Петя",
          email: "Email 2",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 2,
        },
        {
          name: "Liza",
          email: "2@2",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 2,
        },
        {
          name: "Лиза",
          email: "3@3",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 3,
        },
        {
          name: "Макс",
          email: "4@4",
          hashpass: hashSync("1", 10),
          role: "Student",
          groupId: 2,
        },
        {
          name: "Василий Васильевич",
          email: "5@5",
          hashpass: hashSync("1", 10),
          role: "Teacher",
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
