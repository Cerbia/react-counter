'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter() {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
    }

    _createClass(Counter, [{
        key: 'getDefaultProps',
        value: function getDefaultProps() {
            console.log('Initialization phase 1. getDefaultProps()');
        }
    }, {
        key: 'getInitialState',
        value: function getInitialState() {
            console.log('Initialization phase 2. getInitialState()');
            return {
                counter: 0
            };
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('Initialization phase 3. componentWillMount()');
            this.setState({
                counter: 1000
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            //nie działa setState()
            console.log('Initialization phase 4. render()');
            return React.createElement('div', {}, React.createElement('button', { className: 'incrementButton', onClick: function onClick(event) {
                    _this2.increment();
                } }, '+'), React.createElement('button', { className: 'decrementButton', onClick: function onClick(event) {
                    _this2.decrement();
                } }, '-'), React.createElement('span', {}, 'Counter:' + this.state.counter));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('Initialization phase 5. componentDidMount()');
            //fetch data
            //w niej możemy wykonać np. jakieś manipulacje DOM
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            console.log('Update phase 1. componentWillReceiveProps()');
            //stan nie może być aktualizowany przez rodzica komponentu
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            console.log('Update phase 2. shouldComponentUpdate()');
            if ((this.state.counter + 1) % 5 === 0) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            console.log('Update phase 3. componentWillUpdate()');
            //nie działa setState()
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log('Update phase 5. componentDidUpdate()');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('Delete phase componentWillUnmount()');
            // clean-up rzeczy związane z odpinaniem timerów czy nasłuchiwania zdarzeń na elementach DOM
        }
    }, {
        key: 'increment',
        value: function increment() {
            this.setState({
                counter: this.state.counter + 1
            });
        }
    }, {
        key: 'decrement',
        value: function decrement() {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    }]);

    return Counter;
}(React.Component);

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
        var _this3 = this;

        return React.createElement('div', {}, React.createElement('button', { className: 'incrementButton', onClick: function onClick(event) {
                _this3.increment();
            } }, '+'), React.createElement('button', { className: 'decrementButton', onClick: function onClick(event) {
                _this3.decrement();
            } }, '-'), React.createElement('span', {}, 'IndependentCounter:' + this.state.counter));
    }
});

var counter = React.createElement('div', {}, React.createElement(Counter), React.createElement(IndependentCounter));

ReactDOM.render(counter, document.getElementById('app'));
