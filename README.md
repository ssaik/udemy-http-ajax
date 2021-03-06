This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Docs

This is the template which is downloaded from section-9 - udemy course
https://jsonplaceholder.typicode.com/ --> which is used for mock json api. It has dummy data.
install AXIOS, which simple the steps to use XML HTTP Requests. writing XML with this languause is quite complex. SO install AXIOM - third party software.

### `npm install axios --save`
### `npm start` --> start npm after installing any new tool/software.

Axios.get(url) -> To get data
Axios.post(url,data) -> To post data
Axios.Delete(url) -> To Delete Data

---
Added default URL to index.js and removed base URL from all the components.

### Branch: 6RouteConfig
//Installed react-route-dom and wrapped App.js class with { BrowserRouter }, and moved all the components
to Containers except Post. also created Posts new container

### `npm install --save react-router-dom`

Now import "{ BrowserRouter }" from 'react-router-dom' and wrap out App.js component to enable routing mechanism all over the app.

Put components into "Container" folder which needs to be routed. Here, Moving FullPost, NewPost from components to Container and also created another folder named "Posts".

### Branch: 7ApplyingRoute
Import { Route } from 'react-route-dom'

Manually rendering tags:
`<Route path='/' exact render={ () => <h1>i will display in home page only, because "exact" keyword used here.</h1>}>`
`<Route path='/' render={ () => <h1>i will display in all pages where it starts with "/" ,/h1>}>`

Rendering Components:
`<Route path="/" exact component={<ComponentName>}>`

Click on HOME, you will see Posts.
Click on About Us, you won't see posts any more.

### brach: 8SwitchPages
Note: Switching pages with <a> tag is not recommended, which reload the application, that means.. Clearing previous state.
Instead re-render the pages.
    use "Link", it is supported by react-route-dom.
and also can parse extra parameters to the URL, by 
    `<li><Link to="/">Home</Link></li>`
    `<li><Link to={{pathname: "/new-post",hash: "#Submit",search: "?quick-submit=true"}}>New Post</Link></li>`

Routing:
    `<Route path="/" exact component={Posts} />`
    `<Route path="/new-post" component={NewPost} />`

### branch: 9DynArgURL
Better to use NavLink instead of Link, which enables you to enable styles.
and also put exact to the main page.

can pass dynamic url by <Link id='/:id' component = {FullPost} />           -- Parent
    Now, wrap child component by Link and Pass the id to the Link. i.e.     -- Child
        <Link to={'/'+post.id} key={post.id}>
            ...
            ...
        </Link>


## --------------------------------------------------------------------------------------------
## --------------------------------------------------------------------------------------------
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
