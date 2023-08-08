# API Tennis Players 

Welcome to the README for the **Tennis Players API**! This API provides endpoints to manage tennis player data and statistics. Whether you're a tennis enthusiast, a developer, or just curious, this API has you covered. Below, you'll find information on how to set up the API, available endpoints, and more.

## Table of Contents

- [API Tennis Players](#api-tennis-players)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Configuration](#configuration)
  - [Usage](#usage)
- [Endpoints](#endpoints)
  - [Players Endpoints](#players-endpoints)
  - [Statistics Endpoints](#statistics-endpoints)
  - [Contributing](#contributing)
  - [License](#license)

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- Git: [Download and install Git](https://git-scm.com/)

### Installation

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/ReivenIV/API_tennis_players.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tennis-players-api
   ```

3. Install the required dependencies using npm:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory of the project:

   ```
   API_PORT=?????
   API_URL=http://localhost:?????
   ```

   Adjust the values as needed.

## Usage

To start the API server, run the following command:

```bash
npm start
```

The API will be accessible at the URL defined in the `.env` file (`http://localhost:5000` by default).

# Endpoints

This API provides endpoints for managing tennis player data and statistics. Below are the available endpoints:

## Players Endpoints

- **Get All Players**
  - Retrieve a list of all players.
  - Method: `GET`
  - URL: `/api/v1/players/all`

- **Get Player by ID**
  - Retrieve details of a player by their ID.
  - Method: `GET`
  - URL: `/api/v1/players/by_id/:id`

- **Get Players by Sex Type**
  - Retrieve a list of players based on their sex type.
  - Method: `GET`
  - URL: `/api/v1/players/by_sex_type/:sexType`

## Statistics Endpoints

- **Get All Statistics**
  - Retrieve statistics for all players.
  - Method: `GET`
  - URL: `/api/v1/statistics/all`

- **Get Statistics by Sex Type**
  - Retrieve statistics for players based on their sex type.
  - Method: `GET`
  - URL: `/api/v1/statistics/by_sex_type/:sexType`

Please note that you need to replace `:id` and `:sexType` with appropriate values when making requests.

For more details on request and response formats, refer to the API documentation.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Submit a pull request detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to explore the API endpoints, experiment with player data, and integrate this API into your applications. If you have any questions or need assistance, don't hesitate to reach out. Happy coding! 🎾