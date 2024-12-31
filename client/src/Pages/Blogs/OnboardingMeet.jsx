import { motion } from "framer-motion";

import { ImageLoaderComponent } from "../../Utility";
import { OnboardingMeetingPic, templateImg } from "../../assets";
import HeikiBackground from "../../Components/ui/HeikiBackground";

function OnboardingMeet() {
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
              url={OnboardingMeetingPic}
              hashCode={"L5Eo**F2EA,t.ASaI7xX-MNq9vtR"}
              alt={"Onboarding Meeting"}
              className="w-full h-auto rounded-lg"
              blurWidth={"100%"}
              blurHeight={"250px"}
            />
          </motion.div>
          {/* Title */}
          <h1 className="text-gray-700 text-[24px] sm:text-4xl font-bold mb-8 capitalize">
            Onboarding Meeting
          </h1>
          {/* Date */}
          <p className="text-[#666666] text-sm sm:text-md font-semibold mb-4">
            19th October 2024
          </p>
          {/* Sub-heading */}
          <p className="text-gray-500 text-sm sm:text-md font-semibold mb-6">
            Connecting Minds and Building Goals. A Blend of Virtual and
            In-Person Interactions to Unite Members
          </p>
          {/* Paragraph 1 */}
          <div className="text-gray-500 text-sm sm:text-md leading-relaxed break-words">
            On October 19th, 2024, the GeeksforGeeks SRM RMP club hosted its
            much-anticipated onboard meeting, a perfect mix of online and
            offline interactions. The virtual session, conducted via Google
            Meet, kicked off with an overview of the club’s rules, motives, and
            future plans. Once the formal discussions concluded, the atmosphere
            shifted to a more relaxed tone. Members introduced themselves,
            shared stories, and engaged in lighthearted conversations, fostering
            a sense of camaraderie and connection. During the introductions,
            members shared their hobbies and favorite movie or anime genres,
            leading to exciting discussions and discovering common interests.
            The conversation also sparked a friendly debate on the best
            programming language for competitive programming—C++ or Python—with
            members passionately presenting their arguments for each.
          </div>
          {/* Paragraph 2 */}
          <div className="text-gray-500 text-sm sm:text-md leading-relaxed break-words">
            The offline meeting, held on campus, added a more personal touch to
            the event. Members gathered to meet seniors, capture memorable
            photos, and discuss the club’s goals. Laughter echoed as plans for
            upcoming projects and events were brainstormed, bringing the team
            closer together. The day ended with smiles all around, marking a
            successful start to a promising journey with GeeksforGeeks SRM RMP.
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingMeet;
