import { Box, Stack } from "@mui/material";
import { useContext } from "react";
import { MiscellaneousContext } from "../../context/MiscellaneousContext";
import CardLarge from "../components/CardLarge";
import CardMedium from "../components/CardMedium";
import CardSmall from "../components/CardSmall";
import Header from "../components/Header";
import { getSession, useSession } from "next-auth/react";

export default function Home() {

  return (
    <Stack spacing={2}>
      <Header />
      <Stack
        direction="row"
        spacing={2}>
        <CardMedium
          title={"Team Members"}
          item={8}
        />

        <CardMedium
          title={"Total Services"}
          item={11}
        />

        <CardMedium
          title={"Total Packages"}
          item={5}
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
          item={12}
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

// protected route
// export async function getServerSideProps({ req }:any) {
//   const session = await getSession({ req });

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/signin",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }
