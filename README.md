# JavaScript Starter Dev Kit
Complete Development Environment for Node JS

# Features
- Package Management
- Bundling
- Minification
- Sourcemaps
- Transpiling
- Dynamic HTML Generation
- Centralized HTTP
- Mock API framework
- Component Libraries
- Liniting
- Automatic Testing
- Continuous Integration
- Automatic Build
- Demo App

# Set up dev kit

- Clone the repository to your machine with the name of your choice
- Open the terminal and change to the required directory
- Remove git tracking "rm -rf .git"
- npm install

# Start the demo app
- npm start -s

# Build the project
- npm run build -s

# Generate code coverage report
- npm run test-coverage

# Generate mock data
- npm run generate-mock-data

# Start mock API
- npm run start-mockapi

# Few pointers to use it effectively
- .editorconfig - For enforcing your coding practices like indentation and stuff(Enable the EditorConfig plugin in webstorm
- package.json - Contains necessary libraries and automatic scripts like security check, linting, unit testing, mock api etc. Make changes here as per your requirements
- localtunnel - To share work in progress on demand. Just type “npm run share” on console. Share the generated URL with others.
- Automatic Transpiling with babel(most recommended).
- Webpack config(Prod & Dev) - For automatic bundling, dynamic HTML, loaders for css, js, path resolver, load plugins, specifying entry points etc.
- Debugging with source maps - Available in dev mode. Users won’t download source maps in prod build. Type “debugger” in your src/*.js file where you want the breakpoint.
- Linting - Configuring rules, detailed error at the time of saving, changes while the app is running.
    - Refer .eslintrc.json
    - eslint -watch
- Automatic Unit Testing
    - Framework(Mocha)
    - Assertion Library(Chai)
    - Helper Libraries(JSDOM)
    - Where to place tests(Alongside) eg. index.test.js
    - Where to run tests(Node) Type "npm run test" on terminal
- Continuous Integration Server(Travis)
- Centralized HTTP Calls(Fetch) - To work across all browsers
- Mock API
    - Provide GraphQL schema
    - Generate realtime randomized data
- Standardized Project Structure
    - .js as js file.
    - Extract logic from POJOs
- Automatic Production Build
    - Minification
    - Sourcemaps
    - Dynamic HTML
    - Cache busting
    - Bundle Splitting
    - Error Logging
