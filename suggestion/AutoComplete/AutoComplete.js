import React from 'react';
import UIAutoComplete from '../../core/UIAutoComplete';

const { Overlay, AutoCompleteInput } = UIAutoComplete;
const Context = React.createContext({});

const AutoComplete = React.forwardRef((props, ref) => {
  const bounds = { width: '100px' };

  const { children } = props;
  return (
    <Context.Provider
      value={{
        
      }}
    >
      <UIAutoComplete
        overlay={(
          <Overlay style={{ width: bounds.width }}>
            
          </Overlay>
        )}
      >
        {children}
      </UIAutoComplete>
    </Context.Provider>
  );
});

AutoComplete.Input = () => {
  return (
    <AutoCompleteInput loading />
  );
};
AutoComplete.defaultProps = {
  children: <AutoComplete.Input />,
};
export default AutoComplete;
