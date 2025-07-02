import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'conf',
      name: 'Config',
      description: '',
      defaultValue: 'test',
      settings: {
        useTextarea:true,
        rows: 5,
    }
    });
});
