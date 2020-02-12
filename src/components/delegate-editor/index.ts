import { readFileSync } from "fs";
import { Component, ConfigOptions, AttrsSchema, h } from "panel";
import { safelyDefine, injectStyles } from "../../utils";

import { DelegateEditorAttrs, DelegateEditorState } from "./types";

const styles = readFileSync(__dirname + "/styles.css", "utf8");

export default class DelegateEditor extends Component<
  DelegateEditorState,
  {},
  unknown,
  DelegateEditorAttrs
> {
  static get attrsSchema(): AttrsSchema<DelegateEditorAttrs> {
    return {
      ...super.attrsSchema,
      data: { type: `json`, default: {} }
    };
  }

  get config(): ConfigOptions<DelegateEditorState, {}, DelegateEditorAttrs> {
    return {
      template: ({ $attr }) =>
        h(
          "div",
          { class: { "delegate-editor": true } },
          Object.entries($attr("data")).map(([candidateKey, data]) =>
            h(
              "div",
              { key: candidateKey, class: { "text-blue": true } },
              candidateKey
            )
          )
        ),
      defaultState: {},
      helpers: {}
    };
  }

  connectedCallback() {
    injectStyles("delegate-editor", styles);
    super.connectedCallback();
  }
}

safelyDefine(`delegate-editor`, DelegateEditor);
