const api = require("./api")

function generateMarkdown(data) {
  return ` # ${data.title}
  <badge> goes here
  <github link> goes here

## Description
  
  ${data.desc}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Badges](#badges)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
  
## Installation

  To install necessary dependencies, run the following command: ${data.depend}
  
## Usage

  ${data.know}
  
## License

  This project is licensed under the ${data.license}
  
## Badges

  
  
## Contributing

  ${data.contrib}
  

## Tests

  To run tests, run the following command: ${data.test}
  
## Questions

  <img> here

  If you have any questions about the repo, open an issue or contact ${data.username} directly at null.`;
}

module.exports = generateMarkdown;
