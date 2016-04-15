## Modules

* [transform-props-with](#module_transform-props-with)
    * [~default([transformations])](#module_transform-props-with..default) ⇒ <code>[HigherOrderComponent](#HigherOrderComponent)</code>

## Functions

* [expandShorthands(tr)](#expandShorthands) ⇒ <code>[SimpleTransformation](#SimpleTransformation)</code>

## Typedefs

* [Props](#Props) : <code>object</code>
* [SimpleTransformation](#SimpleTransformation) ⇒ <code>[Props](#Props)</code>
* [HigherOrderComponent](#HigherOrderComponent) ⇒ <code>React.Component</code>
* [Transformation](#Transformation) : <code>[SimpleTransformation](#SimpleTransformation)</code> &#124; <code>object</code>

<a name="module_transform-props-with"></a>

## transform-props-with
<a name="module_transform-props-with..default"></a>

### transform-props-with~default([transformations]) ⇒ <code>[HigherOrderComponent](#HigherOrderComponent)</code>
Returns the sum of a and b

**Kind**: inner method of <code>[transform-props-with](#module_transform-props-with)</code>

| Param | Type | Default |
| --- | --- | --- |
| [transformations] | <code>[Transformation](#Transformation)</code> &#124; <code>[Array.&lt;Transformation&gt;](#Transformation)</code> | <code>[]</code> |

<a name="expandShorthands"></a>

## expandShorthands(tr) ⇒ <code>[SimpleTransformation](#SimpleTransformation)</code>
Returns the sum of a and b

**Kind**: global function

| Param | Type |
| --- | --- |
| tr | <code>[Transformation](#Transformation)</code> |

<a name="Props"></a>

## Props : <code>object</code>
A number, or a string containing a number.

**Kind**: global typedef
<a name="SimpleTransformation"></a>

## SimpleTransformation ⇒ <code>[Props](#Props)</code>
This callback is displayed as part of the Requester class.

**Kind**: global typedef

| Param | Type |
| --- | --- |
| oldProps | <code>[Props](#Props)</code> |

<a name="HigherOrderComponent"></a>

## HigherOrderComponent ⇒ <code>React.Component</code>
Higher-order React Component.

**Kind**: global typedef

| Param | Type |
| --- | --- |
| BaseComponent | <code>React.Component</code> |

<a name="Transformation"></a>

## Transformation : <code>[SimpleTransformation](#SimpleTransformation)</code> &#124; <code>object</code>
A number, or a string containing a number.

**Kind**: global typedef
