import { Angular4In60MinutesPage } from './app.po';

describe('angular4-in60-minutes App', () => {
  let page: Angular4In60MinutesPage;

  beforeEach(() => {
    page = new Angular4In60MinutesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
