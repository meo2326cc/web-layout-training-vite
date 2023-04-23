import logo from './img/party-popper.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



export function Header(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt="logo" width="30" height="24" className="d-inline-block align-text-top"/>
      靈感空間
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" to="/">首頁</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/feature">特色</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/plain">方案選擇</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/contact">聯絡我們</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export function Footer() {
  return (<>    
 <div className="bg-secondary">
  <div className="container p-3">
    <div className="row">
    
      <ul className='d-flex  justify-content-center align-items-center py-5'>
        <Link className="nav-link active" to="/feature"><li>特色</li></Link>
        <Link className="nav-link active" to="/plain"><li>方案選擇</li></Link>
        <Link className="nav-link active" to="/contact"><li>聯絡我們</li></Link>
      </ul>
    </div>
       <p className='text-center text-white fs-6'>靈感空間2023</p>
 </div>
 
 </div>
  </>
  );
}

