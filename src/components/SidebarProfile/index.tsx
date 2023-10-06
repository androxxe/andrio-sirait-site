import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data";
import Image from "next/image";

const Profile = (): JSX.Element => {
  return (
    <div className="bg-primary-500 h-full w-full lg:w-2/5 rounded-tl-lg rounded-bl-lg rounded-tr-lg lg:rounded-tr-none relative">
      <div className="h-[350px] md:h-[420px] lg:h-full w-full relative">
        <Image priority={true} className="object-contain" src={profile.photo_path} fill quality={40} alt={`Photo ${profile.name}`} content="fill" />
      </div>
      <div className="absolute bottom-0 p-5 text-white text-center w-full bg-primary-600 rounded-bl-lg">
        <h2 className="font-bold">{profile.name}</h2>
        <h2 className="text-sm font-light">{profile.role}</h2>
        {Object.keys(profile.social_media).length > 0 ? (
          <div className="flex space-x-4 pt-5 flex-row justify-center items-center">
            {profile.social_media?.facebook ? (
              <a target="_blank" rel="noreferrer" href={profile.social_media.facebook} className="text-lg" data-umami-event="[SOCIAL MEDIA] Facebook">
                <FaFacebook />
              </a>
            ) : null}

            {profile.social_media?.instagram ? (
              <a target="_blank" rel="noreferrer" href={profile.social_media.instagram} className="text-lg" data-umami-event="[SOCIAL MEDIA] Instagram">
                <FaInstagram />
              </a>
            ) : null}

            {profile.social_media?.linked_in ? (
              <a target="_blank" rel="noreferrer" href={profile.social_media.linked_in} className="text-lg" data-umami-event="[SOCIAL MEDIA] Linked-In">
                <FaLinkedin />
              </a>
            ) : null}

            {profile.social_media?.github ? (
              <a target="_blank" rel="noreferrer" href={profile.social_media.github} className="text-lg" data-umami-event="[SOCIAL MEDIA] GitHub">
                <FaGithub />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
