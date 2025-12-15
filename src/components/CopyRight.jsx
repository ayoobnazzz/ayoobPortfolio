import { motion } from "framer-motion";
import { fadeInLeft } from "../utils/animations";

const CopyRight = () => {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_copyright">
        <div className="container">
          <div className="inner">
            <motion.div 
              className="left" 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <p>
                Developed by Ayoob Nazeer</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
