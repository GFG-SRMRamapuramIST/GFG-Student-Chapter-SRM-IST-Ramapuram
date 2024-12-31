import { motion } from "framer-motion";

import { ImageLoaderComponent } from "../../Utility";
import { HalloweenHangoutPic } from "../../assets";
import HeikiBackground from "../../Components/ui/HeikiBackground";

function HalloweenHangout() {
  return (
    <div className="py-14 md:py-5 px-2 sm:px-5 min-h-screen relative">
      <HeikiBackground
        primaryColor="#00895e"
        secondaryColor="#2f8d46"
        pattern="grid"
        density="dense"
        opacity={0.2}
      />

      <div className="pt-[45px] sm:pt-[30px] md:pt-[50px] relative">
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
              url={HalloweenHangoutPic}
              hashCode={"LEMQn$$%9ZXU_4NIxHrq-.RP.8Sg"}
              alt={"Halloween Hangout"}
              className="w-full h-auto rounded-lg"
              blurWidth={"100%"}
              blurHeight={"250px"}
            />
          </motion.div>
          {/* Title */}
          <h1 className="text-gray-700 text-[24px] sm:text-4xl font-bold mb-8 capitalize">
            Halloween Hangout
          </h1>
          {/* Date */}
          <p className="text-[#666666] text-sm sm:text-md font-semibold mb-4">
            31st October 2024
          </p>
          {/* Sub-heading */}
          <p className="text-gray-500 text-sm sm:text-md font-semibold mb-6">
            Spooky Games and Stories: A Night of Virtual Thrills
          </p>
          {/* Paragraph 1 */}
          <div className="text-gray-500 text-sm sm:text-md leading-relaxed break-words">
            On October 31st, 2024, the GeeksforGeeks SRM RMP members came
            together for a virtual "Halloween Hangout" on Google Meet. Starting
            at 10:00 PM, the night was alive with spooky fun, beginning with the
            thrilling game of "Among Us." Members played as crewmates and
            imposters, working to complete tasks while identifying the hidden
            saboteur. The suspense, dramatic accusations, and surprising reveals
            kept everyone entertained. Following this, we switched to the
            "Scribble Game," where participants sketched Halloween-themed words
            for others to guess. From ghostly figures to haunted houses, the
            creativity and humor brought bursts of laughter. Interwoven with
            these games were spooky stories shared by members, ranging from
            urban legends to personal eerie experiences. Dim lighting and
            occasional sound effects added an immersive and spine-chilling touch
            to the storytelling.
          </div>
          {/* Paragraph 2 */}
          <div className="text-gray-500 text-sm sm:text-md leading-relaxed break-words">
            The two-hour event wrapped up around midnight, leaving everyone with
            smiles and a sense of fulfillment. It was a perfect blend of
            laughter, camaraderie, and Halloween fright, showcasing the joy of
            virtual gatherings. Whether it was the strategic gameplay, artistic
            fun, or chilling stories, each moment added to the unforgettable
            experience. The Halloween Hangout proved that distance doesn’t
            hinder the spirit of celebration, leaving everyone eagerly
            anticipating the next spooky adventure with GeeksforGeeks SRM RMP.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HalloweenHangout;
