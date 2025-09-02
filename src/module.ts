import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'script',
      name: 'Script',
      description: '',
      defaultValue: 'console.log(ds)\nfor (var x of df[0].groupBy((r) => r[0])) {console.log(x.toRows())}\nreturn [{ type: "bar", x: [0], y: [1] }];',
      settings: {
        useTextarea:true,
        rows: 10,
    }
    });
});
