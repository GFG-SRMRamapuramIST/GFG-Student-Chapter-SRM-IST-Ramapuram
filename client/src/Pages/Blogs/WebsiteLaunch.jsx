import { motion } from "framer-motion";

import { ImageLoaderComponent } from "../../Utility";
import { templateImg } from "../../assets";

function WebsiteLaunch() {
  return (
    <div className="py-14 md:py-5 px-2 sm:px-5 min-h-screen">
      <div className="pt-[45px] sm:pt-[30px] md:pt-[50px]">
        <div className="max-w-4xl mx-auto bg-white p-3 md:p-8 mb-10 rounded-lg shadow-md">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1 }}
            transition={{
              scale: { duration: 0.25 },
              opacity: { duration: 2 },
            }}
          >
            <ImageLoaderComponent
              url={templateImg}
              hashCode={"LCF~Kjii-:I=yNs%NKt5??.7xvRO"}
              alt={"Template Image"}
              className="w-full h-auto rounded-lg"
              blurWidth={"100%"}
              blurHeight={"250px"}
            />
          </motion.div>
          {/* Title */}
          <h1 className="text-gray-700 text-[24px] sm:text-4xl font-bold mb-8 capitalize">
            Lorem ipsum dolor sit amet.
          </h1>
          {/* Date */}
          <p className="text-[#666666] text-sm sm:text-md font-semibold mb-4">
            1st January 2025
          </p>
          {/* Sub-heading */}
          <p className="text-gray-500 text-sm sm:text-md font-semibold mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aliquam quia atque laudantium! Ad, voluptatem.
          </p>
          {/* Paragraph 1 */}
          <div className="text-gray-500 text-sm sm:text-md leading-relaxed break-words">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            libero atque modi exercitationem, repudiandae laboriosam impedit
            commodi quos voluptate fuga ad iusto sapiente, velit asperiores
            quasi delectus. Enim officiis accusantium labore incidunt omnis unde
            delectus cumque iusto aliquid mollitia. Temporibus blanditiis iste
            similique aspernatur dolorem optio expedita aliquam nihil obcaecati
            natus porro a fugiat rem fuga ipsa, culpa nam minima nulla. Sapiente
            officia fugit blanditiis voluptates dolores, possimus nobis
            provident eaque tempore suscipit sit pariatur eligendi totam
            reiciendis laboriosam! Ut explicabo enim eum. Esse quae dolorum
            blanditiis? Voluptate quisquam consectetur nulla doloremque vel.
            Perferendis natus nisi ipsum in soluta optio.
          </div>
          {/* Paragraph 2 */}
          <div className="text-gray-500 text-sm sm:text-md leading-relaxed break-words">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            libero atque modi exercitationem, repudiandae laboriosam impedit
            commodi quos voluptate fuga ad iusto sapiente, velit asperiores
            quasi delectus. Enim officiis accusantium labore incidunt omnis unde
            delectus cumque iusto aliquid mollitia. Temporibus blanditiis iste
            similique aspernatur dolorem optio expedita aliquam nihil obcaecati
            natus porro a fugiat rem fuga ipsa, culpa nam minima nulla. Sapiente
            officia fugit blanditiis voluptates dolores, possimus nobis
            provident eaque tempore suscipit sit pariatur eligendi totam
            reiciendis laboriosam! Ut explicabo enim eum. Esse quae dolorum
            blanditiis? Voluptate quisquam consectetur nulla doloremque vel.
            Perferendis natus nisi ipsum in soluta optio.
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteLaunch;
