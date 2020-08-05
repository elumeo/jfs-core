import { TranslationList } from './Types';

namespace Language {
  export type Props = {
    languageName: string;
    translationList: TranslationList;
  }
}

class Language {
    private readonly translationList: TranslationList;
    private readonly languageName: string;
    constructor(props: Language.Props) {
        this.translationList = props.translationList;
        this.languageName = props.languageName;
    }
    public translationKeys = () => Object.keys(this.translationList);

    public missingKeys = (keyList: string[]) => {
        const existingKeys: string[] = this.translationKeys();
        return keyList.filter(
            keyListEntry => !existingKeys.includes(keyListEntry)
        );
    };

    public name = () => this.languageName;

    public lookup = (key: string) => {
        return this.translationList[key] || '';
    }
}

export default Language;
