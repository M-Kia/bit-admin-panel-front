import { JSX } from "react";

import Stack from "@mui/material/Stack";

import AnalyticsCard from "@/components/analytic/Card";

export default function Analytics(): JSX.Element {
  return (
    <Stack direction="row" spacing={16}>
      <AnalyticsCard label="products" value={20} />
      <AnalyticsCard label="categories" value={10} />
    </Stack>
  );
}
