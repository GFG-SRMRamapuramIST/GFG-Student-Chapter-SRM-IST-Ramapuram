import styled from "styled-components";

import { AlumaniCompanyLogo } from "../../assets";

const AlumaniWorkAt = () => {
  return (
    <AlumaniCompanyStyle>
      <div className="alumanies_logos">
        <div className="alumanies_logos_container_fluid">
          <div className="flex flex-wrap xl:flex-nowrap xl:items-center -mx-4">
            {/* Title */}
            <div className="w-full order-first xl:w-2/12">
              <div className="alumanies_logos_title">Our Alumanies Work At</div>
            </div>

            {/* Logos */}
            <div className="w-full xl:w-10/12">
              <div className="flex flex-wrap xl:flex-nowrap md:grid md:grid-cols-2 xl:flex alumanies_logos_logos">
                {AlumaniCompanyLogo.map((logo, index) => (
                  <figure
                    className="w-1/2 md:w-1/3 xl:w-auto px-2 flex justify-center items-center"
                    key={index}
                  >
                    <img
                      alt={logo.alt}
                      src={logo.url}
                      width={90}
                      className="alumanies_logos_logo_img"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AlumaniCompanyStyle>
  );
};

const AlumaniCompanyStyle = styled.section`
  .alumanies_logos {
    --customers-logos-bg: #f7f9fa;
    --customers-logos-opacity: 0.48;
    padding: 1rem 4rem;
    background-color: #f7f9fa;

    @media (max-width: 768px) {
      padding: 1rem 2rem;
    }
  }

  .alumanies_logos_container_fluid {
    width: 100%;
    padding-right: calc(4rem * 0.5);
    padding-left: calc(4rem * 0.5);
    margin-right: auto;
    margin-left: auto;
  }

  .alumanies_logos_title {
    text-align: center;
    margin-bottom: 16px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2;
    color: #3a444f;

    /* For larger screens, align left */
    @media (min-width: 1280px) {
      text-align: left;
      margin-bottom: 0;
    }
  }

  .alumanies_logos_logos {
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0.48;

    /* For larger screens, align items in a single line and adjust spacing */
    @media (min-width: 1280px) {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      justify-content: space-between;

      figure {
        margin-left: 8px;
        margin-right: 8px;
      }
    }
  }

  .alumanies_logos_logo_img {
    max-height: 50px; /* Ensures all logos have the same height */
    object-fit: contain;
    filter: grayscale(100%); /* Makes logos grey */
    transition: filter 0.3s ease;

    &:hover {
      filter: none; /* Removes greyscale on hover */
    }
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default AlumaniWorkAt;
