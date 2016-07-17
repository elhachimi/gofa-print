import { GofaPrintPage } from './app.po';

describe('gofa-print App', function() {
  let page: GofaPrintPage;

  beforeEach(() => {
    page = new GofaPrintPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
