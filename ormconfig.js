console.log('process.env.HACKATON = ', process.env.HACKATRAN_HOST)

module.exports = {
   "type": "postgres",
   "host": process.env.HACKATRAN_HOST,
   "port": 5434,
   "username": process.env.HACKATRAN_USERNAME,
   "password": process.env.HACKATRAN_PASSWORD,
   "database": process.env.HACKATRAN_DATABASE,
   "synchronize": true,
   "logging": false,
   "entities": [
      "build/entity/**/*.js"
   ],
   "migrations": [
      "build/migration/**/*.js"
   ],
   "subscribers": [
      "build/subscriber/**/*.js"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}