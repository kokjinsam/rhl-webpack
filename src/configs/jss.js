import jss from 'jss';
import camelCase from 'jss-camel-case';
import nested from 'jss-nested';
import vendorPrefixer from 'jss-vendor-prefixer';
import normalize from './normalize';
import base from './base';

function configureJSS() {
  jss.use(nested());
  jss.use(camelCase());
  jss.use(vendorPrefixer());

  const NormalizeCSS = jss.createStyleSheet(normalize, { named: false });
  const BaseCSS = jss.createStyleSheet(base, { named: false });

  NormalizeCSS.attach();
  BaseCSS.attach();
}

export default configureJSS;
