import appTranslations from '../../../../src/Translations.json';

const defaultTranslations = {
  "de": {
    "app.login": "Anmelden",
    "app.logout": "Abmelden",
    "app.logout.message": "Möchtest du dich abmelden?",
    "app.logout.title": "Abmeldung",
    "app.logout.action": "Abmelden",
    "app.cancel.action": "Abbrechen",
    "app.settings": "Einstellungen",
    "app.version": "Version {versionNumber}",
    "app.error": "Fehler",
    "app.system": "System",

    "login.failed": "Login fehlgeschlagen",
    "login.noUserRights": "Keine Benutzerrechte vorhanden",
    "login.button": "Anmelden",
    "login.error": "Benutzername oder Passwort falsch",
    "login.password": "Passwort",
    "login.password.errorText": "Passwort erforderlich",
    "login.title": "Willkommen",
    "login.username": "Benutzername",
    "login.username.errorText": "Benutzername erforderlich",
    "please.login": "Bitte anmelden",
    "settings.language": "Sprache",
    "settings.title": "Einstellungen",
    "app.closeBtnLabelModalDialog": "Close"
  },
  "en": {
    "app.login": "Login",
    "app.logout": "Logout",
    "app.logout.message": "Do you wish to logout?",
    "app.logout.title": "Logout",
    "app.logout.action": "Logout",
    "app.cancel.action": "Cancel",
    "app.settings": "Settings",
    "app.version": "Version {versionNumber}",
    "app.error": "Error",
    "app.system": "System",

    "login.failed": "Login failed",
    "login.noUserRights": "No user rights",
    "login.button": "Login",
    "login.error": "User or password wrong",
    "login.password": "Password",
    "login.password.errorText": "Password is required",
    "login.title": "Welcome",
    "login.username": "Username",
    "login.username.errorText": "Username is required",
    "please.login": "Please login",
    "settings.language": "Language",
    "settings.title": "Settings",
    "app.closeBtnLabelModalDialog": "Close"
  },
  "it": {
    "app.login": "Login",
    "app.logout": "Logout",
    "app.logout.message": "Vuoi davvero uscire?",
    "app.logout.title": "Logout",
    "app.logout.action": "Uscire",
    "app.cancel.action": "Interrompere",
    "app.settings": "Impostazioni",
    "app.version": "Versione {versionNumber}",
    "app.error": "Errore",
    "app.system": "Sistema",

    "login.failed": "Login errato",
    "login.noUserRights": "Privilegi insufficienti",
    "login.button": "Login",
    "login.error": "Nome utente o Password sbagliati",
    "login.password": "Password",
    "login.password.errorText": "Necessaria password",
    "login.title": "Benvenuti",
    "login.username": "Nome utente",
    "login.username.errorText": "Necessario nome utente",
    "please.login": "Login",
    "settings.language": "Lingua",
    "settings.title": "Impostazioni",
    "app.closeBtnLabelModalDialog": "Close"
  }
}

const translations = defaultTranslations;
for (const language in translations) {
  const defaultLanguage = translations[language];
  const appLanguage = appTranslations[language];
  if (appLanguage) translations[language] = Object.assign(defaultLanguage, appLanguage);
}

export default translations;
