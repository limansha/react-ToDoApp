# Start your day Organised with TO-DO list

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. \
Now can be accessed on pages [https://limansha.github.io/react-projects/](https://limansha.github.io/react-projects/)

The page will reload when you make changes.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `npm run build` or `yarn build`

Builds the app for production and optimizes the build for the best performance.

# How to add React APP to GITHUB pages

run the below command.
### npm install gh-pages --save-dev
add the below key:value package.json file 

`homepage : https://{{git-username}}.github.io/{{git-repo-name}}`

under scripts 
`predeploy: npm run build`
`deploy:gh-pages -d build`

after adding in package.json run 

### `npm run deploy` or `yarn deploy`

It will take few minutes to deploy add can be seen in repo->settings->pages.