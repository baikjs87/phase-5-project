import Reviews from "./Reviews";
import './styles/home.css'

function Home({ user, reviews }) {
  if (user) {
    return (
      <>
        <h6 className="welcome">Welcome, {user.username}!</h6>
        <Reviews reviews={reviews} />
      </>
    )
  } else {
    return <h1>Please Login or Sign Up to continue</h1>
  }
}

export default Home;
