import { Box, Stack } from "@mui/material";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import { OurServicesContext } from "../../context/OurServicesContext";
import { PricePackageContext } from "../../context/PricePackageContext";
import { TeamContext } from "../../context/TeamContext";
import CardLarge from "../components/CardLarge";
import CardMedium from "../components/CardMedium";
import CardSmall from "../components/CardSmall";
import Header from "../components/Header";

export default function Home() {
  const { members } = useContext(TeamContext);
  const { sec5 } = useContext(OurServicesContext);
  const { pricePackages } = useContext(PricePackageContext);
  const { blogs } = useContext(BlogContext);

  return (
    <Stack spacing={2}>
      <Header />
      <Stack
        direction="row"
        spacing={2}>
        <CardMedium
          title={"Team Members"}
          item={members.length}
        />

        <CardMedium
          title={"Total Services"}
          item={sec5.length}
        />

        <CardMedium
          title={"Total Packages"}
          item={pricePackages.length}
        />

        <CardMedium
          title={"Total Destination"}
          item={14}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}>
        <CardSmall
          title={"New Mails"}
          item={8}
        />
        <CardSmall
          title={"Total Blogs"}
          item={blogs.length}
        />
        <CardSmall
          title={"Pending  Tour"}
          item={12}
        />
        <CardSmall
          title={"Completed  Tour"}
          item={18}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}>
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
      </Stack>
    </Stack>
  );
}
