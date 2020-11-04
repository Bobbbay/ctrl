# ctrl

A GitHub App built with [Probot](https://github.com/probot/probot) for CI, CD, testing, PR reviews, and more!

## Setup

1. Create a directory called `.ctrlrc`
2. In that directory, create a file - we'll make one called `build`
3. Fill up `build` with contents:

```
#!/bin/bash

echo "Starting build..."
make build
echo "Build complete!"
```

4. Open a PR on your repository - now, CTRL will run your given scripts remotely. It will then comment on that PR with the build logs and an exit status.
5. Sit back and watch as each PR gets tested before merging.

The possibilities are endless. Literally. Virtually any script that can be shebanged (`#!/bin/bash`) can be run.

## Contributing

If you have suggestions for how ctrl could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[MIT](LICENSE) © 2020 Bobbbay Bobbayan <abatterysingle@gmail.com>
