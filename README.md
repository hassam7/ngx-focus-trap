
#  This is work in progress

<h1 align="center">ngx-focus-trap</h1>



<p align="center">



Trap focus within a DOM node.



There may come a time when you find it important to trap focus within a DOM node — so that when a user hits `Tab` or `Shift+Tab` or clicks around, they can't escape a certain cycle of focusable elements.



You will definitely face this challenge when you are trying to build **accessible modals**.



This Angular module is built over [focus-trap](https://github.com/davidtheclark/focus-trap) to help you solve this challenge .</p>



##  Table of contents

1.  [Getting Started](#getting-started)

2.  [Installation instructions](#installation-instructions)

3.  [Usage & Demo](#usage--demo)

4.  [API](#api)

5.  [Troubleshooting](#troubleshooting)

6.  [Contributing](#contribution)



##  Getting Started



ngx-focus-trap contains a angular directive. You can apply this directive to your div to contain focus inside that div only


##  Installation instructions

#####  Method 1

Install `ngx-focus-trap` from `npm`:

```bash

npm install ngx-focus-trap --save

```



Add `NgxFocusTrapModule` to NgModule imports:

```

import { NgxFocusTrapModule } from 'ngx-focus-trap';



@NgModule({

...

imports: [NgxFocusTrapModule,...]

...

})

```
Add component to your page:

```

<div class="nested" ngxFocusTrap #ngxFocus="ngxFocusTrap">

	<input type="text">
	<input type="text">
	<input type="text">
	<button>Submit</button>

	<button (click)="ngxFocus.deactivateFocusTrap()">Disable Focus Trap</button>

</div>

```

#####  Method 2

# TODO: Add support for schematics
~~Use the Angular CLI ng add command for updating your Angular project~~

```bash

ng add ngx-focus-trap

```
Add directive to your div:

```
<div class="nested" ngxFocusTrap #ngxFocus="ngxFocusTrap">

	<input type="text">
	<input type="text">
	<input type="text">
	<button>Submit</button>

	<button (click)="ngxFocus.deactivateFocusTrap()">Disable Focus Trap</button>

</div>
```
## Browser Support

IE9+

Why? Because this module uses  [`EventTarget.addEventListener()`](https://github.com/davidtheclark/focus-trap/blob/master/document.createElement('button')). And its only dependency, tabbable, uses  [a couple of IE9+ functions](https://github.com/davidtheclark/tabbable#browser-support).


##  Usage & Demo
### TODO: Create a demo on stack blitz
##  API
### Inputs
-   **initActivated**  {boolean}: By default, when a `ngxFocusTrap` is attached to a element it is automatically activated. You can control this behaviour by passing `true` or `false` to `initAcivated`.
```
<div ngxFocusTrap [initActivated]="false" #focusTrap="ngxFocusTrap"... />
<button (click)="focusTrap.activateFocusTrap()">Enable Focus Trap</button>
```
-   **initialFocus**  {element|string}: By default, when a focus trap is activated the first element in the focus trap's tab order will receive focus. With this option you can specify a different element to receive that initial focus. Can be a DOM node, or a selector string (which will be passed to  `document.querySelector()`  to find the DOM node), or a function that returns a DOM node.
-   **fallbackFocus**  {element|string}: By default, an error will be thrown if the focus trap contains no elements in its tab order. With this option you can specify a fallback element to programmatically receive focus if no other tabbable elements are found. For example, you may want a popover's  `<div>`  to receive focus if the popover's content includes no tabbable elements.  _Make sure the fallback element has a negative  `tabindex`  so it can be programmatically focused._  The option value can be a DOM node, a selector string (which will be passed to  `document.querySelector()`to find the DOM node), or a function that returns a DOM node.
-   **escapeDeactivates**  {boolean}: Default:  `true`. If  `false`, the  `Escape`  key will not trigger deactivation of the focus trap. This can be useful if you want to force the user to make a decision instead of allowing an easy way out.
-   **clickOutsideDeactivates**  {boolean}: Default:  `false`. If  `true`, a click outside the focus trap will deactivate the focus trap and allow the click event to do its thing.
-   **returnFocusOnDeactivate**  {boolean}: Default:  `true`. If  `false`, when the trap is deactivated, focus will  _not_  return to the element that had focus before activation.

### Outputs
`activate`
Emits event when focus trap is activated.

`deactivate`
Emits event when focus trap is deactivated.
### Methods
`activateFocusTrap`
call this method to manually activate focus trap.
`deactivateFocusTrap`
call this method when you want to deactivate focus trap like when you are closing the modal window to which focus trap was applied.
`pause`
call this method to pause focus trap.
`unpause`
call this method to un pause focus trap.
###  How to build lib for development



First time:

-  clone repository

-  `npm install`

-  `npm run build`



To update your fork and prepare it for local usage:

-  `git pull upstream development`

-  `rm -rf node_modules`

-  `npm install`

-  `npm run build`



To run the demo:

-  `npm run demo.serve`  _*// to serve local demo. This is for testing only, without watchers.*_



For local development run:

-  `npm run build.watch`  _*// in first terminal*_

-  `ng serve`  _*// in second*_


