import { total } from "./abstraction";
import { ariel } from "./decorator-pattern";
import { answer } from "./dip-principle";
import { account } from "./lsp-principle";
import { instance, instance2 } from "./singleton-pattern";

(() => {
  app();
})();

function app() {
  // console.log(instance.value, instance2.value);
  // console.log(instance === instance2);
  console.log(ariel);
}
