const models = require('./models');

// 사용자 생성
// models.User.create({
//   user_name: "John"
// }).then(_ => console.log("Data is created!"));

// 사용자 조회
// models.User.findAll().then(console.log);

// 사용자 수정
// models.User.findOne({ where: { user_name: "John" }})
// .then(user => {
//   if (user) {
//     user.update({ user_name: "Bob" })
//     .then(r => console.log("Data is updated!"));
//   }
// });

// 사용자 삭제
// models.User.destroy({ where: { user_name: "Bob" }})
// .then(_ => console.log("Data was deleted!"));