const api = require("./api")

function generateMarkdown(data) {
  return ` # ${data.title}

## Description
  
  ${data.desc}
  
## Installation

  ${data.depend}
  
## Usage

  ${data.know}
  
## License

  ${data.license}
  
## Badges

  
  
## Contributing

  ${data.contrib}
  
## Tests

  ${data.test}`;
}

module.exports = generateMarkdown;
