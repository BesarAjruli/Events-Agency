import './App.css'
import Icon from '@mdi/react';
import { mdiEmail, mdiPhone, mdiClock, mdiMapMarker } from '@mdi/js';

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
          <div><span className='mainSpan'>Interior and outdoor decorations</span></div>
          <div className='exp2Text'>
            <div>
              <span className='expNr'>100+</span>
              <span>Happy clients</span>
            </div>
            <div>
              <span className='expNr'>15+</span>
              <span>Years of experience</span>
            </div>
          </div>
        </div>
      </div>


      <div className='portfolio'>
      <span>Some of our work</span>
        <div className="portImgCont">
        <img src="https://alexandriamonette.com/wp-content/uploads/2022/11/Mixed-Modern-Wedding-Decorations-For-Your-Reception-03.jpg" alt="port1" /></div>
        <div className="portImgCont"><img src="https://ellebeedesign.co.uk/cdn/shop/articles/RECTORY-01351.jpg?v=1723828840&width=1067" alt="portfolio image 2" /></div>
        <div className="portImgCont main"><img src="https://wp-media-partyslate.imgix.net/2021/01/photo-95f006aa-8411-4fb9-8c0f-1ed68fe3cadd.jpg?auto=compress%2Cformat&ixlib=php-3.3.1" alt="" /></div>
        <div className="portImgCont"><img src="https://images.squarespace-cdn.com/content/v1/5f6c63274865985e13575ba8/12b70f4c-7fba-4a12-bc9a-19f24f97ffeb/redhouse-barn-wedding-decor.jpeg" alt="" /></div>
        <div className="portImgCont"><img src="https://www.tulleandchantilly.com/blog/wp-content/uploads/2020/09/Table-setting-decors-backyard-wedding-decorsmicrowedding-decor-via-Brit-Morin.jpg" alt="" /></div>
      </div>

      <footer>
        <div><img src="https://firebasestorage.googleapis.com/v0/b/aquila-web-hosting.appspot.com/o/Logos%20Others%2FBrown_Enchanted_Events_Logo-removebg-preview.png?alt=media&token=a6638157-c587-42a3-8ba3-024a604cf839" alt="logo" /></div>
        <div className='footerNav'>
          <a href="">Home</a>
          <a href="">Book a meeting</a>
          <a href="">Our Services</a>
          <a href="">Portfolio</a>
        </div>
        <div className='divContainer'>
          <div>
            <span>Contact us</span>
            <ul className='contactInfo'>
              <li><Icon path={mdiEmail} size={1}/> youremail@gmail.com</li>
              <li><Icon path={mdiPhone} size={1}/> +1 23 456 789</li>
              <li><Icon path={mdiMapMarker} size={1}/> Square Garden, 101, NY</li>
              <li><Icon path={mdiClock} size={1}/> By appointment only</li>
            </ul>
          </div>
          <div className='workingHours'>
            <span>Working Hours</span>
            <ul>
              <li>Monday-Friday: 08:00 - 18:00</li>
              <li>Saturday-Sunday: 10:00 - 16:00</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App