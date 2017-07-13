import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ButtonComponent = (props) => {
  const buttonText = props.buttonText;
  const style = {
    margin: 12,
  };

  return (
    <MuiThemeProvider>
      <RaisedButton
        label={buttonText}
        primary={true}
        style={style}
      />  
    </MuiThemeProvider>
  )
}

export default ButtonComponent;
