# Getting Started:
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Branch Managment:

Naming conventions:
Let's essume you need to complete one of the tasks:\ 
[Issue-008] Checkout page implementation.\

first you need to create branch - depending on how issue is labled.\

[Feature], [Bug], [Refactoring] branches opens from origin/master.\
[Subtask] branches opens from any branch but origin/master.\

to name branch use your task title:
{parent-branch}{task-type}/{issue-number}/{short-descripton}\
for example: main/feature/issue-121/sign-in-pop-up-implementation\
or subtask for branch above:\
{parent-branch}/{parent-issue-number}/subtask/{issue-number}/{short-descripton}\
feature/issue-121/subtask/issue-122/sign-in-pop-up-desktop-implementation\
