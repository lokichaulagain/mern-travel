import { Box, Stack } from "@mui/material";
import CardLarge from "../components/CardLarge";
import CardMedium from "../components/CardMedium";
import CardSmall from "../components/CardSmall";
import Header from "../components/Header";

export default function Home() {
  return (
    <Stack spacing={2}>
      <Header />
      <Stack
        direction="row"
        spacing={2}>
        <CardMedium />
        <CardMedium />
        <CardMedium />
        <CardMedium />
      </Stack>

      <Stack
        direction="row"
        spacing={2}>
        <CardSmall />
        <CardSmall />
        <CardSmall />
        <CardSmall />
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
