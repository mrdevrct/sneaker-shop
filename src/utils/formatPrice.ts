export function formatPrice(num: number) {
  return new Intl.NumberFormat("fa-IR").format(num) + " تومان";
}
