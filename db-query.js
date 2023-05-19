// Task 1: Find all users who are located in New York.
db.peoples.find({ "address.city": { $eq: "San Francisco" } })
    .projection({ address: 1 })

// Task 2: Find the user(s) with the email "johndoe@example.com" and retrieve their favorite movie.
db.peoples.find({ email: { $eq: "johndoe@example.com" } })
    .projection({ email: 1, name: 1 })

// Task 3: Find all users with "pizza" as their favorite food and sort them according to age.
db.peoples.find({ "favorites.food": { $eq: "pizza" } })
    .sort({ age: -1 })
    .projection({ email: 1, name: 1, favorites: 1, age: 1 })

// Task 4: Find all users over 30 whose favorite color is "green".
db.peoples.find({ age: { $gt: 30 }, "favorites.color": "green" })
    .sort({ age: -1 })
    .projection({ email: 1, name: 1, favorites: 1, age: 1 })

// Task 5: Count the number of users whose favorite movie is "The Shawshank Redemption."
db.peoples.countDocuments({ "favorites.movie": "The Shawshank Redemption" })


// Task 6: Update the zipcode of the user with the email "johndoe@example.com" to "10002".
db.peoples.updateOne({ email: "johndoe@example.com" },{$set: {"address.zipcode":"10002"}})

// Task 7: Delete the user with the email "alicewilliams@example.com" from the user data.
db.peoples.deleteOne({ email: "alicewilliams@example.com" })

// Task 8: Group users by their favorite movie and retrieve the average age in each movie group.
db.peoples.aggregate([
    {
      $group: {
        _id: "$favorites.movie",
        averageAge: { $avg: "$age" }
      }
    }
  ])

// Task 9: Calculate the average age of users with a favorite " pizza " food.

// Task 10: Perform a lookup aggregation to retrieve the orders data along with the customer details for each order.