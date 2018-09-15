const cell = (props) => 
    React.createElement('td', {
        onClick:() => this.handleClick(props)
    }, props.item.value)


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            empty: true,
            isX: true,
            grid: [
                [{pos: 0, value: "E"}, {pos: 1, value: "E"}, {pos: 2, value: "E"}],
                [{pos: 3, value: "E"}, {pos: 4, value: "E"}, {pos: 5, value: "E"}],
                [{pos: 6, value: "E"}, {pos: 7, value: "E"}, {pos: 8, value: "E"}],
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (item) {
        const newGrid = this.state.grid.map(row => {
            row.map(cell => {
                    if(item.pos == cell.pos) {
                        this.state.isX ? cell.value = "O" : cell.value = "X";
    
                        this.setState({
                            isX: !this.state.isX
                        })
                    }
                    return cell;
            })
            return row;
        })
        console.log(newGrid);

        

        this.setState ({
            grid: newGrid
        })

        
    }

    
          
    render() {  
       return React.createElement('table', null, this.state.grid.map(element => {
        return React.createElement('tr',null, element.map(item => {
            return  React.createElement(cell,{item:item})
            
            
            // React.createElement('td', 
            //     {
            //         onClick:() => this.handleClick(item)
            //     },
            //     item.value)
        })) 
       }));
    }
}

ReactDOM.render(
    React.createElement(App, null, []),
    // table,
    app
);



// class MyComponent extends React.Component {
    
//     render() {
//         return React.createElement('h1', null, "I am a stateful component");
//     }
// }


// ReactDOM.render(
//     React.createElement(MyComponent, null, []),
//     // table,
//     app
// );







  // let symbol = "o";

        // if(this.state.player === "a") {
        //     symbol = "x";
        // }

        // if (this.state.player === "a") {
        //     symbol = "x";
        //     return React.createElement('td',
        //             {
        //                 onClick:() => this.setState({
        //                     empty: false,
        //                     player: "b",
        //                 })
        //             },
        //             symbol)
        //  } else {
        //     symbol = "o";
        //     return React.createElement('td',
        //         {
        //             onClick:() => this.setState({
        //                 empty: false,
        //                 player: "a",
        //              })
        //         },
        //     symbol)
        //  }

        // }