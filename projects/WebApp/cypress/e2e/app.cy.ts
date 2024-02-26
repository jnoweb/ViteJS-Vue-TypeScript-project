import { translations } from "@vue-workspace/translations"
import {
  getGroup1,
  getGroup2,
  getMetricsDisplay,
  localePicker,
  getAppCounter,
  getControlPane,
  getMinusButton,
  getMetricsDisplayContent,
  getPlusButton,
  getResetButton,
  getLocalePickerSelect
} from '../support/app.po';

const TEST_GROUPS = ['group1', 'group2'];

describe('WebApp', () => {
  beforeEach(() => cy.visit('/'));

  it('should render 2 groups', () => {
    expect(getGroup1()).to.exist;
    expect(getGroup2()).to.exist;
  });

  TEST_GROUPS.forEach((group) => {

    describe(`Group ${group}`, () => {

      it(`should render ${group} correctly`, () => {
        expect(getMetricsDisplay(group)).to.exist;
        expect(getControlPane(group)).to.exist;
        expect(getAppCounter(group)).to.exist;
        expect(localePicker(group)).to.exist;
      });
    
      it('should increment counter in ${group}', () => {
        getMetricsDisplayContent(group).contains('0');
        getPlusButton(group).click();
        getMetricsDisplayContent(group).contains('1');
      });
    
      it('should decrement counter in ${group}', () => {
        getMetricsDisplayContent(group).contains('0');
        getMinusButton(group).click();
        getMetricsDisplayContent(group).contains('-1');
      });
    
      it('should reset counter in ${group}', () => {
        getMetricsDisplayContent(group).contains('0');
        getPlusButton(group).click();
        getMetricsDisplayContent(group).contains('1');
        getResetButton(group).click();
        getMetricsDisplayContent(group).contains('0');
      });
    
      it('should change locale for ${group}', () => {
        getMetricsDisplayContent(group).contains(translations.en.counter);
        getPlusButton(group).contains(translations.en.plus);
        getMinusButton(group).contains(translations.en.minus);
        getResetButton(group).contains(translations.en.reset);
    
        getLocalePickerSelect(group).select('fr');
    
        getMetricsDisplayContent(group).contains(translations.fr.counter);
        getPlusButton(group).contains(translations.fr.plus);
        getMinusButton(group).contains(translations.fr.minus);
        getResetButton(group).contains(translations.fr.reset);
      });
    })
  })
});
