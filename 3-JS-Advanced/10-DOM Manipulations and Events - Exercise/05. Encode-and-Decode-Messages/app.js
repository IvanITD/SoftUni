function encodeAndDecodeMessages() {
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    const sender = textareas[0];
    const receiver = textareas[1];

    buttons[0].addEventListener('click', onEncode);
    buttons[1].addEventListener('click', onDecode);

    function transform(text, offset) {
        let result = '';
        for (const char of text) {
            result += String.fromCharCode(char.charCodeAt(0) + offset);
        }
        return result;
    }

    function onEncode() {
        receiver.value = transform(sender.value, 1);
        sender.value = '';
    }

    function onDecode() {
        receiver.value = transform(receiver.value, -1);
    }
}