import { h } from 'preact';
import { createContext } from 'preact-context';

export const Theme = createContext({});
export const Provider = Theme.Provider;
export const Consumer = Theme.Consumer;

export default {
	Provider,
	Consumer
};
