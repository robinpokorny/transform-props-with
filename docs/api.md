## Modules

* [transform-props-with](#module_transform-props-with)
    * [~default([transformations])](#module_transform-props-with..default) ⇒ <code>[HigherOrderComponent](#HigherOrderComponent)</code>

## Typedefs

* [Props](#Props) : <code>object</code>
* [SimpleTransformation](#SimpleTransformation) ⇒ <code>[Props](#Props)</code>
* [HigherOrderComponent](#HigherOrderComponent) ⇒ <code>React.Component</code>
* [Transformation](#Transformation) : <code>[SimpleTransformation](#SimpleTransformation)</code> &#124; <code>object</code>

<a name="module_transform-props-with"></a>

## transform-props-with
<a name="module_transform-props-with..default"></a>

### transform-props-with~default([transformations]) ⇒ <code>[HigherOrderComponent](#HigherOrderComponent)</code>
Higher-order component generator.
Will change props with passed transformaton(s).
Array of transformatons is evaluated left to right.

**Kind**: inner method of <code>[transform-props-with](#module_transform-props-with)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [transformations] | <code>[Transformation](#Transformation)</code> &#124; <code>[Array.&lt;Transformation&gt;](#Transformation)</code> | <code>[]</code> | 

<a name="Props"></a>

## Props : <code>object</code>
A plain object. Should not be mutated.

**Kind**: global typedef  
<a name="SimpleTransformation"></a>

## SimpleTransformation ⇒ <code>[Props](#Props)</code>
Middleware function for changing props.
A function which takes Props as input and returns new Props.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| oldProps | <code>[Props](#Props)</code> | 

<a name="HigherOrderComponent"></a>

## HigherOrderComponent ⇒ <code>React.Component</code>
Higher-order React Component.
A function that enhances passed component.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| BaseComponent | <code>React.Component</code> | 

<a name="Transformation"></a>

## Transformation : <code>[SimpleTransformation](#SimpleTransformation)</code> &#124; <code>object</code>
When a plane object is passed it will be used to
extend props (with override).

**Kind**: global typedef  
