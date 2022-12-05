const LottoService = require('./LottoService');

class LottoController {
  #lottoService = new LottoService();

  buyLotto(input) {
    this.#lottoService.getLottos(input);
  }
}

module.exports = LottoController;
