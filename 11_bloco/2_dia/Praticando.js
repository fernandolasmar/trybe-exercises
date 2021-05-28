// Existem duas maneiras de definirmos um componente:
// // Via função JavaScript:
// function Greeting(props) {
//   return (<h1>Hello, {props.name}</h1>);
// }

// // export default Greeting;
// // =========================================================>
// // Via classe :
// import React from 'react';

// class Greeting extends React.Component {
//   render() {
//     return (<h1>Hello, {this.props.name}</h1>) // this.props Embutido nas classes, para importar informações.
//   }
// }
// // ===========================================================>

// function greeting(name){
//   return `Hello, ${name}`;
// }
// console.log(greeting('Samuel'));
// // =============================================================>

// function greeting(name, lastName){
//   return `Hello, ${name} ${lastName}`;
// }
// console.log(greeting('Samuel', 'Silva'));
// // =============================================================>

// import React from 'react';
// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name} {this.props.lastName}</h1>
//   }
// }
// // =================================================================>
// // Agora o chamamos dentro do componente App :
// function App() {
//   return (
//     <main>
//       <Greeting name='Samuel' lastName='Silva' />
//     </main>
//   );
// }
// /*
//  vamos analisar com mais cuidado a linha 6 do código anterior. Ao atribuir as props name e lastName ao componente Greeting , o React automaticamente monta um objeto contendo as informações passadas e as disponibiliza para o componente montado numa variável chamada props , num formato parecido com esse:
//  */
// // const props = { name: 'Samuel', lastName: 'Silva' }


// export default App;

// export default Greeting;