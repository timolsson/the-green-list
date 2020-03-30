import Headline from "./Headline";
import Showcase from "./Showcase";
import Grid from "./Grid";
import Placeholder from "./Placeholder";

const Components = {
  headline: Headline,
  showcase: Showcase,
  grid: Grid
};

const Component = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default Component;
