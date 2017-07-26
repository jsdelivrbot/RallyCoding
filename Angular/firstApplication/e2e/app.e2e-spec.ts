import { FirstApplicationPage } from './app.po';

describe('first-application App', () => {
  let page: FirstApplicationPage;

  beforeEach(() => {
    page = new FirstApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
