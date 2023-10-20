import { FcMoneyTransfer, FcAssistant } from 'react-icons/fc';
import { TbCarCrane } from 'react-icons/tb';
const Policy = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-5 grid-cols-1 w-11/12 px-6 py-6 mx-auto bg-orange-100 space-y-4 my-6 items-center">
      <div className="space-y-3">
        <h3 className="text-7xl w-3/5 mx-auto h-21">
          <FcMoneyTransfer></FcMoneyTransfer>
        </h3>
        <h3 className="text-xl font-semibold text-center">
          MONEY BACK GUARANTEE
        </h3>
        <div className="h-20 p-5">
          <p className="text-sm text-center">
            We offer a 30-day money-back guarantee on all our products. If
            you're not satisfied with your purchase, you can request a full
            refund.
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-7xl w-3/5 mx-auto h-20">
          <FcAssistant></FcAssistant>
        </h3>
        <h3 className="text-xl font-semibold text-center">
          ONLINE SUPPORT 24/7
        </h3>
        <div className="h-20 p-4">
          <p className="text-sm text-center">
            Our customer support team is available around the clock to assist
            you with any questions or issues you may have. We are here to help
            you at any time.
          </p>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-7xl w-3/5 mx-auto h-20 ">
          <TbCarCrane></TbCarCrane>
        </h3>
        <h3 className="text-xl font-semibold text-center">
          FREE SHIPPING WORLDWIDE
        </h3>
        <div className="h-20 p-4">
          <p className="text-sm text-center">
            Enjoy free worldwide shipping on all orders. No matter where you
            are, we'll deliver your products to your doorstep at no additional
            cost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
