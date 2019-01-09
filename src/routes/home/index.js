import { h } from 'preact';
import { Provider } from '../../components/Theme';
import HomeLayout from '../../components/HomeLayout';
import style from '../../components/HomeLayout/style';
import 'preact-material-components/List/style.css';

export const Home = () => (
	<Provider value={{ classes: style }}>
		<HomeLayout title="Solids" mainClass={style.home}>
			<h1>Solids</h1>
			<p><b>css-only material design primitives</b></p>
			<p>CSS-only implementation of Google's <a href="https://material.io/guidelines/">Material Design</a> guidelines, 
			heavily inspired by <a href="http://mildrenben.github.io/surface/">Surface</a>.</p>
			<div class={style.picture_frame} />
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum libero malesuada eros rutrum luctus. Pellentesque faucibus urna et risus gravida malesuada. Vestibulum porta ultrices congue. Pellentesque at dolor purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque lectus laoreet, sagittis quam ut, dignissim neque. Nam pulvinar, tortor vel pellentesque varius, elit turpis tristique enim, et finibus orci arcu in purus. Fusce sit amet purus consectetur, ultricies nulla vitae, faucibus ex. Ut at feugiat erat. Nullam vitae tincidunt risus, vel pharetra arcu. Proin cursus interdum mauris, in fermentum enim.</p>
			<p>Integer non lorem ligula. Ut ultricies tellus ac tempor molestie. Vivamus non pulvinar odio, quis tincidunt dolor. Duis facilisis vehicula nulla, hendrerit pharetra nisl luctus ut. Mauris tempus mi sit amet condimentum dapibus. Ut vel venenatis ante. Etiam blandit, mi imperdiet fringilla finibus, enim massa condimentum ligula, ac pellentesque nisl ligula sit amet nunc. Vestibulum gravida ullamcorper tellus id hendrerit. Suspendisse condimentum condimentum est eget pellentesque. Vivamus quis scelerisque dui, efficitur pellentesque justo. Donec aliquam tristique dapibus. Sed sagittis est non urna semper pellentesque.</p>
			<p>Nulla blandit efficitur nunc, id laoreet enim consequat et. Curabitur suscipit diam ante, at iaculis orci placerat eget. Maecenas eu elementum ligula. Integer lacinia tincidunt sapien sit amet fringilla. Nulla placerat tortor vel purus porta, ut dictum metus laoreet. Curabitur non erat quis nunc iaculis interdum sit amet ut ex. Nunc consectetur fringilla sem, ut posuere diam laoreet quis. Etiam vulputate vehicula viverra. Praesent ut scelerisque velit, sit amet suscipit turpis. Cras at malesuada sem. Ut non tellus nec ligula condimentum facilisis eu non metus. Curabitur nec diam feugiat, cursus velit ac, rutrum diam. Donec consequat felis sed magna facilisis, ut accumsan erat dignissim. Etiam gravida vestibulum pellentesque.</p>
			<p>Phasellus eleifend orci pharetra, ullamcorper diam non, tristique tortor. Integer id magna ex. Nulla imperdiet lectus quis nibh pharetra blandit. Nunc tortor purus, iaculis vel purus ac, elementum sollicitudin leo. Morbi scelerisque leo ex, id ultricies elit varius vitae. Ut velit ante, lobortis nec iaculis et, finibus eget urna. Nulla ante nisl, egestas at tellus ut, ultrices bibendum elit. Nunc id lorem sapien. Nullam dictum dui eget eros tristique mollis. Pellentesque dignissim molestie justo ac porttitor. Sed luctus, est id fringilla euismod, felis lectus sollicitudin justo, sed tristique massa risus in justo. Mauris id tincidunt nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam elementum tortor non nunc convallis ornare. Duis turpis sapien, ultricies porttitor luctus sed, pharetra at est.</p>
			<p>Proin hendrerit, augue non pharetra tempus, tellus elit eleifend velit, ac molestie quam magna sit amet sem. Nam a sollicitudin lectus. Mauris fermentum, sem et dapibus pharetra, ligula ex pulvinar purus, in consequat orci magna sit amet lectus. Suspendisse et purus cursus, aliquet mi vel, dapibus nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec egestas risus non diam iaculis, sed convallis risus commodo. Maecenas sed ornare felis. Nulla vitae eleifend nulla. Nunc dapibus ipsum sed nunc mollis, suscipit feugiat ipsum volutpat. Nunc sit amet augue ornare, tincidunt tellus vitae, pellentesque libero. Nam elementum sapien eget ipsum ullamcorper, convallis vulputate eros mattis. Proin tincidunt leo urna, semper dapibus neque molestie vitae. Morbi a fringilla lectus. Maecenas luctus nisi eros, at imperdiet quam scelerisque quis. Nunc odio massa, suscipit at varius eu, hendrerit non lorem.</p>
		</HomeLayout>
	</Provider>
);

export default Home;
