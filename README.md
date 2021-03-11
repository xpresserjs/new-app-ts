# Xpresser Typescript Boilerplate

![Alt text](https://cdn.jsdelivr.net/npm/xpresser/xpresser-logo-black.png "Xpresser Logo")
 
Example app using `ejs` templates, Showing a simple view but also has guides in code comments

For same example using `edge.js` templates, similar to laravel blade and faster - [Xpresser Typescript Example App Using Edge.js](https://github.com/xpresserjs/new-app-edge-ts)

### Includes 
Xpresser Default Page using [Bulma.io](https://bulma.io) & [Bootstrap](https://getbootstrap.com)

Theme can be changed in [`config.ts`](./config.ts)

### Use

1. Clone Or Download
2. Run `yarn` or `npm` install.
3. Run `npm run ts-dev` or `yarn run ts-dev`
4. check config in [config.ts](./config.ts)
5. Read [Xpresser Documentation](https://xpresserjs.com/typescript)

### Package Commands

```json
{
  "build": "xjs @stack tsc",
  "ts-watch": "tsc --watch",
  "ts-dev": "ts-node-dev --respawn app.ts",
  "start": "npm run build && node build/app.js",
  "start-dev": "nodemon build/app.js"
}
```

- **build**: Build Typescript files
- **ts-watch**: Compile typescript in realtime while watching or changes.
- **ts-dev**: Start app in typescript mode using `ts-node-dev`.
- **start**: Builds file and runs built file.
- **js-dev**: Use `nodemon` to run built file. This is useful when using tsc watch.



#### What next?
Please, Star Project
Thank you so much.