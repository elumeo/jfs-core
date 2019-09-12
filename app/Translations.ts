// @ts-ignore
import appTranslations from '../../../../src/Translations.json';

const defaultTranslations = {
  "de": {
    "app.backend": "Backend",
    "app.cancel.action": "Abbrechen",
    "app.closeBtnLabelModalDialog": "Schließen",
    "app.enterSearchValue": "Suchbegriff eingeben!",
    "app.error": "Fehler",
    "app.login": "Anmelden",
    "app.logout": "Abmelden",
    "app.logout.action": "Abmelden",
    "app.logout.message": "Möchtest du dich abmelden?",
    "app.logout.title": "Abmeldung",
    "app.search": "Suchen",
    "app.settings": "Einstellungen",
    "app.settings.done": "Fertig",
    "app.system": "System",
    "app.version": "Version {versionNumber}",

    "login.button": "Anmelden",
    "login.error": "Benutzername oder Passwort falsch",
    "login.failed": "Login fehlgeschlagen",
    "login.noUserRights": "Keine Benutzerrechte vorhanden",
    "login.password": "Passwort",
    "login.password.errorText": "Passwort erforderlich",
    "login.title": "Willkommen",
    "login.username": "Benutzername",
    "login.username.errorText": "Benutzername erforderlich",
    "please.login": "Bitte anmelden",
    "settings.language": "Sprache",
    "settings.title": "Einstellungen",
  },
  "en": {
    "app.backend": "Backend",
    "app.cancel.action": "Cancel",
    "app.closeBtnLabelModalDialog": "Close",
    "app.enterSearchValue": "Enter search term!",
    "app.error": "Error",
    "app.login": "Login",
    "app.logout": "Logout",
    "app.logout.action": "Logout",
    "app.logout.message": "Do you wish to logout?",
    "app.logout.title": "Logout",
    "app.search": "Search",
    "app.settings": "Settings",
    "app.settings.done": "Done",
    "app.system": "System",
    "app.version": "Version {versionNumber}",

    "login.button": "Login",
    "login.error": "User or password wrong",
    "login.failed": "Login failed",
    "login.noUserRights": "No user rights",
    "login.password": "Password",
    "login.password.errorText": "Password is required",
    "login.title": "Welcome",
    "login.username": "Username",
    "login.username.errorText": "Username is required",
    "please.login": "Please login",
    "settings.language": "Language",
    "settings.title": "Settings",
  },
  "it": {
    "app.backend": "Backend",
    "app.cancel.action": "Interrompere",
    "app.closeBtnLabelModalDialog": "Chiuso",
    "app.enterSearchValue": "Inserisci il termine di ricerca!",
    "app.error": "Errore",
    "app.login": "Login",
    "app.logout": "Logout",
    "app.logout.action": "Uscire",
    "app.logout.message": "Vuoi davvero uscire?",
    "app.logout.title": "Logout",
    "app.search": "Ricerca",
    "app.settings": "Impostazioni",
    "app.settings.done": "Finito",
    "app.system": "Sistema",
    "app.version": "Versione {versionNumber}",

    "login.button": "Login",
    "login.error": "Nome utente o Password sbagliati",
    "login.failed": "Login errato",
    "login.noUserRights": "Privilegi insufficienti",
    "login.password": "Password",
    "login.password.errorText": "Necessaria password",
    "login.title": "Benvenuti",
    "login.username": "Nome utente",
    "login.username.errorText": "Necessario nome utente",
    "please.login": "Login",
    "settings.language": "Lingua",
    "settings.title": "Impostazioni",
  }
};

const translations = defaultTranslations;
for (const language in translations) {
  const defaultLanguage = translations[language];
  const appLanguage = appTranslations[language];
  if (appLanguage) translations[language] = Object.assign(defaultLanguage, appLanguage);
}

export default translations;
