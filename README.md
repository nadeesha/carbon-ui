carbon-ui
=========

An experimental UI framework for WSO2 Carbon.

# Building a custom module

## Creating a new carbon-ui module

Carbon modules are just plain old angular modules, with some infrastructure support from `carbonUiApp`, which is the base module for carbon-ui-framework.

1. When you want to create a new module, you will have to create a script which initializes the module like this:

	```js
	angular.module('carbon.castamere', []);
	```
2. Register the module with carbon-ui

	```js
	carbon.registerModule('carbon.castamere');
	```

That's it! For a full example, refer to the [carbon.castamere](https://github.com/ncthis/carbon-castamere) project.

## Using the carbon-ui module in carbon-ui

You need to distribute your module with [bower](http://www.bower.io). You can register your custom module with bower and install it on the carbon-ui project with: `bower install`.

To inject the custom module dependencies to the carbon-ui project run `grunt wiredep`.
	
## Routing and Navigation Support

Carbon modules can define their own routes. This is supported by the `ui.router` module by the amazing [ui-router](https://github.com/angular-ui/ui-router) project, and `carbonUiApp.navigation` module.

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