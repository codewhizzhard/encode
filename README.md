# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# encode

Encode
This is a pure frontend development that helps users to make transactions, check their transactions, edit and if desired, delete the transaction they have made. They will also be able to check out news about currencies
For the frontend to speak with the backend to share data is impossible using only react, so a local json server is created to serve as a server to make sharing of data possible, but the problem this approach is facing is that to see this(sharing of data in action) is to pull this from the public github repository to your code edictor and then run the code locally for this to work.
HOW IT WORKS
pull the repository from github to your code editor
cd into the encode repository: cd encode
write this in the terminal: npx json-server -p 3000 -w data/db.json to start watching for the server
then inpute this in terminal: npm run dev, to start the project
then ctr left click on the port
then send and receive your data

There are things that are not done by which are in the test, because the time is not enough
# encode