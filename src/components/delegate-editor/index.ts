import { safelyDefine, injectStyles } from "../../utils";
import { Component, ConfigOptions, AttrsSchema, h } from "panel";

import { DelegateEditorAttrs, DelegateEditorState } from "./types";

const red = "#F45D79";
const blue = "#28A0CB";
const styles = `
  .delegate-editor {
    background-color: ${red};
  }
`;

export default class DelegateEditor extends Component<
  DelegateEditorState,
  {},
  unknown,
  DelegateEditorAttrs
> {
  static get attrsSchema(): AttrsSchema<DelegateEditorAttrs> {
    return {
      ...super.attrsSchema,
      data: { type: `json`, default: {} },
    };
  }

  get config(): ConfigOptions<DelegateEditorState, {}, DelegateEditorAttrs> {
    return {
      template: () => h("div", { class: { "delegate-editor": true } }, "Example"),
      defaultState: {},
      helpers: {},
    };
  }

  connectedCallback() {
    injectStyles("delegate-editor", styles);
    super.connectedCallback();
  }
}

safelyDefine(`delegate-editor`, DelegateEditor);
