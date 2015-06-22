var IO = {}

IO.input = (function(jquery){
    // Public
    function registerKeyPressEvents() {
        jquery(document).keypress(function(evt) {
            evt = evt || window.event;
            var charCode = evt.which || evt.keyCode;

            if (charCode === CONSTANTS.ENTER_KEY) {
                parseCommand(getCurrentText().toLowerCase());
            } else {
                var charTyped = String.fromCharCode(charCode);
                IO.output.setCurrentText(getCurrentText().concat(charTyped))
            }
        });
    }

    // Private
    function getCurrentText() {
        return jquery(CONSTANTS.activeRow).text()
    }

    function parseCommand(command) {
        SYSTEM.commands.execute(command);
    }

    return {
        registerKeyPressEvents: registerKeyPressEvents
    }
})($)
