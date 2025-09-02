import React from 'react';
import Plot from 'react-plotly.js';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { DataFrame } from 'data-forge';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  var ds = [];
  var df = [];
  for (var i = 0; i < data.series.length; i++) {
    var di = data.series[i];
    var cols = {};
    ds.push([]);
    for (var j = 0; j < di.fields.length; j++) {
      ds[i].push(di.fields[j].values);
      cols[j] = ds[i][j];
    }
    df.push(new DataFrame({ columns: cols }));
  }
  var f = new Function('ds', 'df', options.script);
  var pd = f(ds, df);
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
