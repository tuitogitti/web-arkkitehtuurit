import { AngrouterPage } from './app.po';

describe('angrouter App', () => {
  let page: AngrouterPage;

  beforeEach(() => {
    page = new AngrouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
