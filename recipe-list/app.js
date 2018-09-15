var header = React.DOM.h1(null, "Hello, world!");
var app = document.getElementById('app')

let page = React.createElement('div', null, 
    React.createElement('h1', null, "Hello, world!"), 
    React.createElement('ul', null, [
        React.createElement('li', null, "Apples"),
        React.createElement('li', null, "Bananas"),
        React.createElement('li', null, "Oranges")
    ]));

let foodsArray = [
    {
        food: "Burgers",
        recipe: "https://realfood.tesco.com/recipes/classic-homemade-burger.html"
    },
    {
        food: "Chips",
        recipe: "https://www.lovepotatoes.co.uk/recipes/oven-chips-homemade-style/"
    },
    {
        food: "Ketchup",
        recipe: "http://allrecipes.co.uk/recipe/44240/slow-cooker-homemade-tomato-ketchup.aspx"
    },
    {
        food: "Sushi",
        recipe: "http://allrecipes.co.uk/recipe/952/basic-sushi-roll.aspx"
    }
];

let table = React.createElement('table', null, 
    React.createElement('tr', null, 
        React.createElement('th', null, "Food"),
        React.createElement('th', null, "Recipe")
    ),
    foodsArray.map(foodObject => 
        React.createElement('tr', null, 
            React.createElement('td', null, foodObject.food), 
            React.createElement('td', null, 
                React.createElement('a', {href: foodObject.recipe}, "Link to recipe")
            )
        )
    )
);

class MyComponent extends React.Component {
    
    render() {
        return React.createElement('h1', null, "I am a stateful component");
    }
}


ReactDOM.render(
    React.createElement(MyComponent, null, []),
    // table,
    app
);