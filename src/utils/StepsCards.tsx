import { motion } from "framer-motion";

type Props = {};

const steps: {
  id: string;
  title: string;
  description: string;
  icon: string;
}[] = [
  {
    id: "step-1",
    title: "Join the Bakers Community",
    description:
      "Sign up quickly to access job opportunities and connect with fellow bakers.",
    icon: "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/add-user-icon.png?sp=r&st=2024-08-26T15:01:15Z&se=2025-08-26T23:01:15Z&spr=https&sv=2022-11-02&sr=b&sig=khaWRRlmHfigHtXJ4B13nXgmhdifEbFmEagADR1guxg%3D",
  },
  {
    id: "step-2",
    title: "Showcase Your Masterpieces",
    description:
      "Create a portfolio that highlights your best baked creations to attract clients.",
    icon: "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/camera-icon.png?sp=r&st=2024-08-26T15:08:33Z&se=2025-08-26T23:08:33Z&spr=https&sv=2022-11-02&sr=b&sig=obMCVbYhhkG3IcQzn6GGTG27kxToGVP3t9SDOoEH%2BXI%3D",
  },
  {
    id: "step-3",
    title: "Find and Win Baking Jobs",
    description:
      "Browse jobs, filter by expertise, and submit bids to secure work.",
    icon: "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/search-icon.png?sp=r&st=2024-08-26T15:25:46Z&se=2025-08-26T23:25:46Z&spr=https&sv=2022-11-02&sr=b&sig=y06vPXtfEbXTgNrJ9R34dRVsRUARymxe5hZWWRdIsKE%3D",
  },
  {
    id: "step-4",
    title: "Complete Orders with Precision",
    description:
      "Deliver on time and ensure customer satisfaction to build your reputation.",
    icon: "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/deliver-cake-icon.png?sp=r&st=2024-08-26T15:37:21Z&se=2025-08-26T23:37:21Z&spr=https&sv=2022-11-02&sr=b&sig=Mow2GCDpVw5AHDy4qdnoQnZL3YcD9cghVBryc%2F1dhIQ%3D",
  },
  {
    id: "step-5",
    title: "Get Paid for Your Skills",
    description:
      "Receive secure, timely payments through the app after completing jobs.",
    icon: "https://storagehomestovedev.blob.core.windows.net/web/VendorHome/pay-icon.png?sp=r&st=2024-08-26T15:40:36Z&se=2025-08-26T23:40:36Z&spr=https&sv=2022-11-02&sr=b&sig=MmwUDXMxmnrKeCchseNkbxHxO7bkWfqcbwuqnrQK5%2BU%3D",
  },
];

function StepsCards({}: Props) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 0.99 }}
      transition={{ delay: 1, ease: "easeOut", duration: 0.5 }}
      viewport={{ once: true }}
      className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-6 xl:gap-x-8"
    >
      {steps.map((step) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={`rounded-lg my-3.5 p-3 lg:p-4 xl:p-6 bg-white h-44 md:h-60 lg:h-44 xl:h-56 w-72 xxxxs:w-80 xxxs:w-[21rem] xs:w-[23rem] md:w-56 lg:w-[17rem] xl:w-72 3xl:w-80 flex flex-col justify-around`}
          style={{
            boxShadow:
              "0px 6px 15px 0px rgba(64.00000000000001, 79.00000000000006, 104.00000000000004, 0.09)",
          }}
          key={step.id}
        >
          <div className="w-10">
            <img src={step.icon} alt="" />
          </div>
          <div>
            <h2 className="font-semibold">{step.title}</h2>
          </div>
          <div>
            <p className="text-sm tracking-wider">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default StepsCards;
