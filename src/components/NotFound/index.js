import Header from '../Header'
import './index.css'

const notFoundImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52PKn0BjJ5L1ZyMDDLcNQKOIx9FVRM-21ow&usqp=CAU'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <div className="not-found-image-container">
        <img className="not-found-image" src={notFoundImage} alt="not found" />
      </div>
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-paragraph">
        we are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound