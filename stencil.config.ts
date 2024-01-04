import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: [
      'groupui-input[type=text]',
      'groupui-input[type=password]',
      'groupui-input[type=date]',
      'groupui-input[type=datetime-local]',
      'groupui-input[type=email]',
      'groupui-input[type=month]',
      'groupui-input[type=tel]',
      'groupui-input[type=time]',
      'groupui-input[type=url]',
    ],
    event: 'input',
    targetAttr: 'value',
    type: 'text',
  },

  {
    elementSelectors: ['groupui-input[type=number]'],
    event: 'input',
    targetAttr: 'value',
    type: 'number',
  }
];

export const config: Config = {
  namespace: 'my-stencil-project',
  taskQueue: 'async',
  testing: {
    browserArgs: [
      '--font-render-hinting=none',
      '--disable-lcd-text',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--lang=de-DE',
    ],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
    browserHeadless: true,
  },
  buildEs5: 'prod',
  watchIgnoredRegex: /custom-elements\//,
  globalScript: './src/global/global.ts',
  extras: {
    __deprecated__cssVarsShim: true,
    __deprecated__dynamicImportShim: true,
    __deprecated__shadowDomShim: true,
    __deprecated__safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    angularOutputTarget({
      componentCorePackage: '@my-stencil-project',
      directivesProxyFile: './angular/src/directives/proxies.ts',
      directivesArrayFile: './angular/src/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'docs-readme',
      footer: '',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'components/**/themes/**/*.html' },
      ],
    },
    {
      type: 'dist',
      copy: [{ src: 'assets', warn: true }],
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/functions.scss',
        'src/global/themes/vwag/_variables.scss',
        'src/global/themes/vwag/_mixins.scss',
      ],
    }),
  ],
};
