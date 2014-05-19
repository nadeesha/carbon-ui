carbon-ui
=========

An experimental UI framework for WSO2 Carbon.

# Building a custom module

## Initializing

Carbon modules are just plain old angular modules, with some infrastructure support from `carbonUiApp`, which is the base module for carbon-ui-framework.

1. When you want to create a new module, you will have to create a script which initializes the module like this:

	```js
	angular.module('carbonCastamere', []);
	```
2. Include the custom module in you `index.html` file for `carbonUiApp`.
3. And inject the dependency to the `carbonUiApp`

	```js
	angular.module('carbonUiApp', ['carbonCastamere']);
	```
	
## Routing

Carbon modules can define their own routes. This is supported by the `ui.router` module by the [ui-router](https://github.com/angular-ui/ui-router) project, and `carbonUiApp.navigation` module.

Defining a route is achieved by using the `$stateProvider` provider inside the `config` handler for your custom module. Like this:

```js
angular.module('carbonCastamere', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider.state('castamereHome', {
        	url: '/castamere',
            templateUrl: 'carbon_components/castamere/main.html',
            controller: 'CastemereCtrl',
            navigationBar: {
            	name: 'Catamere',
            	glyphicon: 'asterisk',
            	weight: 0
            }
        });
    });
```

* `url`: The url that defines the route
* `templateUrl`: HTML file which contains the view
* `controller`: (optional) Angular controller defined by your custom app which takes care of the route.
* `navigationBar`: Navigation bar specific properties.
	* `name`: The title of the link to appear in the navigation bar
	* `glyphicon`: (optional) A glyhicon icon name (supported by boostrap 3) to appear alongside the title.
	* `weight`: (optional) Higher the wight, higher on the navigation bar will this link appear. `home` state, which defines the default route has a weight of `1000`. Defining this as `1001` will cause the link to appear above the `home` route.