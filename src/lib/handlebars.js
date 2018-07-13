// Dependencies
import { minify } from 'html-minifier';

export function compress(content) {
  return minify(content.fn(this), {
  	//Obtener HTML
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true
  });
}