import Reviews from "./Reviews";

function Home({ user }) {
  if (user) {
    return (
      <>
        <h3>Welcome, {user.username}!</h3>
        <Reviews />
      </>
    )
  } else {
    return <h1>Please Login or Sign Up to continue</h1>
  }
}

export default Home;
