### Netlify deployement

[How to deploy your Vue app with Netlify](https://medium.com/vuejoy/how-to-deploy-your-vue-app-with-netlify-in-less-than-2-min-d6ab26c6557d)

### Netlify Redirect & Rewrite Rules

> History pushstate and single page apps

If you’re developing a single page app and want history pushstate to work so you get clean URLs, you’ll want to enable the following rewrite rule into a ``_redirects`` file like so : 

````
/*    /index.html   200
````

**This will effectively serve the index.html instead of giving a 404 no matter what URL the browser requests.**

See [netlify redirects documentation](https://www.netlify.com/docs/redirects/#rewrites-and-proxying)


### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
