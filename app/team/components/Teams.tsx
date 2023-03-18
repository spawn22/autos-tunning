"use client";
import { motion } from "framer-motion";

type TeamMember = {
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    firstName: "John",
    lastName: "Doe",
    position: "CEO",
    imageUrl:
      "https://res.cloudinary.com/ddyk63iig/image/upload/v1679107695/team2_fxqnnk.jpg",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    position: "CTO",
    imageUrl:
      "https://res.cloudinary.com/ddyk63iig/image/upload/v1679107812/team-member-02_didyd2.jpg",
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    position: "Marketing Director",
    imageUrl:
      "https://res.cloudinary.com/ddyk63iig/image/upload/v1679107695/team6_uaaurj.jpg",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    position: "Designer",
    imageUrl:
      "https://res.cloudinary.com/ddyk63iig/image/upload/v1679107695/team4_xkf7nt.jpg",
  },
  {
    firstName: "Mike",
    lastName: "Brown",
    position: "Developer",
    imageUrl:
      "https://res.cloudinary.com/ddyk63iig/image/upload/v1679107694/team_paop_h67sy2.jpg",
  },
  {
    firstName: "Sarah",
    lastName: "Lee",
    position: "Customer Support",
    imageUrl:
      "https://res.cloudinary.com/ddyk63iig/image/upload/v1679107695/t1-2_ea1onf.png",
  },
];

const Teams = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                className="w-full h-56 object-cover"
                src={member.imageUrl}
                alt=""
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              />
              <motion.div
                className="px-6 py-4"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.firstName} {member.lastName}
                </h3>
                <p className="text-gray-700 text-base">{member.position}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
