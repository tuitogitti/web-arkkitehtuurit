import { AngnewPage } from './app.po';

describe('angnew App', () => {
  let page: AngnewPage;

  beforeEach(() => {
    page = new AngnewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
