 db.topics.find({"month":"october"});
 db.tasks.find({"month":"october"});
db.topics.aggregate([
  {
     $lookup:
      {
         from: "tasks",
         localField: "month",
         foreignField: "month",
         as: "taught_in_oct"
      }
  }
]);

// db.company_drives.find({held_on:{$gt:ISODate("2021-10-15"),$lt:ISODate("2021-10-31")}});


// db.codekata.find({},{"user_id" : 1,"prob_solved":1});


// db.mentors.find({mentees_coun: {$gt: 15}});
