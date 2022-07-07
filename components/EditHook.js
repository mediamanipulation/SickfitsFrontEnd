import { useState, useRef, useEffect } from 'react';

const EditableField = () => {
  const [isEditing, setEditing] = useState(false);
  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div>
      {isEditing && <input ref={inputRef} />}
      <button type="button" onClick={toggleEditing}>
        Edit
      </button>
    </div>
  );
};

// ReactDOM.render(<EditableField />, document.getElementById("root"));
// <script src="https://unpkg.com/react@16.7.0-alpha.2/umd/react.production.min.js"></script>
// <script src="https://unpkg.com/react-dom@16.7.0-alpha.2/umd/react-dom.production.min.js"></script>

// <div id="root"></div>
// https://stackoverflow.com/questions/53314857/how-to-focus-something-on-next-render-with-react-hooks
// https://reactjs.org/docs/hooks-effect.html
