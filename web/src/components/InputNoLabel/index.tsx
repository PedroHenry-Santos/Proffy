import React, {InputHTMLAttributes} from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({name, children, ...rest}) => {
  return (
    <div className="input-block">

      <input type="text" id={name} {...rest}>
        {children}
      </input>
    </div>
  );
}

export default Input;