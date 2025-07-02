import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import Plot from 'react-plotly.js';

interface Props extends PanelProps<SimpleOptions> {}


export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {

  console.log(data)
  return (
    <Plot
    data={[
      {type: 'bar', x: [1, 2, 3], y: [2, 1, 3]},
    ]}
    layout={ {width: 320, height: 240, title: {text: 'A Fancy Plot'}} }
  />
  );
};
