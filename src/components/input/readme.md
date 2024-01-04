# groupui-input



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                   | Description                                                                                                                                                                                                                                                                                                             | Type               | Default     |
| ------------------------ | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------- |
| `autofocus`              | `autofocus`                 | sets focus automatically                                                                                                                                                                                                                                                                                                | `boolean`          | `undefined` |
| `brand`                  | `brand`                     | determines which brand to use.                                                                                                                                                                                                                                                                                          | `string`           | `undefined` |
| `descriptionOnlyOnFocus` | `description-only-on-focus` | shows the description only when the component has focus                                                                                                                                                                                                                                                                 | `boolean`          | `false`     |
| `disabled`               | `disabled`                  | sets input-field to readonly                                                                                                                                                                                                                                                                                            | `boolean`          | `undefined` |
| `htmlMaxlengthBehavior`  | `html-maxlength-behavior`   | determines whether maxlength should prevent input of any more characters (html default behavior)                                                                                                                                                                                                                        | `boolean`          | `false`     |
| `iconColor`              | `icon-color`                | color of the icon                                                                                                                                                                                                                                                                                                       | `string`           | `undefined` |
| `max`                    | `max`                       | maximum value to accept for this input. To be used with type=number                                                                                                                                                                                                                                                     | `number \| string` | `undefined` |
| `maxlength`              | `maxlength`                 | sets the maximum amount of characters of the input-field                                                                                                                                                                                                                                                                | `number`           | `undefined` |
| `min`                    | `min`                       | minimum value to accept for this input. To be used with type=number                                                                                                                                                                                                                                                     | `number \| string` | `undefined` |
| `minlength`              | `minlength`                 | sets the minimum amount of characters of the input-field                                                                                                                                                                                                                                                                | `number`           | `undefined` |
| `name`                   | `name`                      | name of the input element to support forms                                                                                                                                                                                                                                                                              | `string`           | `undefined` |
| `noValidation`           | `no-validation`             | disable internal validation                                                                                                                                                                                                                                                                                             | `boolean`          | `false`     |
| `pattern`                | `pattern`                   | a pattern which will be covered by validity                                                                                                                                                                                                                                                                             | `string`           | `undefined` |
| `placeholder`            | `placeholder`               | placeholder of the input-field<br> ❗❗ applicable only to: VWAG                                                                                                                                                                                                                                                          | `string`           | `undefined` |
| `readonly`               | `readonly`                  | toggles readonly mode                                                                                                                                                                                                                                                                                                   | `boolean`          | `undefined` |
| `required`               | `required`                  | specifies that an input must be filled out before submitting the form                                                                                                                                                                                                                                                   | `boolean`          | `false`     |
| `severity`               | `severity`                  | style attribute                                                                                                                                                                                                                                                                                                         | `any`              | `undefined` |
| `showClearIcon`          | `show-clear-icon`           | show clear icon to clear the input field                                                                                                                                                                                                                                                                                | `boolean`          | `false`     |
| `showStatusIcon`         | `show-status-icon`          | show status icon on severity danger, warning, success                                                                                                                                                                                                                                                                   | `boolean`          | `false`     |
| `type`                   | `type`                      | specifies the type of input element                                                                                                                                                                                                                                                                                     | `string`           | `'text'`    |
| `typingInfoTemplate`     | `typing-info-template`      | a string with placeholder about count of available and used characters. Works only  in combination with maxlength. Possible values:  {characters-used}  {characters-left}  {characters-max} e.g.:    '{characters-used} characters used'    '{characters-left} characters left'    '{characters-used}/{characters-max}' | `string`           | `undefined` |
| `validity`               | --                          | <span style="color:red">**[DEPRECATED]**</span> use the validity state returned in `groupuiInvalid` event<br/><br/>returns the element's current validityState state (readonly value)                                                                                                                                   | `ValidityState`    | `undefined` |
| `value`                  | `value`                     | value of the input-field                                                                                                                                                                                                                                                                                                | `string`           | `undefined` |


## Events

| Event                 | Description                                                       | Type                         |
| --------------------- | ----------------------------------------------------------------- | ---------------------------- |
| `groupuiChange`       | for react user only - use this instead of the native change event | `CustomEvent<void>`          |
| `groupuiClearClicked` | is dispatched if the clear icon is clicked                        | `CustomEvent<void>`          |
| `groupuiDidLoad`      | dispatched when component finished loading                        | `CustomEvent<void>`          |
| `groupuiInvalid`      | is dispatched when the value is invalid                           | `CustomEvent<ValidityState>` |


## Methods

### `validate() => Promise<void>`

function to trigger component validation manually

#### Returns

Type: `Promise<void>`




## Slots

| Slot            | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| `"description"` | named slot 'description', here is any HTML content allowed. |
| `"label"`       | named slot 'label', here is any HTML content allowed.       |


----------------------------------------------


