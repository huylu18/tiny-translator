# TinyTranslator

``
A tiny little webapp to quick and dirty translate xliff files.
``

Did you start to experiment with the new `Angular 2` (or even 4) version?

And did you start to experiment with the new `i18n` features of Angular 2?

Then maybe this application is a tool for you.

For the impatient: Start it here [Tiny Translator (English)](https://martinroob.github.io/tiny-translator/en) or [Tiny Translator (Deutsch)](https://martinroob.github.io/tiny-translator/de)

This application can be used to work on the translation of XLIFF 1.2 files.
[[XLIFF 1.2]]((http://docs.oasis-open.org/xliff/xliff-core/xliff-core.html)) is an OASIS standard and stands for <strong>XML Localization Interchange File Format</strong>.
So, as the name expresses, it is designed as a format to exchange localization informations between different applications.
The standard is quite old, the specification of version 1.2 is from 2007.
And if you start to google for free tools, that support the format, you won´t find too many of them and they are all very old and seam to be a little bit out of date.

The Angular team decided, when they started to work on i18n support for Angular 2, to use this format as the default for Angular.
The Angular i18n Cookbook [Internationalization (i18n)](https://angular.io/docs/ts/latest/cookbook/i18n.html) describes in detail, how to markup your templates and how to extract the i18n information using `ng-xi18n` (or Angular CLIs `ng xi18`).

You end up with a bunch of `.xlf` files that you shall send to a translator "<i>who fills in the translations using one of the many XLIFF file editors</i>". (citation from the cookbook).

<strong>TinyTranslator</strong> is just another one of these many editors.
It is a Web Application written with Angular (v4.0).
In short, you can open a `.xlf` file with it, it shows you all untranslated messages and lets you type in the translations.
When finished, you can reexport the file and use it in your application to generate a translated version of your app.

It is not intended as a tool for professional translators, that earn their money with doing translations.

The intendend user is a developer, who just has to quickly translate his application.

# Usage
## Preinstalled version on Github Pages
There is a preinstalled version on githubpages.
Just start it by clicking on 
- [Tiny Translator (English)](https://martinroob.github.io/tiny-translator/en)
- or [Tiny Translator (Deutsch)](https://martinroob.github.io/tiny-translator/de)

## Local version
Alternatively you can start a local version

- install `npm` and (if you like) `yarn`
- install [Angular CLI](https://github.com/angular/angular-cli) globally
    - `npm i -g @angular/cli@latest`
- git clone this repository
- fill up node_modules
    - `npm install`
    - or `yarn`
- Start Application
    - `ng start-en`
    - or `ng start-de` for German version
- Open it in a browser:
    - Navigate to [http://localhost:4200/](http://localhost:4200/)
    
# Developer Hints
##Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

