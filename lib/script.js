// const container = React.createElement(
//     'div' , 
//     {className : 'container', id: 'container'} ,
//     [
//         React.createElement('section', {key:1} ,[
//             React.createElement(
//                 'p', 
//                 {}, 
//                 'The library for web'
//             ),
//         ]),  
//     ]
// )

const h2 = /*#__PURE__*/React.createElement("h2", null, "Hello JSX");
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(h2);
//# sourceMappingURL=script.js.map