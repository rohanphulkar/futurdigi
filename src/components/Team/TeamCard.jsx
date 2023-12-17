import React from "react";
import { SiLinkedin } from "react-icons/si";

const TeamCard = ({ name, designation, image, linkedin }) => {
  return (
    <div>
      {/* Card */}
      <div className="">
        <div className="border border-gray-200 rounded-[20px]  p-5 bg-white drop-shadow-1 transition-all">
          <div className="flex flex-wrap items-center gap-8">
            <div className="w-25 h-25 rounded-full overflow-hidden">
              <img src={image} alt={name} width={84} height={84} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-dark mb-1">{name}</h3>
              <p>{designation}</p>
              <ul className="flex mt-1 space-x-4">
                {linkedin && (
                  <li>
                    <a
                      href={linkedin}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex items-center bg-blue-100 p-0.5 px-3 rounded space-x-1"
                    >
                      <SiLinkedin fontSize={18} className="text-blue-600" />
                      <span className="font-semibold">Linkedin</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Card End */}
    </div>
  );
};

export default TeamCard;
