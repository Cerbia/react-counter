"use strict";
'use strict';

var Counter = React.createClass({
	//funkcja, która zwraca obiekt ze stanem

	getDefaultProps: function getDefaultProps() {
		console.log('Initialization phase 1. getDefaultProps()');
	},

	getInitialState: function getInitialState() {
		console.log('Initialization phase 2. getInitialState()');
		return {
			counter: 0
		};
	},

	componentWillMount: function componentWillMount() {
		console.log('Initialization phase 3. componentWillMount()');
		this.setState({
			counter: 1000
		});
	},

	render: function render() {
		var _this = this;

		//nie działa setState()
		console.log('Initialization phase 4. render()');
		return React.createElement('div', {}, React.createElement('button', { className: 'incrementButton', onClick: function onClick(event) {
				_this.increment();
			} }, '+'), React.createElement('button', { className: 'decrementButton', onClick: function onClick(event) {
				_this.decrement();
			} }, '-'), React.createElement('span', {}, 'Counter:' + this.state.counter));
	},

	componentDidMount: function componentDidMount() {
		console.log('Initialization phase 5. componentDidMount()');
		//fetch data
		//w niej możemy wykonać np. jakieś manipulacje DOM
	},

	componentWillReceiveProps: function componentWillReceiveProps() {
		console.log('Update phase 1. componentWillReceiveProps()');
		//stan nie może być aktualizowany przez rodzica komponentu
	},

	shouldComponentUpdate: function shouldComponentUpdate() {
		console.log('Update phase 2. shouldComponentUpdate()');
		if ((this.state.counter + 1) % 5 === 0) {
			return true;
		} else {
			return false;
		}
	},

	componentWillUpdate: function componentWillUpdate() {
		console.log('Update phase 3. componentWillUpdate()');
		//nie działa setState()
	},

	componentDidUpdate: function componentDidUpdate() {
		console.log('Update phase 5. componentDidUpdate()');
	},

	componentWillUnmount: function componentWillUnmount() {
		console.log('Delete phase componentWillUnmount()');
		// clean-up rzeczy związane z odpinaniem timerów czy nasłuchiwania zdarzeń na elementach DOM
	},

	increment: function increment() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function decrement() {
		this.setState({
			counter: this.state.counter - 1
		});
	}

});

var IndependentCounter = React.createClass({
	//funkcja, która zwraca obiekt ze stanem
	getInitialState: function getInitialState() {
		return {
			counter: 0
		};
	},

	increment: function increment() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function decrement() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function render() {
		var _this2 = this;

		return React.createElement('div', {}, React.createElement('button', { className: 'incrementButton', onClick: function onClick(event) {
				_this2.increment();
			} }, '+'), React.createElement('button', { className: 'decrementButton', onClick: function onClick(event) {
				_this2.decrement();
			} }, '-'), React.createElement('span', {}, 'IndependentCounter:' + this.state.counter));
	}
});

var counter = React.createElement('div', {}, React.createElement(Counter), React.createElement(IndependentCounter));

ReactDOM.render(counter, document.getElementById('app'));
