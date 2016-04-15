<a name="module_transform-props-with"></a>

## transform-props-with

* [transform-props-with](#module_transform-props-with)
    * [module.exports([transformations])](#exp_module_transform-props-with--module.exports) ⇒ <code>HigherOrderComponent</code> ⏏
        * [~expandShorthands(tr)](#module_transform-props-with--module.exports..expandShorthands) ⇒ <code>SimpleTransformation</code>
        * [~Props](#module_transform-props-with--module.exports..Props) : <code>object</code>
        * [~SimpleTransformation](#module_transform-props-with--module.exports..SimpleTransformation) ⇒ <code>Props</code>
        * [~HigherOrderComponent](#module_transform-props-with--module.exports..HigherOrderComponent) ⇒ <code>React.Component</code>
        * [~Transformation](#module_transform-props-with--module.exports..Transformation) : <code>SimpleTransformation</code> &#124; <code>object</code>

<a name="exp_module_transform-props-with--module.exports"></a>

### module.exports([transformations]) ⇒ <code>HigherOrderComponent</code> ⏏
Returns the sum of a and b

**Kind**: Exported function

| Param | Type | Default |
| --- | --- | --- |
| [transformations] | <code>Transformation</code> &#124; <code>Array.&lt;Transformation&gt;</code> | <code>[]</code> |

<a name="module_transform-props-with--module.exports..expandShorthands"></a>

#### module.exports~expandShorthands(tr) ⇒ <code>SimpleTransformation</code>
Returns the sum of a and b

**Kind**: inner method of <code>[module.exports](#exp_module_transform-props-with--module.exports)</code>

| Param | Type |
| --- | --- |
| tr | <code>Transformation</code> |

<a name="module_transform-props-with--module.exports..Props"></a>

#### module.exports~Props : <code>object</code>
A number, or a string containing a number.

**Kind**: inner typedef of <code>[module.exports](#exp_module_transform-props-with--module.exports)</code>
<a name="module_transform-props-with--module.exports..SimpleTransformation"></a>

#### module.exports~SimpleTransformation ⇒ <code>Props</code>
This callback is displayed as part of the Requester class.

**Kind**: inner typedef of <code>[module.exports](#exp_module_transform-props-with--module.exports)</code>

| Param | Type |
| --- | --- |
| oldProps | <code>Props</code> |

<a name="module_transform-props-with--module.exports..HigherOrderComponent"></a>

#### module.exports~HigherOrderComponent ⇒ <code>React.Component</code>
Higher-order React Component.

**Kind**: inner typedef of <code>[module.exports](#exp_module_transform-props-with--module.exports)</code>

| Param | Type |
| --- | --- |
| BaseComponent | <code>React.Component</code> |

<a name="module_transform-props-with--module.exports..Transformation"></a>

#### module.exports~Transformation : <code>SimpleTransformation</code> &#124; <code>object</code>
A number, or a string containing a number.

**Kind**: inner typedef of <code>[module.exports](#exp_module_transform-props-with--module.exports)</code>
