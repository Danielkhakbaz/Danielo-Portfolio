import { ReactElement } from "react";
import { StaticImageData } from "next/image";
import { Text } from "@chakra-ui/react";
import BluBankLogo from "@/public/logos/companies/blu-logo.webp";
import BankIDLogo from "@/public/logos/companies/bankid-logo.webp";
import UIDLogo from "@/public/logos/companies/uid-logo.webp";
import HadishLogo from "@/public/logos/companies/hadish-logo.webp";
import CrossLogo from "@/public/logos/companies/cross-logo.webp";

type WorkExperiencesType = {
  logo: {
    src: StaticImageData;
    alt: string;
  };
  position: string;
  company_name: string;
  location: string;
  timeline: string;
  workplace_type: string;
  info: ReactElement;
  descriptions?: {
    paragraph: string;
  }[];
  divider?: boolean;
};

export const workExperiences: WorkExperiencesType[] = [
  {
    logo: { src: BluBankLogo, alt: "Blu Bank's logo" },
    position: "Front-end Developer",
    company_name: "Blu Bank",
    info: (
      <Text fontWeight="bold" textAlign="justify" rel="preload">
        At Blu Bank, we&apos;re redefining banking with the motto ‘Bank, but
        Lovely.’ I contribute to our fully digital, branchless platform that
        simplifies financial services, enabling account setup in under{" "}
        <Text as="span" textDecoration="underline">
          7 minutes
        </Text>{" "}
        with zero fees. We serve over{" "}
        <Text as="span" textDecoration="underline">
          10 million
        </Text>{" "}
        users and have achieved a strong market share of over{" "}
        <Text as="span" textDecoration="underline">
          60%
        </Text>
        —all while offering innovative solutions like vertical debit card
        designs, BluJunior for youth, BluBox savings, and quick collateral-free
        loans.
      </Text>
    ),
    timeline: "Jul 2025 - Present",
    workplace_type: "Hybrid",
    location: "Tehran, Iran",
    divider: true,
  },
  {
    logo: { src: BankIDLogo, alt: "BankID's logo" },
    position: "Front-end Developer",
    company_name: "Bank-ID",
    info: (
      <Text fontWeight="bold" textAlign="justify" rel="preload">
        Worked in the Bank-ID team as the first e-KYC service provider in Iran
        which uses powerful AI algorithms including live face detection and
        verification to authenticate the users’ ID, with more than{" "}
        <Text as="span" textDecoration="underline">
          50,000
        </Text>{" "}
        daily users and{" "}
        <Text as="span" textDecoration="underline">
          6,000,000
        </Text>{" "}
        successful authentications
      </Text>
    ),
    descriptions: [
      {
        paragraph:
          "Tackled highly complex concepts and projects, including creating reusable components for our customers to integrate into their code",
      },
      {
        paragraph:
          "Designed, developed, and maintained 3 panels with different roles",
      },
      {
        paragraph:
          "Thrived in a fast-paced and demanding environment, tackling complex concepts and projects that required a high degree of precision and ability to adapt to changing circumstances",
      },
    ],
    timeline: "Sep 2022 - Aug 2025",
    workplace_type: "Hybrid",
    location: "Tehran, Iran",
    divider: true,
  },
  {
    logo: { src: UIDLogo, alt: "UID's logo" },
    position: "Front-end Developer",
    company_name: "U-ID",
    info: (
      <Text fontWeight="bold" textAlign="justify" rel="preload">
        UID is a cutting-edge technology company specializing in AI-driven
        solutions, such as authenticating user liveness through video
        verification
      </Text>
    ),
    descriptions: [
      {
        paragraph:
          "As a Front-end developer in our team, I contribute to creating intuitive and user-friendly interfaces that make our technology accessible and easy to use. Working at UID has allowed me to collaborate with a talented team of professionals and stay at the forefront of Front-end development advancements",
      },
      {
        paragraph:
          "Collaborated on developing a gRPC based panel, consolidating four separate panels into a single, highly reusable interface",
      },
      {
        paragraph:
          "Successfully refactored a Progressive Web App (PWA), enhancing performance and maintainability",
      },
      {
        paragraph:
          "Contributed to streamlining processes and improving development team efficiency",
      },
    ],
    timeline: "May 2024 - Aug 2024",
    workplace_type: "Remote",
    location: "Tehran, Iran",
    divider: true,
  },
  {
    logo: { src: HadishLogo, alt: "Hadish Sabz Parseh's logo" },
    position: "Front-end Developer",
    company_name: "Hadish Sabz Parseh",
    info: (
      <Text fontWeight="bold" textAlign="justify" rel="preload">
        Hadish Sabz Parseh is one of the largest Smart-TV manufacturers in Iran
      </Text>
    ),
    descriptions: [
      {
        paragraph:
          " Developed a two-language shopping website with a focus on improving client experience",
      },
      {
        paragraph:
          "Built a vertical B2B website including three panels based on the roles in the company with certain accessibilities and also Operated in an agile-driven environment to effectively maintain project timelines",
      },
    ],
    timeline: "Jul 2020 - Aug 2021",
    workplace_type: "Hybrid",
    location: "Tehran, Iran",
    divider: true,
  },
  {
    logo: { src: CrossLogo, alt: "Cross sport's logo" },
    position: "Front-end Developer",
    company_name: "Cross Sport",
    info: (
      <Text fontWeight="bold" textAlign="justify" rel="preload">
        CrossSport is one of the largest online stores and manufacturers of
        sport equipment in the country
      </Text>
    ),
    descriptions: [
      {
        paragraph:
          "Started off my professional career with a solid team as a Front-end developer",
      },
    ],
    timeline: "Jun 2019 - Mar 2020",
    workplace_type: "On-site",
    location: "Tehran, Iran",
    divider: false,
  },
];
