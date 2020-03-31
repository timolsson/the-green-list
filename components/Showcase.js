import SbEditable from "storyblok-react";

const Showcase = ({ blok }) => {
  const resizedIcon = function(iconImage) {
    if (typeof iconImage !== "undefined") {
      return iconImage.replace(
        "//img2.storyblok.com/80x80",
        "//a.storyblok.com"
      );
    }
    return null;
  };

  return (
    <SbEditable content={blok}>
      <div className="showcase util__flex-eq">
        <h2>{blok.name}</h2>
        <img src={resizedIcon(blok.icon)} className="showcase__icon" />
        <div className="showcase__description">{blok.description}</div>
        <style jsx>{`
          .showcase {
            text-align: center;
            padding: 30px 10px 100px;
          }

          .showcase__icon {
            max-width: 80px;
          }
        `}</style>
      </div>
    </SbEditable>
  );
};

export default Showcase;
