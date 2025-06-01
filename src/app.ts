import { total } from "./abstraction";
import { answer } from "./dip-principle";
import { account } from "./lsp-principle";

(() => {
  app();
})();

function app() {
  console.log(answer, "ariel");
}
