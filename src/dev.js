import './dev.scss';
import ReactRouterConfig from './main';

/*===example start===*/

// install: npm install afeiship/react-router-config --save
// import : import ReactRouterConfig from 'react-router-config'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-router-config">
        <ReactRouterConfig ref='rc' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
