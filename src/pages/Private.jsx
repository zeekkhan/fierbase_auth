import { signOut } from "firebase/auth"
import {auth} from "../firebase"
import "./Private.css";

function Private() {
 
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>alert('Signed out Successfully'))
    .catch(error=>{
      console.log(error)
      alert(error.messagge)
    })
  }

  return (
    <div className="private-conatainer" >
     <header className="private-header">
      <h1>Welcome to the Dashboard</h1>
     </header>
     <main className="private-content">
      <h2>Your Profile</h2>
      <p>Welcome to the Private Dashboard. Here you can manage your settings and preferences</p>

     </main>

     <footer className="private-footer">
      <button onClick={handleSignOut}>Sig-Out</button>
     </footer>
    </div>
  )
}

export default Private
