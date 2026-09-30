# Expense Tracker
A simple offline-first mobile expense management app built with
React Native and Expo. 

<div align="center">

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/expo-%231C1E24.svg?style=for-the-badge&logo=expo&logoColor=#D04A37)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

</div>

## About
This project was created to solve a real problem: organizing and tracking everyday expenses in a simple and practical way.

After noticing that someone I know was having difficulties keeping track of their expenses, I offered to build an application specifically for this purpose.

The app was designed to work offline, keeping expense data stored locally on the device using SQLite. It also includes data import and export functionality, allowing the user to create backups and restore their expenses when needed.


## Technologies
- TypeScript
- React Native
- Expo
- SQLite
- AsyncStorage

## Features
- User identification using AsyncStorage
- View all or recent expenses
- Filter expenses from the last 7, 14, or 30 days
- Import and export expense data
- Generate reports based on applied filters

## How to use
**Note**: You need to have Node.js installed to run the commands below.

1. Clone the project:
    ```
    git clone https://github.com/xThgSilva/expense-tracker-app.git
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Run the project:
    ```
    npx expo start
    ```
    
## Versions
See VERSIONS.md for the project changelog.