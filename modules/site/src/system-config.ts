/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {};

/** User packages configuration. */
const packages: any = {};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core', '@angular/common', '@angular/forms', '@angular/compiler', '@angular/http', '@angular/router',
  '@angular/platform-browser', '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs', 'ng2-material',


  // App specific barrels.
  'app'
  /** @cli-barrel */

];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => { cliSystemConfigPackages[barrelName] = { main: 'index' }; });

// Material2 specific barrels.
['core', 'checkbox', 'progress-circle', 'progress-bar', 'radio', 'toolbar', 'sidenav', 'icon',
  'input', 'tabs'

].forEach((pkgName: string) => {
  cliSystemConfigPackages['@angular2-material/' + pkgName] = {
    main: pkgName + '.js',
    defaultExtension: 'js',
    format: 'cjs'
  };
});

const cliSystemConfigPackagesWithAngular: any = {
      '@angular/common': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/compiler': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/core': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/forms': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/http': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/platform-browser': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/platform-browser-dynamic': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular/router': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      '@angular2-material/card': {
        main: 'card.js',
        defaultExtension: 'js'
      },
      '@angular2-material/button': {
        main: 'button.js',
        defaultExtension: 'js'
      },
      '@angular2-material/checkbox': {
        main: 'checkbox.js',
        defaultExtension: 'js'
      },
      '@angular2-material/grid-list': {
        main: 'grid-list.js',
        defaultExtension: 'js'
      },
      '@angular2-material/icon': {
        main: 'icon.js',
        defaultExtension: 'js'
      },
      '@angular2-material/input': {
        main: 'input.js',
        defaultExtension: 'js'
      },
      '@angular2-material/list': {
        main: 'list.js',
        defaultExtension: 'js'
      },
      '@angular2-material/menu': {
        main: 'menu.js',
        defaultExtension: 'js'
      },
      '@angular2-material/progress-bar': {
        main: 'progress-bar.js',
        defaultExtension: 'js'
      },
      '@angular2-material/progress-circle': {
        main: 'progress-circle.js',
        defaultExtension: 'js'
      },
      '@angular2-material/radio': {
        main: 'radio.js',
        defaultExtension: 'js'
      },
      '@angular2-material/sidenav': {
        main: 'sidenav.js',
        defaultExtension: 'js'
      },
      '@angular2-material/slider': {
        main: 'slider.js',
        defaultExtension: 'js'
      },
      '@angular2-material/slide-toggle': {
        main: 'slide-toggle.js',
        defaultExtension: 'js'
      },
      '@angular2-material/button-toggle': {
        main: 'button-toggle.js',
        defaultExtension: 'js'
      },
      '@angular2-material/tabs': {
        main: 'tabs.js',
        defaultExtension: 'js'
      },
      '@angular2-material/toolbar': {
        main: 'toolbar.js',
        defaultExtension: 'js'
      },
      '@angular2-material/tooltip': {
        main: 'tooltip.js',
        defaultExtension: 'js'
      }
}

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    '@angular2-material': 'vendor/@angular2-material',
    'ng2-material': 'vendor/ng2-material',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
