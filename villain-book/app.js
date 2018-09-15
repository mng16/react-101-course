var villain = {
    name: 'Lex luthor', 
    status: "At large", 
    allies: [
      {name: "Brainiac"},
      {name: "Darkseid"},
      {name: "Bizarro"}
    ],
    enemies: [
      {name:"Superman"},
      {name:"Wonder Woman"},
    ]
  };
  
  const VillainProfile = ({name, status}) => 
    React.createElement('div', null, [
      React.createElement('p', null, "Name: " + name),
      React.createElement('p', null, "Status: " + status)
    ]);
  
  /* App Component renders the whole app. */
  const App = ({villain}) => 
    React.createElement('div', null, [
      React.createElement('h1', null, 'VillainBook.com'),
      React.createElement(VillainProfile, villain),
      React.createElement(AllyList, {villain:villain}),
      React.createElement(EnemyList, {villain:villain})
    ]);
   
  
  const AllyList = (props) => 
    React.createElement('ul', null, props.villain.allies.map((ally) => {
      return React.createElement('li', {key: ally.name+"-li"}, [
        React.createElement(Ally, ally)
      ])
    }));
  
  const EnemyList = (props) => 
    React.createElement('ul', null, props.villain.enemies.map((enemy) => {
      return React.createElement('li', {key: enemy.name+"-li"}, [
        React.createElement(Enemy, enemy)
      ])
    }));
  
  const Ally = (props) => 
    React.createElement('span', {key:props.name}, "Allied with: " + props.name)
    
  const Enemy = (props) => 
    React.createElement('span', {key:props.name}, "Enemy: " + props.name)
    
  ReactDOM.render(
    React.createElement(App, {villain: villain}),
    document.getElementById('app')
  );