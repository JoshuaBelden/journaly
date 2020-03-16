import { width, lightGrey } from "../../../utils";

const HomeSection = ({ sectionHeading, grey = false, children }) => {
  return (
    <section className="home-section">
      <div>
        <h1>{sectionHeading}</h1>

        {children}
      </div>

      <style jsx>{`
        .home-section {
          width: 100%;
          ${grey && `background-color: ${lightGrey};`}
        }

        .home-section > div {
          margin: 0 auto;
          max-width: ${width.desktopHD}px;
          padding: 30px 20px;
        }

        h1 {
          margin-bottom: 50px;
          text-align: center;
        }

        .j-video {
          display: block;
          margin: 0 auto;
        }
        @media screen and (max-width: 750px) {
          .j-video {
            width: 320px;
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSection;