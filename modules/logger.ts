export default class Logger {
    static info(msg: string, message: string) {
        if(msg === undefined || message === undefined) throw new Error('Invalid params provided');
        return console.log('%c [Pebblo ' + msg + '] ' + '%c ' + message, 'background: #764E88; color: white; display: block;', 'background: #105577; color: white; display: block;');
    }

    static msg(msg: string, message: string) {
        if(msg === undefined || message === undefined) throw new Error('Invalid params provided');
        return console.log('%c Pebblo ' + msg + ' ' + '%c ' + message + ' ', 'background: #16161D; color: white; display: block;', 'background: #06EDE7; color: black; display: block;');
    }

    static error(msg: string, message: string) {
        if(msg === undefined || message === undefined) throw new Error('Invalid params provided');
        return console.log('%c [Pebblo ' + msg + '] ' + '%c ' + message, 'background: #A24343; color: white; display: block;', 'background: #105577; color: white; display: block;');
    }
}
