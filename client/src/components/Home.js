import {Redirect} from 'react-router-dom';

function Home({ user }) {
  // return (
  // <h1>Welcome!</h1>
  // )
  if (user) {
    return <h1>Welcome, {user.username}!</h1>;
  } else {
    return <h1>You need to Login or Sign Up to continue</h1>
  }
}

export default Home;
