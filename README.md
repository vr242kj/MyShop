# Main task
Application written with the React framework and library Redux. Implemented the single page application principle by using react-router.
Application home page:
![image](https://user-images.githubusercontent.com/88940299/172652244-38ae143d-0c87-4e7b-9582-aff41ff8d7d7.png)
It is possible to add and remove items to the shopping basket and adjust their quantity. The order amount is also automatically calculated.
![image](https://user-images.githubusercontent.com/88940299/172653137-e6e88b8c-5ad1-456c-bb9c-83c59ada32d2.png)
There is a search by product name or manufacturer. 
![image](https://user-images.githubusercontent.com/88940299/172653723-bdd7679c-aa23-4566-9db9-9b42551de99e.png)
You can go to the page of each of the products, the page shows any additional information on the product. It also displays the ID if product in the address bar.
![image](https://user-images.githubusercontent.com/88940299/172654242-c731c0b6-6f27-4280-82e9-40a87294dc43.png)
Implemented filter for products. The values for the filter are taken from the product parameters.
![image](https://user-images.githubusercontent.com/88940299/172655336-ba31203b-e7be-4e22-a768-399fde78c376.png)
Application title page.
![image](https://user-images.githubusercontent.com/88940299/172657034-d6a69839-6ef4-4ac4-8452-5c4582d8a96d.png)
The user must enter their login name (at least 5 characters) to be used in the application. When the user enters a login and presses Enter, the login is written to the localStorage and a redirect to the home page.
Without login the user cannot use the application, entering a direct link (/shop, for example) without a previously entered login to localStorage leads to redirection to the login page.
When the application loads, if a login is found in localStorage, the user is redirected to the header page. All pages (except /login) use the entered and saved login in the header-e (e.g. "Hello, UserName")

P.S. 
All products is put into redux store.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
