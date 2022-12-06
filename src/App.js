const LottoPresenter = require('./Presenter/LottoPresenter');

class App {
  #lottoPresenter = new LottoPresenter();

  play() {
    this.#lottoPresenter.run();
  }
}

module.exports = App;

const app = new App();
app.play();
