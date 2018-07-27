class Counter extends React.Component {
    
    getDefaultProps()  {
        console.log('Initialization phase 1. getDefaultProps()');
    }

    getInitialState() {
        console.log('Initialization phase 2. getInitialState()');
        return {
            counter: 0
        };
    }

    componentWillMount() {
        console.log('Initialization phase 3. componentWillMount()');
        this.setState({
            counter: 1000
        });
    }

    render() {
        //nie działa setState()
        console.log('Initialization phase 4. render()');
        return React.createElement('div', {}, 
            React.createElement('button', {className: 'incrementButton', onClick: (event) => {this.increment()} }, '+'),
            React.createElement('button', {className: 'decrementButton', onClick: (event) => {this.decrement()} }, '-'),
            React.createElement('span', {}, 'Counter:' + this.state.counter)
        );
    }

    componentDidMount() {
        console.log('Initialization phase 5. componentDidMount()');
        //fetch data
        //w niej możemy wykonać np. jakieś manipulacje DOM
    }

    componentWillReceiveProps() {
        console.log('Update phase 1. componentWillReceiveProps()');
        //stan nie może być aktualizowany przez rodzica komponentu
    }

    shouldComponentUpdate() {
        console.log('Update phase 2. shouldComponentUpdate()');
        if( (this.state.counter + 1 ) % 5 === 0) {
            return true;
        } else {
            return false;
        }
    }

    componentWillUpdate() {
        console.log('Update phase 3. componentWillUpdate()');
        //nie działa setState()
    }

    componentDidUpdate() {
        console.log('Update phase 5. componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('Delete phase componentWillUnmount()');
        // clean-up rzeczy związane z odpinaniem timerów czy nasłuchiwania zdarzeń na elementach DOM
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1 
        });
    }

}

var IndependentCounter = React.createClass({
    //funkcja, która zwraca obiekt ze stanem
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1 
        });
    },

    render: function() {
        return React.createElement('div', {}, 
            React.createElement('button', {className: 'incrementButton', onClick: (event) => {this.increment()} }, '+'),
            React.createElement('button', {className: 'decrementButton', onClick: (event) => {this.decrement()} }, '-'),
            React.createElement('span', {}, 'IndependentCounter:' + this.state.counter)
        );
    }
});

var counter = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(IndependentCounter)
);

ReactDOM.render(counter, document.getElementById('app')); 
