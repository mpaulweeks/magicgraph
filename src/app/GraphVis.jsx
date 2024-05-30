import Graph from 'react-graph-vis';

// https://github.com/crubier/react-graph-vis

function randomColor() {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  return `#${red}${green}${blue}`;
}

export const GraphVis = ({ deck }) => {
  const rawGraph = deck.getGraph();
  const graph = {
    ...rawGraph,
    nodes: rawGraph.nodes.map(n => ({
      ...n,
      color: randomColor(),
    })),
  };

  const options = {
    autoResize: true,
    layout: {
      hierarchical: false,
    },
    edges: {
      color: '#000000',
    },
    // height: "500px"
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
  };
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};
