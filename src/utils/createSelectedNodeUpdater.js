export default function createSelectedNodeUpdater(editor) {
    const tempSelected = [];
    editor.selected.each((node) => {
        tempSelected.push(node);
    });

    return () => {
        tempSelected.forEach((node) => {
            node.update();
        });
    };
}

