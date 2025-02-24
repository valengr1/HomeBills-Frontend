import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const mes = location.pathname.split("/")[3];

  return (
    <>
      <div>{mes}</div>
      <p>Balance: $2000</p>
    </>

  )
}

export default Header