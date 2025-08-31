import { createDirectus, rest } from '@directus/sdk';

function getDirectusInstance(fetch) {
    const options = fetch ? { globals: { fetch }} : {};
    const directus = createDirectus('http://backend.ostermanndev.space', options).with(rest());
    return directus;
}

export default getDirectusInstance;