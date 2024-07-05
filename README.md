
![1](https://github.com/OussemaNehdi/SolidStart-App/assets/157837589/9d0a9ea5-fcbd-4e89-913c-56d29be9a7bb)
![2](https://github.com/OussemaNehdi/SolidStart-App/assets/157837589/d68eba83-1b15-412b-9ce0-d4f735701c5e)

Make sure to create a NeonDB database and use your creds instead.
# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
npm init solid@latest

# create a new project in my-app
npm init solid@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _presets_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.js`.

