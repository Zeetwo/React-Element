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

const h2 = <h2>Hello JSX</h2>


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(h2)
    