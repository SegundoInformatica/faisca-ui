import './sobre.css';

import { useState } from 'react';

  function Dropdown({ person }) {
      const [display, setDisplay] = useState('none');

      function handleClick() {
          if (display === 'none') {
              setDisplay('block');
          } else {
              setDisplay('none');
          }
      }

      return (
          <div>
              <div onClick={handleClick}>
                 {person.name}
              </div>
              <div style={{display: display}}>
                 <p>{person.info}</p>
              </div>
          </div>
      );
  }

  export { Dropdown };

  import { Dropdown } from './Dropdown';

  function ParentComponent() {
      const people = [
          { name: 'Pessoa 1', info: 'Informação sobre a pessoa 1' },
          { name: 'Pessoa 2', info: 'Informação sobre a pessoa 2' },
          { name: 'Pessoa 3', info: 'Informação sobre a pessoa 3' },
          // More people...
      ];

      return (
          <div>
              {people.map((person, index) => (
                 <Dropdown key={index} person={person} />
              ))}
          </div>
      );
  }

  export { ParentComponent };