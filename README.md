# icognition-app-2

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


## Firebase deployment
### First Time
1. `firebase login` 
2. `firebase init`
3. `firebase target:apply hosting app icognition-app`
4. `firebase deploy`

### Push new chnge
1. `firebase login --reauth`
1. `firebase deploy`

