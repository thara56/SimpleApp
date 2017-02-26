import { SimpleAppPage } from './app.po';

describe('simple-app App', function() {
  let page: SimpleAppPage;

  beforeEach(() => {
    page = new SimpleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
