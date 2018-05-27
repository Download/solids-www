import { render } from 'prettyjson';
import ulog from 'ulog';
import path from 'path';


const log = ulog('solids:config:preact');

export default (config, env, helpers) => {
	//	config.resolve.alias['solids/AppBar'] = path.resolve(__dirname, 'node_modules', 'solids', 'AppBar');
	let loader = helpers.getLoadersByName(config, 'css-loader')
		.filter(loader => loader.rule && loader.rule.exclude)[0];

	//	loader.rule.exclude.push(path.resolve(__dirname, 'node_modules', 'solids'));
	loader.rule.exclude.push(path.resolve(__dirname, 'AppBar'));
	loader.rule.exclude.push(path.resolve(__dirname, 'Drawer'));

	loader = helpers.getLoadersByName(config, 'css-loader')
		.filter(loader => loader.rule && loader.rule.include)[0];

	//	loader.rule.include.push(path.resolve(__dirname, 'node_modules', 'solids'));
	loader.rule.include.push(path.resolve(__dirname, 'AppBar'));
	loader.rule.include.push(path.resolve(__dirname, 'Drawer'));
	
	//	log.info(render(loader));
	//	log.info('====================');
	loader = loader.rule.loader.filter(loader => loader.loader === 'css-loader')[0];
	loader.options.localIdentName = '[local]_[hash:base64:3]';

	log.info(render(config));
};
