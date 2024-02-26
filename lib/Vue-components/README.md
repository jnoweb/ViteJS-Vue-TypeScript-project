# Vue-components
### This library offers a collection of reusable components designed with Vue.js and TailwindCSS, catering to diverse development needs. It is available in both native Vue.js format and as web components, ensuring seamless integration across different project types.


## Components & APIs
Our collection includes the following Vue components:

- `AppCounter | vue-app-counter`: A counter component, that increments or decrements the counter.

- `AppFunctionality | vue-app-functionality`: A wrapper component that encapsulates counter logic, enhancing reusability across your projects.

- `ControlPane | vue-control-pane`: Exposes a button that resets the counter.

- `LocalePicker | vue-locale-picker`: A localization component that allows users to switch between different languages.

- `MetricsDisplay | vue-metrics-display`: A display component that displays the current count value.

- `registerCustomElements.ts`: Responsible for registering the Vue components as custom elements, enabling their use as Web Components in various environments.


## Testing
To test run:
> npx nx run Vue-components:test 
## Build
To build run:
> nx run Vue-components:build

## Usage as Vue components

```jsx
<template>
    <LocalePicker @localeChange="localeChange" />
    <AppFunctionality>
    <template #metrics-display>
        <MetricsDisplay :label=""> </MetricsDisplay>
    </template>
    <template #app-counter>
        <AppCounter :minuslabel="" :pluslabel="">
        </AppCounter>
    </template>
    <template #control-pane>
        <ControlPane :label=""> </ControlPane>
    </template>
    </AppFunctionality>
</template>

```

## Usage as Web components

```html
<div>
    <vue-locale-picker></vue-locale-picker>
    <vue-app-functionality>
        <vue-metrics-display slot="metrics-display"></vue-metrics-display>
        <vue-control-pane slot="control-pane"> 
        </vue-control-pane>
        <vue-app-counter slot="app-counter"> 
        </vue-app-counter>
    </vue-app-functionality>
</div>

```

