import * as React from 'react';
import { injectIntl } from 'react-intl';
import SearchComponent from '@elumeo/jfs-core/build/Component/Search/SearchComponent';
import autocompleteData from '../../../Mock/Names.json';
class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { searchProgress: false };
    }
    render() {
        const { id, style, className, labelTranslationId, placeholderTranslationId } = this.props;
        /*
         * You may want to load autocomplete data dynamically.
         * The indicateSearchProgress property may be set to true until the result is available.
         */
        return (React.createElement(SearchComponent, { id: id, className: className, style: style, labelTranslationId: labelTranslationId, placeholderTranslationId: placeholderTranslationId, indicateSearchProgress: this.state.searchProgress, autocompleteData: autocompleteData, onSearch: (props, state) => {
                this.setState({ searchProgress: true });
                window.setTimeout(() => {
                    this.setState({ searchProgress: false });
                    props.addToastAction({
                        contentMessage: `Search for "${state.value}" is not yet implemented`,
                        isError: true
                    });
                }, 1000);
            } }));
    }
}
Search.defaultProps = {
    intl: null,
    id: 'SearchExample',
    placeholderTranslationId: 'app.search',
};
export default injectIntl(Search);
//# sourceMappingURL=Search.js.map