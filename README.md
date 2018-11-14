# generator-wemp
> generator for wechat mini program

## **Usage**

First, install [Yeoman](http://yeoman.io) and generator-wemp using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-wemp
```

Then generate your new project:

```bash
yo wemp
```

## **Generators**

Available generators:

* [wemp](#app) (aka: [wemp:app](#app))
* [wemp:page](#page)
* [wemp:component](#component)
* [wemp:kiss](#kiss)

### **App**
Sets up a new weapp, generating a page boilerplate you need to get started. The generator also allow you to config the ext.json and API services.

Example:

    yo wemp

### **page**

Generate a page directory include weapp page 4 elements and insert the path to `app.json`

Example:

    yo wemp:page

### **component**

Generate a component.

Example:

    yo wemp:component

### **kiss**

[kiss-weapp](https://github.com/KingChung/kiss-weapp) is a weapp components library. There are some useful components could make you develop weapp feel better. 

It will copy the kiss' component to your target page and config the page `index.json`

Example:

    yo wemp:kiss




## **Getting To Know Yeoman**

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [King Chung](https://github.com/KingChung)


[npm-url]: https://npmjs.org/package/generator-wemp
