export const getGroup1 = () => cy.get('#group1');
export const getGroup2 = () => cy.get('#group2');

export const getMetricsDisplay = (group) => cy.get(`#${group} .metrics-display`);
export const getControlPane = (group) => cy.get(`#${group} .control-pane`);
export const getAppCounter = (group) => cy.get(`#${group} .app-counter`);
export const localePicker = (group) => cy.get(`#${group} .locale-picker`);

export const getMetricsDisplayContent = (group) => getMetricsDisplay(group).shadow().find('.display');
export const getPlusButton = (group) => getAppCounter(group).shadow().find('.plus-button');
export const getMinusButton = (group) => getAppCounter(group).shadow().find('.minus-button');
export const getResetButton = (group) => getControlPane(group).shadow().find('button');
export const getLocalePickerSelect = (group) => localePicker(group).shadow().find('select');
export const getLocalePickerOption = (group, value) => localePicker(group).shadow().find(`option[value="${value}"]`);
