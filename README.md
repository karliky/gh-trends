# Catch the Code Wave: Today's Hottest GitHub Trends
A React-based web application to discover trending repositories on GitHub, 
allowing users to view and manage their favorite repositories.

https://gh-trends.vercel.app/

<p align="center">
    <img src="https://github.com/karliky/gh-trends/raw/main/public/promo.png?raw=true" />
</p>

Diagram of the app logic composition

![Domain diagram](https://github.com/karliky/gh-trends/raw/main/public/gh-trends.drawio.png?raw=true)


## Table of Contents
1. [Features](#Features)
2. [Getting started](#getting-started)
    1. [Prerequisites](#Prerequisites)
    2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Technology Stack](#technology-stack)
5. [Tests](#tests)
7. [License](#license)

## Features
- Display a list of trending repositories created in the last 7 days, sorted by the number of stars.
- Allow users to mark a repository as a favorite.
- View favorite repositories using a filter or a separate tab.
- Show basic information about the repository, including the name, link to GitHub, description, and number of stars.
- Store favorite repositories locally using local storage.
- (Bonus) Filter repositories by programming languages.

## Getting Started
These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites
Node.js (version 16 or higher)

### Installation
Clone the repository:
```
git clone https://github.com/karliky/gh-trends
```
Change to the project directory:
```
cd gh-trends
```
Install dependencies:
```
npm install
```
Start the development server:
```
npm run dev
```

The application should now be running on http://localhost:3000.

Live application can be found at https://gh-trends.vercel.app/

## Usage
Visit the application in your browser. 

Browse the list of trending repositories and mark your favorites by clicking the bookmark icon. 

Use the *"Trending"* and *"Favorites"* tabs to switch between the full list of repositories and your favorite repositories. 

Filter repositories by programming languages using the dropdown menu.

## Technology Stack
- React
- Next.js
- TypeScript
- CSS Modules
- GitHub REST API

## Tests
Tests are written using React Testing Library under the `src\__tests__` folder.

```
$ npm run test
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.