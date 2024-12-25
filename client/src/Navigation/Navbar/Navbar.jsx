import styled from "styled-components";

import { FaChevronDown } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="main_navbar_header">
        <div className="main_navbar">
          <div className="main_navbar_logo">
            <img src="./img.png" alt="GFG Logo" />
            SRM Ramapuram
          </div>
          <nav className="main_nav">
            <ul className="main_menu">
              <li>
                <button className="main_menu_links">
                  Blogs{" "}
                  <span className="main_menu_dropdown_icon">
                    <FaChevronDown />
                  </span>
                </button>
                <div className="main_menu_dropdown">
                  <div className="main_menu_dropdown_primary">
                    <strong className="main_menu_dropdown_title">Blogs</strong>
                    <a className="main_menu_dropdown_options">
                      <strong className="main_menu_dropdown_options_title">
                        Website Launch
                        <span className="main_menu_dropdown_options_arrow">
                          <FaArrowRightLong />
                        </span>
                      </strong>
                      <span className="main_menu_dropdown_options_desc">
                        1st January 2025
                      </span>
                    </a>
                    <a className="main_menu_dropdown_options">
                      <strong className="main_menu_dropdown_options_title">
                        Website Launch
                        <span className="main_menu_dropdown_options_arrow">
                          <FaArrowRightLong />
                        </span>
                      </strong>
                      <span className="main_menu_dropdown_options_desc">
                        1st January 2025
                      </span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <button className="main_menu_links">Our Team</button>
              </li>
            </ul>
            <ul className="user_nav">
              <li>
                <a className="main_menu_links">Create an account</a>
              </li>
              <li>
                <a
                  className="main_menu_links"
                  style={{
                    color: "#fa5320",
                  }}
                >
                  Join Us{" "}
                  <span className="user_nav_dropdown_icon">
                    <FaArrowRightLong />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.section`
  .main_navbar_header {
    display: block;
    position: fixed;
    top: 24px;
    left: 50%;
    width: calc(100% - 6.4rem);
    max-width: 160rem;
    padding: 12px 40px;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 4.8rem;
    transform: translateX(-50%);
    z-index: 1001;
    transition: box-shadow 500ms ease-in-out;
  }

  .main_navbar {
    display: flex;
    align-items: center;
    min-height: 40px;
  }

  .main_navbar_logo {
    display: block;
    position: relative;
    line-height: 1;
    fill: #fa5320;
  }

  .main_nav {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1.6;

    ul {
      list-style-type: none;
      padding-left: 0;
      margin-bottom: 0;
    }
  }

  .main_menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-left: 32px;

    .main_menu_dropdown {
      visibility: hidden;
      position: absolute;
      margin-left: -10px;
      top: 100%;
      margin-top: 4px;
      opacity: 0;
      transform: scale(0.98) translateY(2%);
      z-index: 101;
      background-color: #fff;
      border-radius: 0.4rem;
      border: 1px solid #eef0f3;
      box-shadow: 0px 40px 80px -16px rgba(199, 205, 212, 0.25),
        0px 20px 60px -20px rgba(29, 38, 46, 0.1);
      min-width: 18rem;
      transition: all 200ms ease-in-out 0s, visibility 0s linear 0.2s,
        z-index 0s linear 0.01s;

      .main_menu_dropdown_primary {
        padding: 20px 12px 12px;
        background-color: transparent;
        border-radius: 0.4rem;

        .main_menu_dropdown_title {
          display: block;
          margin-left: 16px;
          color: #0578d6;
          font-weight: 500;
          font-size: 0.9rem;
          line-height: 2;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
        }

        .main_menu_dropdown_title:hover {
          cursor: pointer;
        }

        .main_menu_dropdown_options {
          background-color: transparent;
          display: flex;
          padding: 8px 16px;
          border-radius: 0.4rem;
          transition: background-color 200ms ease-in;
          text-decoration-color: transparent;
          position: relative;
          flex-direction: column;
          gap: 8px;

          .main_menu_dropdown_options_title {
            gap: 8px;
            color: #28323b;
            display: flex;
            align-items: center;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.2;

            .main_menu_dropdown_options_arrow {
              opacity: 0;
              color: #4c555e;
              font-size: 0.5rem;
              transition: all 0.3s ease-in-out;
            }
          }

          .main_menu_dropdown_options_desc {
            color: #4c555e;
            font-size: 0.9rem;
            line-height: 1.2;
            transition: color 0.1s ease-in-out;
            white-space: nowrap;
          }
        }

        .main_menu_dropdown_options:hover {
          cursor: pointer;
          background-color: #f7f9fa;

          .main_menu_dropdown_options_arrow {
            opacity: 1;
            font-size: 0.9rem;
          }
        }
      }
    }

    .main_menu_dropdown:hover {
      visibility: visible;
      opacity: 1;
      transform: scale(1) translateY(0);
      transition: all 200ms ease-in-out 0s, visibility 0s linear;
    }
  }

  .main_menu_dropdown_icon {
    font-size: 0.9rem;
    color: #a1a7ad;
    transition: color 0.1s ease-in-out;
  }

  .main_menu_links {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
    transition: all 0.1s ease-in-out;
    color: #4c555e;
    border: 0;
    border-radius: 2rem;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }

  .main_menu .main_menu_links:hover {
    border-radius: 24px;
    background-color: #f7f9fa;
    color: #333;
  }

  .main_menu .main_menu_links:hover + .main_menu_dropdown {
    visibility: visible;
    opacity: 1;
    transform: scale(1) translateY(0);
    transition: all 200ms ease-in-out 0s, visibility 0s linear;
  }

  .user_nav .main_menu_links {
    transition: all 0.3s ease-in-out;
  }

  .user_nav .main_menu_links:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 8px;
    color: inherit;
  }

  .user_nav {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 0;
    padding-left: 0;
    color: #4c555e;
  }

  .user_nav_dropdown_icon {
    font-size: 0.8rem;
    color: "#fa5320";
  }
`;

export default Navbar;
