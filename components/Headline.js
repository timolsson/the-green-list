import SbEditable from "storyblok-react";

const Headline = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className="headline">
        <h1>{blok.headline}</h1>
      </div>
    </SbEditable>
  );
};

export default Headline;
