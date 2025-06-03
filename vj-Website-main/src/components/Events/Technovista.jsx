import Reveal from "../Reveal";

export default function Technovista() {
  const data = [
    {
      title: "Guest Lecture",
      description: "",
      time: "11:00 A.M. - 10:00 A.M. \n10th June 2024 \nKS AUDITORIUM",
    },
    {
      title: "Red Teaming",
      description:
        "Prove your red teaming skills by hacking into the contest machine. Any online resource can be used (YouTube, chatgpt,etc…) the first to gain admin access to the machine wins the contest. There will also be live demonstration of pentesting at the beginning. This event is more like a workshop and practise it has multiple easy, medium and hard vulnerabilities to be exploited points will be given on the level of exploited vulnerabilities and winner will be decided by points first then submission time next",
      image: "/events/Technovista2024/redteaming.png",
      time: "10:00 A.M. - 1:00 P.M. \n10th June 2024 \nC-105 , C-106, B-005, B-006, B-112/1, B-112/2",
    },
    {
      title: "Tech Elocution",
      description:
        "Are you a tech enthusiast with clear and engaging communication? Do you have the ability to explain complex technological concepts in a way that captivates and enlightens your audience? If so, then our Tech Elocution Competition hosted by TECHNO VISTA is the perfect platform for you to showcase your talent!Tech Elocution Competition is a unique opportunity for individuals passionate about technology to demonstrate their ability to articulate and present technical information effectively in a creative way of their choice. Participants will have the chance to deliver speeches on a variety of tech-related topics, ranging from artificial intelligence and machine learning to data science and cyber security.",
      image: "/events/Technovista2024/techelocution.png",
      time: "1:40 P.M. - 4:40 P.M. \n10th June 2024 \nB-Block seminar hall",
    },
    {
      title: "Project Expo",
      description:
        "Prepare to witness a showcase of cutting-edge projects that redefine innovation. From the mesmerising world of Artificial Intelligence and Machine Learning to crucial fields like Healthcare Analytics and Cybersecurity, our event brings you the pinnacle of technology and creativity. Explore a diverse array of projects from all engineering domains, each highlighting the incredible potential of human ingenuity. Whether you're passionate about Aerospace, Civil, Mechanical, or Electrical Engineering, there's something here to spark your imagination. Join us for an unforgettable experience where ideas come to life and the possibilities are limitless. Be inspired by the brightest minds and the most exciting innovations shaping our world",
      image: "/events/Technovista2024/projectexpo.png",
      time: "1:40 P.M. - 4:40 P.M. \n10th June 2024 \nB-Block 4th floor corridors",
    },
    {
      title: "Patent Summit",
      description: "",
      time: "1:40 P.M. - 4:40 P.M. \n10th June 2024 \nB-005, B-006",
    },
    {
      title: "DQ Code Fest",
      description:
        "Get ready for the most awaited coding contest at VNR, hosted by VJ DQ! The event consists of two rounds, with each team allowed a maximum of two members. Round 1, the coding prelims, will take place online on May 30th, 2024, while Round 2 is scheduled for June 6th, 2024, as an offline contest held at the college. Round 1 will be conducted on the HackerRank platform, requiring teams to have a HackerRank account. Team leaders must fill out a Google form with required details for participation. Any malpractice will result in disqualification, so ensure all personal details are accurate. Get ready with your passes and gear up for the challenge!",
      image: "/events/Technovista2024/codefest.png",
      time: "9:30 A.M. - 1:00 P.M. \n11th June 2024 \nP-401, P-402, C-105, C-106",
    },
    {
      title: "Case Study and Data Visualize",
      description:
        "Team TechnoVista2K24 is thrilled to invite you to participate in our exhilarating event, where it is time to prove yourself worthy of innovating the present world into its finest form. If this is what you want to do then say no more and join our amazing event filled with exploration and research. Study what's going on and infer what's needed, Visualise your inferences in the most pleasing manner that can be understood by anyone. Improve present norms by understanding complex matter and turn it into its simplest form. A problem statement which is basically a scenario is given, with this make a report and visualise on a dashboard using any kind of visual analytics platform.",
      image: "/events/Technovista2024/casestudy.png",
      time: "1:40 P.M. - 4:40 P.M. \n11th June 2024 \nP-401, P-402, B-112/2 ",
    },
    {
      title: "Game of Threats",
      description:
        "Calling all cyber defenders and data enthusiasts! 💻 The Game of Threats is upon you! This electrifying event throws down a thrilling challenge with four mind-bending rounds: Hangman, Code Breaker, Word Scramble, and Memory Game. 🧠 Sharpen your skills, challenge your friends, and claim ultimate glory! 🏆 Compete for a chance to win incredible prizes. 💰 Don't miss this electrifying opportunity to showcase your talent in the digital arena! Let’s play, learn, and secure the Digital world!",
      image: "/events/Technovista2024/threats.png",
      time: "10:00 A.M. - 4:40 P.M. \n12th June 2024 \nOpen air auditorium (a.k.a sinti stage)",
    },
    {
      title: "Cyber Hunt",
      description:
        "Cyber Hunt - a thrilling digital treasure hunt where participants will embark on an exciting journey through various cybersecurity challenges! and test their cryptography skills, decode puzzles, and uncover hidden clues to reach the ultimate destination.",
      image: "/events/Technovista2024/cyberhunt.png",
      time: "1:40 P.M. - 4:40 P.M. \n11th June 2024 \nVNRVJIET",
    },
    {
      title: "24h Hackathon",
      description:
        "Team TechnoVista 2k24 is thrilled to invite you to participate in our exhilarating 24-hour hackathon event, where creativity knows no bounds and innovation takes center stage Happy Coding! 🚀🔥",
      image: "/events/Technovista2024/hachathon.png",
      time: "10:00 A.M.(12th) - 10 A.M.(13th) \nB-005, B-006, C-105, C-106, P-102/2, P-401, P-402, B112/2",
    },
    {
      title: "Valedictory Ceremony",
      time: "11:00 A.M. onwards \n13th June 2024 \nKS AUDITORIUM",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-[90%] sm:w-[80%] min-h-screen mt-20 m-auto ">
        <div className="flex flex-col justify-center items-center gap-10 min-h-[calc(100vh-4.5rem)]">
          <h1 className="text-center text-5xl sm:text-7xl neonText">
            𝕋𝔼ℂℍℕ𝕆𝕍𝕀𝕊𝕋𝔸
          </h1>
          <div className="mt-4 w-full flex flex-col lg:flex-row gap-8 sm:gap-12 items-center lg:items-start">
            <img
              src="/events/Technovista2024/img1.png"
              className="w-full lg:w-1/2 shadow-xl"
              alt=""
            />
            <div>
              <h2 className="text-2xl py-2">
                On 10th, 11th, 12th of June 2024 at{" "}
                <span className="font-semibold">VNRVJIET</span>
              </h2>
              <p className="text-black text-[18px] sm:text-xl">
                TechnoVista is a premier collaborative event organized by the
                Data Science and Cyber Security Clubs, offering a diverse range
                of activities including a coding contest, cyber hunt, red
                teaming exercise, case study competition, hackathon, project
                expo, tech elocution, and guest lectures. This event aims to
                foster innovation, enhance technical skills, and provide
                networking opportunities for students, professionals, and tech
                enthusiasts. Participants can engage in competitive and
                educational activities, showcase their projects, and gain
                insights from industry experts, making TechnoVista a unique
                platform for learning, growth, and collaboration in the fields
                of data science and cybersecurity.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-16">
          <h1 className="text-4xl sm:text-5xl font-semibold">Events </h1>

          <div className="container">
            <div className="timeline">
              {data.map((item, index) => {
                return (
                  <div key={index}>
                    <Reveal>
                      <div className="timeline-container primary">
                        <div className="timeline-icon">{index + 1}</div>
                        <div className="timeline-body">
                          <h4 className="timeline-title">
                            <span className="badge">{item?.title}</span>
                          </h4>
                          <p className="timeline-subtitle">{item?.time}</p>
                          <p className="max-h-60 overflow-y-scroll py-1 md:max-h-96 md:overflow-y-visible">
                            {item?.description}
                          </p>
                          <p>{item?.venue}</p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
