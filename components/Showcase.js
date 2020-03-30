import SbEditable from "storyblok-react";

const Showcase = ({ blok }) => (
  <SbEditable content={blok}>
    <div className="feature util__flex-eq">
      <h2>{blok.name}</h2>
    </div>
  </SbEditable>
);

export default Showcase;
