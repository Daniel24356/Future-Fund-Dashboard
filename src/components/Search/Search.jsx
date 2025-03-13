import './Search.css'
import { CiSearch } from "react-icons/ci";
import Flag from '../../assets/IMAGE/nigerian-flag-circle-flag-of-nigeria-in-round-design-shape-vector.jpg'
import Toggle from '../Toggle/Toggle'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import ProfilePic from '../../assets/IMAGE/OIF.jpeg'
function Search  ({ count = 8 }) {
  return (
    <div className='searchmain'>
      <div className='searchdiv'>
      <CiSearch />
        <input type='text' placeholder='Search (Ctrl+/)' 
        className='searchinput'
        />
      </div>
      <div className='searchdiv1'>
        <div className='flag1'>
          <img src={Flag} alt="Nigeria_Flag" />
        </div>
        <div className='moon'>
          <Toggle></Toggle>
        </div>
        <div className='flag2'>
          <MdOutlineDashboardCustomize size={30}/>
        </div>
        <div className='flag3'>
        <button
      style={{
        position: "relative",
        background: "none",
        border: "none",
        padding: "15px",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "0.5s",
      }}
      onMouseOver={(e) => (e.currentTarget.style.background = "rgba(170, 170, 170, 0.062)")}
      onMouseOut={(e) => (e.currentTarget.style.background = "none")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        style={{ color: "black" }}
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
        ></path>
      </svg>

      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "red",
            color: "white",
            fontSize: "12px",
            fontWeight: "bold",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex:6
          }}
        >
          {count}
        </span>
      )}
    </button>
        </div>

        <div className='flag'>
          <img src={ProfilePic} alt="ProfilePic" className='profilepic' />
          {/* <span
          style={{
            position: "absolute",
            top: "61px",
            right: "15px",
            background: "green",
            color: "white",
            fontSize: "12px",
            fontWeight: "bold",
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            border:"2px solid white",
            zIndex:6
          }}
        >
        </span> */}
        </div>
      </div>
    </div>
  )
}

export default Search