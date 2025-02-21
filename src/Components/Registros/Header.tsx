import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const mes = location.pathname.split("/")[2];

  return (
    <div>{mes}</div>
  )
}

export default Header