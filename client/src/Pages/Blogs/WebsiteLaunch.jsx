import { motion } from "framer-motion";

import { ImageLoaderComponent } from "../../Utility";
import { templateImg } from "../../assets";
import HeikiBackground from "../../Components/ui/HeikiBackground";

function WebsiteLaunch() {
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
            GeeksforGeeks Student Chapter SRM Ramapuram Website Launch
          </h1>
          {/* Date */}
          <p className="text-[#666666] text-sm sm:text-md font-semibold mb-4">
            2nd January 2025
          </p>
          {/* Sub-heading */}
          <p className="text-gray-500 text-sm sm:text-md font-semibold mb-6">
            A New Year, A New Beginning: Embracing Technology to Unite Geeks
          </p>
          {/* Paragraph 1 */}
          <div className="text-gray-500 text-sm sm:text-md leading-relaxed break-words">
            On January 1st, 2025, the GeeksforGeeks SRM RMP club proudly
            achieved a significant milestone with the launch of its official
            website. This event marks a new chapter in our journey, providing
            members and the wider community with a centralized platform to
            explore, learn, and grow together. The website, developed under the
            guidance of <strong>Vishal Kumar Yadav</strong> with contributions from <strong>Jeysurya</strong>,
            <strong>Amisha Kumari</strong>, and <strong>Sai Prashant</strong>, features sections for event
            updates, DSA learning resources, competitive programming guides, and
            blogs designed by <strong>Adisesh</strong> and <strong>Madhav Sinha</strong>. It also showcases
            the profiles of our leaders and core team members, along with a
            streamlined recruitment process using Google Forms. This platform is
            a testament to the hard work and dedication of our members, aiming
            to foster greater connectivity and create a seamless experience for
            all.
          </div>
          {/* Paragraph 2 */}
          <div className="text-gray-500 text-sm sm:text-md leading-relaxed break-words">
            The launch celebration will blend online and offline interactions to
            reach and involve all members. The online unveiling, hosted on
            Google Meet, will include a detailed walkthrough of the website’s
            features by the core team, followed by a Q&A session to gather
            feedback and ideas. Simultaneously, an offline event on campus will
            add a festive touch, featuring a cake-cutting ceremony and a recap
            of the website’s development journey. Members will have the
            opportunity to network, brainstorm future enhancements, and capture
            memorable moments. This launch symbolizes the club's commitment to
            innovation and collaboration, providing a platform that embodies the
            shared vision of fostering learning, creativity, and growth. As we
            embark on this exciting digital leap, we encourage all members to
            explore, contribute, and celebrate this milestone with us. Here’s to
            the successful launch of the GFG SRM RMP website and an inspiring
            year ahead!
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteLaunch;