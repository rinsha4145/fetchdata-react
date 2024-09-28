import React, { useState, useEffect } from 'react';

function App() {
  // State to hold the list of users
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from the API when the component mounts
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  return (
    <div style={styles.container}>
      <h1>Random User List</h1>
      <ul style={styles.list}>
        {users.map((user, index) => (
          <li key={index} style={styles.listItem}>
            {user.name.first} {user.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px',
  },
  listItem: {
    fontSize: '18px',
    marginBottom: '10px',
  },
};

export default App;
