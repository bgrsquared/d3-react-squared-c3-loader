[This is a C3 loader for d3-react-squared](https://github.com/bgrsquared/d3-react-squared)

[Documentation (incomplete at the moment)](http://bgrsquared.com/DR2/)

### Notes
--> please check out the c3example.js in the source (./examples).
In your own project, you import the module:

    import DR2C3 from 'd3-react-squared-c3-loader';
    
and then supply a Loader prop to the DR2 component:

    <DR2 c3obj={someC3Obj} Loader={DR2C3}/>
    
Documentation on the 'someC3Obj' will follow.

## Stand-alone example
This repo now includes a stand-alone example. Simply:

```
npm install
```

and then 

```
npm run dev
```

and it should be running on `localhost:8080`.

### Requirements
You need to have c3, d3, react, react-dom in your project to have it running.
(We did not include it in the dist, to keep things small and not have react conflicts).

# Thanks
Huge thanks to all the people involved in providing awesome tools such as:
* [ReactJS](https://facebook.github.io/react/)
* [D3](http://d3js.org)
* [webpack](http://webpack.github.io)
* [BabelJS](https://babeljs.io)
* [redux](https://github.com/rackt/redux)
* [c3.js](http://c3js.org)

and many others...

# Version Updates:
0.0.2:
- Fix example.

0.0.1:
- Init the project.