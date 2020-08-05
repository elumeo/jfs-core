class Notfier {

    public static framedMessage = (message: string) => Notfier.multiLineMessage(
        '',
        '-------------------------------------------------------------------------------------------------------------',
        '',
        message,
        '',
        '-------------------------------------------------------------------------------------------------------------',
        ''
    );

    public static multiLineMessage = (...messageLines: string[]) => [
        ...messageLines
    ].join(`\n`)

}

export default Notfier;
