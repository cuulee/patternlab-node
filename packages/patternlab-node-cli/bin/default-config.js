/**
 * patternLabConf
 * @desc PatternLab config boilerplate
 * @type {config}
 * @property {object} paths
 * @property {Array} styleGuideExcludes
 * @property {string} defaultPattern
 * @property {boolean} cleanPublic
 * @property {string} patternExtension
 * @property {Array} ignored-extensions
 * @property {Array} ignored-directories
 * @property {boolean} debug
 * @property {object} ishControlsHide
 * @property {string} ishMinimum
 * @property {string} ishMaximum
 * @property {Array} patternStateCascade
 * @property {Array} patternExportPatternPartials
 * @property {string} patternExportDirectory
 * @property {string} baseurl
 * @property {boolean} cacheBust
 * @property {string} starterkitSubDir
 * @property {object} outputFileSuffixes
 */
const patternLabConf = {
  paths: {
    source: {
      root: './source/',
      patterns: './source/_patterns/',
      data: './source/_data/',
      meta: './source/_meta/',
      annotations: './source/_annotations/',
      styleguide: 'node_modules/styleguidekit-assets-default/dist/',
      patternlabFiles: 'node_modules/styleguidekit-mustache-default/views/',
      js: './source/js',
      images: './source/images',
      fonts: './source/fonts',
      css: './source/css/'
    },
    public: {
      root: './public/',
      patterns: './public/patterns/',
      data: './public/styleguide/data/',
      annotations: './public/annotations/',
      styleguide: './public/styleguide/',
      js: './public/js',
      images: './public/images',
      fonts: './public/fonts',
      css: './public/css'
    }
  },
  styleGuideExcludes: ['templates', 'pages'],
  defaultPattern: 'all',
  cleanPublic: false,
  patternExtension: 'mustache',
  'ignored-extensions': ['scss', 'DS_Store', 'less'],
  'ignored-directories': ['scss'],
  debug: false,
  ishControlsHide: {
    s: false,
    m: false,
    l: false,
    full: false,
    random: false,
    disco: false,
    hay: true,
    mqs: false,
    find: false,
    'views-all': false,
    'views-annotations': false,
    'views-code': false,
    'views-new': false,
    'tools-all': false,
    'tools-docs': false
  },
  ishMinimum: '240',
  ishMaximum: '2600',
  patternStateCascade: ['inprogress', 'inreview', 'complete'],
  patternExportPatternPartials: [],
  patternExportDirectory: './pattern_exports/',
  baseurl: '',
  cacheBust: true,
  starterkitSubDir: 'dist',
  outputFileSuffixes: {
    rendered: '',
    rawTemplate: '',
    markupOnly: '.markup-only'
  }
};
module.exports = patternLabConf;
