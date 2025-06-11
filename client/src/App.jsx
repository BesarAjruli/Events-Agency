import './App.css'

function App() {
  return(
    <>
      <header>
        <nav>
          <a href="">Home</a>
          <a href="">Book a meeting</a>
          <span></span>
          <img src="https://firebasestorage.googleapis.com/v0/b/aquila-web-hosting.appspot.com/o/Logos%20Others%2FBrown_Enchanted_Events_Logo-removebg-preview.png?alt=media&token=a6638157-c587-42a3-8ba3-024a604cf839" alt="logo"/>
          <a href="">Our services</a>
          <a href="">Portfolio</a>
        </nav>
        <h1>Creating memories to last a lifetime</h1>
        <span>All Europe</span>
        <button>Our designs & Planning services</button>
        <div className='artworkContainer'>
          <img className='artwork1' src="https://www.weddingforward.com/wp-content/uploads/2021/10/wedding-altar-decoration-main-phuket_wedding_planner.jpg" alt="arwork" />
          <img className='artowrk2' src="https://www.eastevents.in/wp-content/uploads/2023/10/IMG_2609.jpg" alt="artwork" />
        </div>
        <div className='artworkContainer2'>
          <img className='artwork3' src="https://alexandriamonette.com/wp-content/uploads/2022/11/Mixed-Modern-Wedding-Decorations-For-Your-Reception-03.jpg" alt="artwork" />
        </div>
      </header>

      <div className='nav2'>
        <div>
          <span>Visit our</span>
          <span className='span2'> Social Medias</span>
        </div>
        <div className='second'>
          <span>Check out the</span>
          <span className='span2'>Portfolio</span>
        </div>
      </div>

      <div className='servicesArtwork'>
        <div>
          <span>
            Evenets become feelings, feelings become events
          </span>
          <button>The feelings we bring to you</button>
        </div>
      </div>

      <div className='experience'>
        <div className='expImgContainer'>
          <img src="https://www.eastevents.in/wp-content/uploads/2023/10/IMG_2609.jpg" alt="indoor decor" />
          <img className='img2' src="https://www.weddingforward.com/wp-content/uploads/2021/10/wedding-altar-decoration-main-phuket_wedding_planner.jpg" alt="ourdoor decor" />
        </div>

        <div className='exp2'>
          <div><span>Interior and outdoor decorations</span></div>
          <div className='exp2Text'>
            <div>
              <span>100+</span>
              <span>Clients</span>
            </div>
            <div>
              <span>15+</span>
              <span>Years of experience</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App