# ctrl

> A GitHub App built with [Probot](https://github.com/probot/probot) that The CTRL GitHub Bot.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t ctrl .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> ctrl
```

## Contributing

If you have suggestions for how ctrl could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[MIT](LICENSE) © 2020 Bobbbay Bobbayan <abatterysingle@gmail.com>
