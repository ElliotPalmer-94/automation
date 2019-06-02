
//Since drag and drop does not work in HTML 5 a workaround was found here:
//https://gist.github.com/druska/624501b7209a74040175#file-native_js_drag_and_drop_helper-js

module.exports = function simulateDragDrop(sourceNode, destinationNode) {
    var EVENT_TYPES = {
        DRAG_END: 'dragend',
        DRAG_START: 'dragstart',
        DROP: 'drop'
    }

    function createCustomEvent(type) {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(type, true, true, null)
        event.dataTransfer = {
            data: {
            },
            setData: function (type, val) {
                this.data[type] = val
            },
            getData: function (type) {
                return this.data[type]
            }
        }
        return event
    }

    function dispatchEvent(node, type, event) {
        if (node.dispatchEvent) {
            return node.dispatchEvent(event)
        }
        if (node.fireEvent) {
            return node.fireEvent("on" + type, event)
        }
    }

    var event = createCustomEvent(EVENT_TYPES.DRAG_START)
    dispatchEvent(sourceNode, EVENT_TYPES.DRAG_START, event)

    var dropEvent = createCustomEvent(EVENT_TYPES.DROP)
    dropEvent.dataTransfer = event.dataTransfer
    dispatchEvent(destinationNode, EVENT_TYPES.DROP, dropEvent)

    var dragEndEvent = createCustomEvent(EVENT_TYPES.DRAG_END)
    dragEndEvent.dataTransfer = event.dataTransfer
    dispatchEvent(sourceNode, EVENT_TYPES.DRAG_END, dragEndEvent)
}










