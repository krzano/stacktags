[![stacktags-logo.jpg](https://i.postimg.cc/gJfS7SVF/stacktags-logo.jpg)](https://stacktags.vercel.app/)

<hr/>

**Live demo: &nbsp; https://stacktags.vercel.app/**

**Storybook demo: &nbsp; https://stacktags-storybook.vercel.app/**

## Task

### Description

Prepare the user interface of the tag browser provided by the StackOverflow API (https://api.stackexchange.com/docs).

### Requirements

- paged table or list of tags along with the number of related posts (count field) ✅
- number of elements per page configurable by a numeric field above the table/list ✅
- selection of field and sorting direction by UI element of your own choice/design ✅
- prepare appropriate states for the data loading stage and download errors ✅
- use a library of UI components, e.g. MUI ✅
- use libraries for state management and data download (choice at your discretion, according to the complexity of the project and with a view to completing the task as quickly as possible) ✅ (_I decided to choose React Query and Zustand_)
- prepare a Storybook to present the used components of the application ✅
- publish the solution in a GitHub repository ✅
- the whole thing should run only after executing the commands "npm ci", "npm start", "npm run storybook" ✅

## Technologies

Project is built with:

- [**React 18**](https://react.dev/)
- [**React Router 6**](https://reactrouter.com/en/main)
- [**TanStack/React Query 5**](https://tanstack.com/query/latest/docs/framework/react/overview)
- [**Zustand**](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [**Material UI**](https://mui.com/)
- [**styled components**](https://styled-components.com/)
- [**Axios**](https://axios-http.com/)
- [**Storybook**](https://storybook.js.org/)

## Setup

Download or clone this repository.

Install dependencies: `npm ci`

Start a local web server by running: `npm start`

Start a local Storybook server by running: `npm run storybook`
