import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import Plot from 'react-plotly.js';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  var ds = data.series.map((x) => x.fields);
  for (var i = 0; i < ds.length; i++) {
    ds[i] = ds[i].map((x) => x.values);
  }
  var f = new Function('ds', options.script);
  var pd = f(ds);
  return <Plot data={pd} layout={Object.assign(layout, { width: width, height: height })} />;
};

var layout = {
  font: {
    size: 16,
    color: 'lightgrey',
  },
  xaxis: {
    tickangle: 25,
    automargin: true,
    showgrid: false,
    zeroline: false,
    showline: false,
  },
  yaxis: {
    automargin: true,
    showgrid: false,
    zeroline: false,
    showline: false,
  },
  margin: {
    l: 5,
    r: 5,
    t: 5,
    b: 5,
  },
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
};
