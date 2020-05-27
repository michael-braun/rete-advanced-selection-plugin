# @mbraun/rete-advanced-selection-plugin

## General

This plugin performs the following changes on the default selection behaviour of rete.js:

- Multiselect: Selection is not removed when dragging nodes without holding [CTRL]
- Clicking on the WorkingArea removes the selection
- Deselection-Operations that are performed by this library trigger the events **nodedeselect** (preventable) and **nodedeselected**

## Usage

This package (currently) requires no further configuration. Just import and include it:

```javascript
import AdvancedSelectionPlugin from '@mbraun/rete-advanced-selection-plugin';

editor.use(AdvancedSelectionPlugin);
```
