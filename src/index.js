import React from "react";
import ReactDOM from "react-dom";
import data from "./empty-home-tax100.json";

import {
  Sigma,
  RandomizeNodePositions,
  RelativeSize,
  NOverlap
} from "react-sigma";
import Dagre from "react-sigma/lib/Dagre";
import ForceLink from "react-sigma/lib/ForceLink";
import ReactSigmaLayoutPlugin from "react-sigma/lib/ReactSigmaLayoutPlugin";

data.edges.forEach((edge) => {
  edge.id = Math.random();
});

const App = () => {
  return (
    <div>
      <Sigma
        graph={data}
        settings={{
          animationsTime: 3000,
          defaultLabelSize: 15,
          drawLabels: true,
          labelSize: "fixed",
          labelThreshold: 5
        }}
        style={{
          height: "400px",
          maxWidth: "inherit",
          backgroundColor: "lightgray"
        }}
      >
        <RandomizeNodePositions>
          <ForceLink
            background
            easing="cubicInOut"
            iterationsPerRender={1}
            linLogMode
            timeout={1000}
            worker
            outboundAttractionDistribution={false}
          />

          <NOverlap
            duration={3000}
            easing="quadraticInOut"
            gridSize={20}
            maxIterations={100}
            nodeMargin={10}
            scaleNodes={4}
            speed={10}
          />
          <RelativeSize initialSize={5} />
        </RandomizeNodePositions>

        {/* <RandomizeNodePositions /> */}
        {/* <ReactSigmaLayoutPlugin
          start={Sigma.layouts.dagre.start}
          config={Sigma.layouts.dagre.configure}
          stop={() => console.warn("dagre stop not implemented")}
        /> */}
      </Sigma>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
