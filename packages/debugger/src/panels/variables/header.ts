// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { ITranslator, nullTranslator } from '@jupyterlab/translation';
import { Toolbar } from '@jupyterlab/ui-components';
import { PanelLayout, Widget } from '@lumino/widgets';

/**
 * The header for a Variables Panel.
 */
export class VariablesHeader extends Widget {
  /**
   * Instantiate a new VariablesHeader.
   */
  constructor(translator?: ITranslator) {
    super({ node: document.createElement('div') });
    this.node.classList.add('jp-stack-panel-header');

    translator = translator || nullTranslator;
    const trans = translator.load('jupyterlab');

    const title = new Widget({ node: document.createElement('h2') });
    title.node.textContent = trans.__('Variables');

    const layout = new PanelLayout();
    layout.addWidget(title);
    layout.addWidget(this.toolbar);
    this.layout = layout;
  }

  /**
   * The toolbar for the callstack header.
   */
  readonly toolbar = new Toolbar();
}
