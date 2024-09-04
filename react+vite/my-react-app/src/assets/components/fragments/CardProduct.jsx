import Button from "../elements/button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className=" justify-center flex min-h-screen items-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-2">{children}</div>
    </div>
  );
};

const Header = (props) => {
  const { gambar } = props;
  return (
    <a href="#">
      <img className="rounded-t-lg" src={gambar} alt="" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="my-4">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, HandelAddToCart, id } = props;
  return (
    <div className="flex items-start mt-5">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <Button
            onClick={() => HandelAddToCart(id)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add+
          </Button>
        </div>
      </div>
      <a className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Rp {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</a>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
