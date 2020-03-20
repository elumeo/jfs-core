import JFS from 'Library/JFS';
import App from 'Library/JFS/App';

JFS.discover(() => {
  App.Translations.check();
});
