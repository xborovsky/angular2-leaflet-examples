import { Angular2LeafletExamplesPage } from './app.po';

describe('angular2-leaflet-examples App', function() {
  let page: Angular2LeafletExamplesPage;

  beforeEach(() => {
    page = new Angular2LeafletExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
