import { motion } from "framer-motion";
import icon_home from "../../assets/icon_home.png";
import icon_awan from "../../assets/icon_awan.png";
import icon_data from "../../assets/icon_data.png";
import icon_ikan from "../../assets/icon_ikan.png";
import icon_present from "../../assets/icon_present.png";
import icon_chevLeft from "../../assets/icon_chevLeft.png";
import icon_chevRight from "../../assets/icon_chevRight.png";
import icon_bullet from "../../assets/icon_bullet.png";

const Sidebar = ({ children }) => {
  return (
    <div>
      <motion.div animate={{ width: "200px" }} className="sidebar">
        <section>
          <NavLink to="/" key="home">
            <img src={icon_home} />
            <p>Halaman Utama</p>
          </NavLink>
          <NavLink to="/" key="home">
            <img src={icon_home} />
            <p>Halaman Utama</p>
          </NavLink>
          <NavLink to="/" key="home">
            <img src={icon_home} />
            <p>Halaman Utama</p>
          </NavLink>
          <NavLink to="/" key="home">
            <img src={icon_home} />
            <p>Halaman Utama</p>
          </NavLink>
          <NavLink to="/" key="home">
            <img src={icon_home} />
            <p>Halaman Utama</p>
          </NavLink>
          <NavLink to="/" key="home">
            <img src={icon_home} />
            <p>Halaman Utama</p>
          </NavLink>
        </section>
      </motion.div>

      <main>{children}</main>
    </div>
  );
};
export default Sidebar;
