/* 
//Authentication system set up steps
1.Create a firebase project.
2.Enable Web
3.Enable sign in methods.
4.install firebase.
5.create a firebase folder and create firebase.config.js file in the folder.
6.get firebase configuration to firebase.config.js file.
7.export app from firebase.config.js

 */

/*

/................Context api set for share user data all over the website
1.Create UserContext(AuthContext): UserContext -->Component Name, UserContext Provide AuthContexts
2.Create AuthContext.
3. Make sure you set the children.
4.Export AuthContext
5.import userContext component to index.js file and push <Ap/> data inside the User context as a child. So that we can access usere context and its children from all overt the App.
example:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>
);

*/
/*
#######--> FIREBASE HOSTING<---#######

step-->1
** Do it only once for each computer
run bellow command in terminal

=> npm install -g firebase-tools
=> firebase login

step-->2
run this in terminal for each project one Time
firebase init
** make shure for public directory you select the build directory for npx /dist directory for vite.
** configure as single page application. command y


step--> 3
for every deploy 
run command in terminal
npm run build 
firebase deploy
 */
