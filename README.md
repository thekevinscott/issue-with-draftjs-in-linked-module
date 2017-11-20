# To get this running:

## 1. Install dependencies for `mainapp`
```
cd ./mainapp
yarn
```

## 2. Install dependencies for `linkedmodule`
```
cd ../linkedmodule
yarn
```

## 3. Link `react` and `react-dom` from `mainapp` into `linkedmodule`

```
# From `./linkedmodule` directory
npm link ../mainapp/node_modules/react
npm link ../mainapp/node_modules/react-dom
```

## 4. Run `npm link` in `linkedmodule`

```
# From `./linkedmodule` directory
npm link
```

## 5. Link `linkedmodule` to the `mainapp`

```
cd ../mainapp
npm link linkedmodule
```

## 6. Start both up
```
# in main app
yarn dev

# in linkedmodule
yarn dev
```

Open `http://localhost:8080` in your browser. You should see the following error:

```invariant.js:42 Uncaught Error: Element ref was specified as a string (editorContainer) but no owner was set. You may have multiple copies of React loaded.```

