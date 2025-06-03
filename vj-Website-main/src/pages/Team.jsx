import { faculty, team } from "../data/TeamData";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
export default function Team() {
  const cardVariants = {
    intial: {
      scale: 1,
      boxShadow: "none",
    },
    hover: {
      scale: 1.025,
      boxShadow: "0px 48px 100px 0px #110c2e26",
    },
  };
  return (
    <div className="team mt-20 w-full text-center">
      <h1 className="font-semibold text-3xl">Who are we?</h1>
      <p>The people behind DQ</p>
      <div className="team-div mx-auto flex flex-wrap justify-center mt-8 w-[80%] m-4">
        {faculty.map((member, index) => {
          return (
            <motion.div
              key={index}
              className="team-member  flex flex-col jsutify-around m-4 p-2 min-w-[17rem] min-h-60  rounded-2xl bg-black/10 hover:bg-black/15 transitiona-all duration-300 ease-in-out"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="hover"
            >
              <p className="text-left p-[2px] w-full mb-2 text-lg">
                {member.role}
              </p>
              <img
                className="w-48 h-48 rounded-[20%] m-4 mx-auto my-0"
                src={
                  member.image
                    ? "teamImages/" + member.image
                    : "https://picsum.photos/200"
                }
                alt={member.name}
              />
              <a href={member.linkedin} target="_blank">
                <p className="px-[2px] text-right w-full mt-2 transition-all hover:underline">
                  {member.name}
                </p>
              </a>
            </motion.div>
          );
        })}
      </div>
      <div className="team-div mx-auto flex flex-wrap justify-center mt-8 w-[80%] m-4">
        {team.map((member, index) => {
          return (
            <Reveal key={index}>
              <motion.div
                key={index}
                className="team-member flex flex-col jsutify-around m-4 p-2 min-w-[17rem] min-h-60  rounded-2xl bg-black/10 hover:bg-black/15 transitiona-all duration-300 ease-in-out"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                whileTap="hover"
                unselectable="on"
              >
                <p className="text-left p-[2px] w-full mb-2 text-lg">
                  {member.role || "idk"}
                </p>
                <img
                  className="w-48 h-48 rounded-[20%] m-4 mx-auto my-0 "
                  src={
                    member.image
                      ? "teamImages/" + member.image
                      : "https://picsum.photos/200"
                  }
                  alt={member.name}
                />
                <a href={member.linkedin} target="_blank">
                  <p className="px-[2px] text-right w-full mt-2 transition-all hover:underline">
                    {member.name}
                  </p>
                </a>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
