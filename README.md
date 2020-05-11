## MERN Stack Polling Application
![](https://media.giphy.com/media/jOVIlER46RL6UUvvUa/giphy.gif)

## Instructions
1. Clone this repo.
2. Install MongoDB if you don't already have. I recommend doing this through homebrew. 
3. Run 'mongod'.
4. Cd into the client directory and do the following: 
- npm install
- npm start
5. In server directory do the following: 
- npm install
- create .env file with the following 
``` 
PORT = 3030 (if you use a different port, you must also change the url in client/src/services/api.js)
DATABASE = 'mongodb://localhost/<DATABASE_NAME>'
```
- nodemon
6. Navigate to application in your browser
7. Create a new poll.
8. Start voting! 

## Main technologies used:
- NodeJS
- React
- Redux
- React Router
- ChartJS
- MongoDB