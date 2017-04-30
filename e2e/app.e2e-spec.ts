import { ClimatizrV2Page } from './app.po';

describe('climatizr-v2 App', () => {
  let page: ClimatizrV2Page;

  beforeEach(() => {
    page = new ClimatizrV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
