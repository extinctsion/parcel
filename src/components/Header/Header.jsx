import "./Header.css";

import ParcelLogo from "../../assets/logo-parcel.png";

export default function Header() {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="logoImg">
            <img src={ParcelLogo} alt="logo-parcel" />
          </div>
          <nav>
            <ul className="navLink">
              <li>
                <a href="javascript:void(0)">Terms of Service</a>
              </li>
              <li>
                <a href="javascript:void(0)">Privacy Policy</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
