
function generateMarkdown(data,dta) {
  return ` # ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-green.svg)
  <github link> 


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

  To install necessary dependencies, run the following command:

  ${data.depend}


## Usage

  ${data.know}
  

## License

  This project is licensed under the ${data.license} license.
  

## Contributing

  ${data.contrib}
  

## Tests

  To run tests, run the following command:
  
  ${data.test}

  
## Questions

  <img src="${dta}" alt="avatar" style="border-radius: 16px" width="30" />

  If you have any questions about the repo, open an issue or contact [${data.username}](https://api.github.com/users/${data.username}) directly at null.`;
}

module.exports = generateMarkdown;
