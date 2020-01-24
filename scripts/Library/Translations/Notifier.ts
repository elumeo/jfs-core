import color from "ansi-colors";
import { IMissingLanguageKeys } from "./Types";

class Notifier {

    public static tellAboutMissingTranslations = (missingLanguageKeys: IMissingLanguageKeys[]) => {
        const output: string = [
            color.red('❌ There are missing translations'),
            '',
            ...missingLanguageKeys.map(
                ({ languageName, missingKeys }) => color.yellow(
                    `   '${languageName}': ${missingKeys.length}`
                )
            ),
            ''
        ].join('\n');

        console.log(output);
    };

    public static tellAboutCompleteTranslations = () => {
        console.log(
            color.green('️✔️  There are no missing translations')
        )
    }

}

export default Notifier;