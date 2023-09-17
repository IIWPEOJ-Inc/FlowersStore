import QuickOrder from "./QuickOrder/QuickOrder";
import { Recommendation } from "./Recommendation/Recommendation";

export const Product = () => {
  return (
    <section id="Product-section">
      <QuickOrder></QuickOrder>
      <h1>You may also like…</h1>
      <Recommendation></Recommendation>
    </section>
  );
};
