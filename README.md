# user-info APP

User info app is a simple app to query a list of users and see some information.

Even if we are showing only one random user fetched by the server, the architecture is ready to receive a list of users. 
Why did I decided to show a list instead of a single element? Because the endpoint returns an array of users, so, in a real scenario I should
clarify this with tooling (like Swagger) or the backend team. In this case I assume right typing and made it scalable.

## Installation

```bash

unzip user-info-app
cd user-info-app
nvm use (to use right node version)
npm install
npm run start

```
We should see it running on: http://localhost:3000/

## Responsive
There are three sizes: mobile (default), tablet (up to 480px) and desktop (up to 1280px).

## Tooling

- ReactJs 
- Storybook
- Prettier
- ESlint
- Styled Components
- Node.js
- Axios
  
## Storybook

Components were built isolated in Storybook. The idea is them to be as dummiest as possible and inject behavior from its context, in the client project.

```bash
cd user-info-app
npm run storybook

```
We should see it running on: http://localhost:6006/

## Notes 

- Make sure you have Node.js up to version 12 cause previous versions could have issues with some libraries 
- Improvements:
    - Including Typescript.
