# Puropose

The purpose of this project was to play around with the create react app and get scss integrated for the styling using foundation.

# Steps to get here...

1. create project with create-react-app
1. [ install foundation for sites](https://foundation.zurb.com/sites/docs/installation.html) via package managers:
1. follow the [scss instructions](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc) on the create-react-app details (note: included the --include-path in the package)
2. renamed the App.css to App.scss (probably need to move the generated App.css out of here!)
3. Added the _settings.scss file and changed the import to ```@import 'foundation-sites/scss/util/util';```
