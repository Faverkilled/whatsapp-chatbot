# WhatsApp Chatbot

This project is a simple WhatsApp chatbot that greets users and forwards their inquiries to a manager. It is built using TypeScript and integrates with the WhatsApp API.

## Features

- Greets users with a welcome message.
- Accepts user inquiries and forwards them to a manager.
- Sends user contact information along with their query.

## Project Structure

```
whatsapp-chatbot
├── src
│   ├── app.ts               # Entry point of the application
│   ├── bot
│   │   ├── index.ts         # WhatsAppBot class for handling messages
│   │   └── responses.ts      # Functions for generating bot responses
│   ├── services
│   │   └── whatsappService.ts # Integration with WhatsApp API
│   └── types
│       └── index.ts         # Type definitions for User and Message
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/whatsapp-chatbot.git
   ```

2. Navigate to the project directory:
   ```
   cd whatsapp-chatbot
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```

2. The bot will greet users and handle their inquiries as specified.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.