IO.output = (function(jquery){
    // Public
    function print() {
        for(i = 0; i <= arguments.length; i++) {
            printLine(arguments[i])
        }
    }

    function printTextInLines(text) {
        var length = text.length
        var line = repeat("-", length + 0.5 * length)
        print(line)
        print(text)
        print(line)
    }

    function setCurrentText(newText) {
        jquery(CONSTANTS.activeRow).text(newText)
    }

    function clearScreen() {
        jquery(".consoleRow").remove();
        jquery(".consoleWrapper")[0].appendChild($("<div class='consoleRow activeRow'></div>")[0]);
    }

    function welcomeUser() {
        printTextInLines("Welcome to www.ingelheim.io")
        SYSTEM.commands.execute("help");
    }

    // Private
    function printLine(text) {
        goToNewRow(jquery(CONSTANTS.activeRow))
        var activeRow = jquery(CONSTANTS.activeRow)
        activeRow.text(text)
        goToNewRow(activeRow)
    }

    function repeat(pattern, count) {
        if (count < 1) return '';
        var result = '';
        while (count > 1) {
            if (count & 1) result += pattern;
            count >>= 1, pattern += pattern;
        }
        return result + pattern;
    }

    function goToNewRow(element) {
        element.removeClass('activeRow');
        $("<div class='consoleRow activeRow'></div>").insertAfter(element);
    }

    return {
        welcomeUser: welcomeUser,
        printTextInLines: printTextInLines,
        print: print,
        setCurrentText: setCurrentText,
        clearScreen: clearScreen
    }
})($)
