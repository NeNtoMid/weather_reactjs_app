import messages_en from './translations/en.json';

import messages_pl from './translations/pl.json';

export const messages = {
	pl: messages_pl,
	en: messages_en,
};
export const language = navigator.language.split(/[-_]/)[0];
console.log('language:', language);
