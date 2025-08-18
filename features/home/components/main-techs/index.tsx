import { SectionMaker } from "@/shared/utils/section-maker";
import { mainTechs } from "@/features/home/constants/main-techs";
import { Grid, GridItem } from "@chakra-ui/react";

const MainTechs = async () => {
  return (
    <SectionMaker label="Main Techs">
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(5, 1fr)" }}
        gap={8}
      >
        {mainTechs.map(({ name, icon }) => (
          <GridItem
            key={name}
            width="100%"
            height="100%"
            backgroundColor="#3A3A3B"
            display="flex"
            justifyContent="center"
            padding={2}
            transitionProperty="all"
            transitionDuration=".2s"
            _hover={{
              opacity: 0.75,
            }}
            style={{
              background:
                name === "nextjs"
                  ? "linear-gradient(90deg, #242424 0%, #2F2F2F 100%)"
                  : name === "nestjs"
                    ? "linear-gradient(90deg, #2F2F2F 0%, #2F2F2F 100%)"
                    : name === "typescript"
                      ? "linear-gradient(90deg, #2F2F2F 0%, #2F2F2F 100%)"
                      : (name === "tailwind" &&
                          "linear-gradient(90deg, #2F2F2F 0%, #242424 100%)") ||
                        "",
              border: "2px solid #3D3D3D",
              borderTopLeftRadius: name === "react" ? 20 : 0,
              borderBottomLeftRadius: name === "react" ? 20 : 0,
              borderTopRightRadius: name === "tailwind" ? 20 : 0,
              borderBottomRightRadius: name === "tailwind" ? 20 : 0,
            }}
          >
            {icon}
          </GridItem>
        ))}
      </Grid>
    </SectionMaker>
  );
};

export default MainTechs;
