// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// const onePersonIsAtLeast19 = (people) => {
//   return people.some(person => 2017 - person.year >= 19);
// }
// console.log(onePersonIsAtLeast19(people));
const currentYear = (new Date()).getFullYear();

const isAdult = people.some(person => currentYear - person.year >= 19)
console.log(isAdult);

// Array.prototype.every() // is everyone 19 or older?
const everyPersonIsAtLeast19 = people.every(person => currentYear - person.year >= 19)
console.log(everyPersonIsAtLeast19)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const isTargetID = (comment, targetID) => {
  return comment.id === targetID;
}

const getCommentWithID = comments.find(comment => isTargetID(comment, 823423));
console.log(getCommentWithID);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteCommentWithId = (comments, targetID) => {
  // get index((
  // splice at index
  // return comments
  let targetIndex = comments.findIndex(comment => isTargetID(comment, 823423));
  let targetComment = comments.splice(targetIndex, 1);

  // alternative implementation for deleting comment:
  // let newComments = [
  //   ...comments.slice(0, index),
  //   ...comments.slice(index + 1)
  // ]
  return comments;
}
deleteCommentWithId(comments);
console.log(comments)
