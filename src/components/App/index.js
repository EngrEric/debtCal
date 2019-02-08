import React from 'react';
import { message } from 'antd';

import 'src/assets/stylesheets/base.scss';

class App extends React.Component {

  alertMessage(){
    message.success("good in the hands of God", 5);
  }
  render(){
    return (
      <div>
        {this.alertMessage()}
      </div>
    );
  }
}

export default App;
