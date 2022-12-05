const LottoService = require('./LottoService');
const lottoView = require('./view/lottoView');
const rankView = require('./view/rankView');
const { print } = require('./view/OutputView');

class LottoController {
  #lottoService;

  constructor() {
    this.#lottoService = new LottoService();
  }

  buyLotto(input) {
    const lottoCount = this.#lottoService.getLottoCount(input);
    const lottos = this.getLottos(lottoCount);

    const countMessage = lottoView.countResult(lottoCount);
    const lottosMessage = lottoView.lottoResult(lottos);

    print(countMessage + lottosMessage);
  }

  getLottos(count) {
    return this.#lottoService.getLottos(count);
  }

  inputWinNumbers(input) {
    return this.#lottoService.inputWinNumbers(input);
  }

  inputBonusNumber(input) {
    this.#lottoService.inputBonusNumber(input);
  }

  getStatics() {
    const statics = this.#lottoService.getStatics();
    const rank = rankView.getView(statics);
    print(rank);
  }
}

module.exports = LottoController;
